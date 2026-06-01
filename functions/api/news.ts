// Cloudflare Pages Function: POST /api/news
// スタッフ投稿ページからの送信を受け取り、合言葉を照合してから microCMS に投稿する。
// microCMS の「書き込み用APIキー」はここ（サーバー側）にだけ置き、ブラウザには出さない。
//
// 必要な環境変数（Cloudflare Pages の Variables and Secrets に設定）:
//   STAFF_PASSWORD            … スタッフ用の合言葉
//   MICROCMS_SERVICE_DOMAIN   … microCMS のサービスID（例: t1ay8zpm8u）
//   MICROCMS_WRITE_API_KEY    … POST 権限のある microCMS APIキー
//   MICROCMS_NEWS_ENDPOINT    … 任意。お知らせAPIのエンドポイントID（既定: news）

function json(obj: unknown, status = 200): Response {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  })
}

export async function onRequestPost(context: any): Promise<Response> {
  const { request, env } = context

  if (!env.STAFF_PASSWORD || !env.MICROCMS_SERVICE_DOMAIN || !env.MICROCMS_WRITE_API_KEY) {
    return json({ error: "サーバー側の設定が未完了です（管理者にご連絡ください）" }, 500)
  }

  let payload: any
  try {
    payload = await request.json()
  } catch {
    return json({ error: "リクエストの形式が不正です" }, 400)
  }

  const { password, draft } = payload ?? {}

  if (password !== env.STAFF_PASSWORD) {
    return json({ error: "パスワードが違います" }, 401)
  }

  if (!draft || !draft.title || !draft.body) {
    return json({ error: "タイトルと本文は必須です" }, 400)
  }

  const endpoint = env.MICROCMS_NEWS_ENDPOINT || "news"

  let res: Response
  try {
    res = await fetch(
      `https://${env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/${endpoint}`,
      {
        method: "POST",
        headers: {
          "X-MICROCMS-API-KEY": env.MICROCMS_WRITE_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: String(draft.title),
          date: draft.date,
          category: Array.isArray(draft.category) ? draft.category : [draft.category],
          excerpt: draft.excerpt ?? "",
          body: String(draft.body),
        }),
      },
    )
  } catch {
    return json({ error: "microCMS への接続に失敗しました" }, 502)
  }

  if (!res.ok) {
    const detail = await res.text().catch(() => "")
    return json(
      { error: `microCMS への投稿に失敗しました (${res.status})`, detail },
      502,
    )
  }

  const data: any = await res.json().catch(() => ({}))
  return json({ ok: true, id: data.id })
}
