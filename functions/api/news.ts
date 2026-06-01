// Cloudflare Pages Function: /api/news
//   GET  … microCMS のお知らせ一覧を返す（サイト表示用・公開）
//   POST … 合言葉を照合し、お知らせを microCMS に投稿（スタッフ投稿ページ用）
//
// microCMS の APIキーはここ（サーバー側）にだけ置き、ブラウザには出さない。
// フリープランのキー1個（GET+POST 権限）で読み書き両方をまかなう。
//
// 必要な環境変数（Cloudflare Pages の Variables and Secrets に設定）:
//   MICROCMS_SERVICE_DOMAIN … microCMS のサービスID（例: t1ay8zpm8u）
//   MICROCMS_API_KEY        … GET と POST の権限を持つ microCMS APIキー
//   STAFF_PASSWORD          … スタッフ用の合言葉（POST 時に照合）
//   MICROCMS_NEWS_ENDPOINT  … 任意。お知らせAPIのエンドポイントID（既定: news）

function json(obj: unknown, status = 200): Response {
  return new Response(JSON.stringify(obj), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  })
}

function microcmsUrl(env: any, query = ""): string {
  const endpoint = env.MICROCMS_NEWS_ENDPOINT || "news"
  return `https://${env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/${endpoint}${query}`
}

// ── 一覧取得（サイト表示用） ──
export async function onRequestGet(context: any): Promise<Response> {
  const { env } = context
  if (!env.MICROCMS_SERVICE_DOMAIN || !env.MICROCMS_API_KEY) {
    return json({ error: "not_configured" }, 500)
  }
  let res: Response
  try {
    res = await fetch(microcmsUrl(env, "?limit=100&orders=-date"), {
      headers: { "X-MICROCMS-API-KEY": env.MICROCMS_API_KEY },
    })
  } catch {
    return json({ error: "microcms_unreachable" }, 502)
  }
  if (!res.ok) {
    return json({ error: `microcms_error_${res.status}` }, 502)
  }
  const data = await res.json().catch(() => ({ contents: [] }))
  return json(data)
}

// ── 投稿（スタッフ投稿ページ用） ──
export async function onRequestPost(context: any): Promise<Response> {
  const { request, env } = context

  if (!env.STAFF_PASSWORD || !env.MICROCMS_SERVICE_DOMAIN || !env.MICROCMS_API_KEY) {
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

  let res: Response
  try {
    res = await fetch(microcmsUrl(env), {
      method: "POST",
      headers: {
        "X-MICROCMS-API-KEY": env.MICROCMS_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: String(draft.title),
        date: draft.date,
        category: Array.isArray(draft.category) ? draft.category : [draft.category],
        excerpt: draft.excerpt ?? "",
        body: String(draft.body),
      }),
    })
  } catch {
    return json({ error: "microCMS への接続に失敗しました" }, 502)
  }

  if (!res.ok) {
    const detail = await res.text().catch(() => "")
    return json({ error: `microCMS への投稿に失敗しました (${res.status})`, detail }, 502)
  }

  const data: any = await res.json().catch(() => ({}))
  return json({ ok: true, id: data.id })
}

// ── 削除（スタッフ投稿ページの削除ボタン用） ──
export async function onRequestDelete(context: any): Promise<Response> {
  const { request, env } = context

  if (!env.STAFF_PASSWORD || !env.MICROCMS_SERVICE_DOMAIN || !env.MICROCMS_API_KEY) {
    return json({ error: "サーバー側の設定が未完了です（管理者にご連絡ください）" }, 500)
  }

  let payload: any
  try {
    payload = await request.json()
  } catch {
    return json({ error: "リクエストの形式が不正です" }, 400)
  }

  const { password, id } = payload ?? {}

  if (password !== env.STAFF_PASSWORD) {
    return json({ error: "パスワードが違います" }, 401)
  }
  if (!id) {
    return json({ error: "削除対象が指定されていません" }, 400)
  }

  let res: Response
  try {
    res = await fetch(`${microcmsUrl(env)}/${encodeURIComponent(id)}`, {
      method: "DELETE",
      headers: { "X-MICROCMS-API-KEY": env.MICROCMS_API_KEY },
    })
  } catch {
    return json({ error: "microCMS への接続に失敗しました" }, 502)
  }

  if (!res.ok) {
    const detail = await res.text().catch(() => "")
    return json({ error: `削除に失敗しました (${res.status})`, detail }, 502)
  }

  return json({ ok: true })
}
