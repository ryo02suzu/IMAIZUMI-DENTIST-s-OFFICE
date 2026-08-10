// メンテナンス公開中のミドルウェア。
//
// すべてのリクエストに HTTP 503（Service Unavailable）＋ Retry-After を付けて
// メンテナンス画面を返す。200 で返すと検索エンジンが「これがこのURLの本来の内容だ」と
// 解釈してしまい、順位や登録が失われる。503 なら「一時的に止まっているだけ」と伝わり、
// 再開後に元のページへ戻りやすい。
//
// 解除するときは MAINTENANCE を false にする（このファイルごと消してもよい）。

const MAINTENANCE: boolean = true

// 公開再開の予定日時（2026-08-28 00:00 JST）。検索エンジンへの再訪の目安になる。
const RETRY_AFTER = "Thu, 27 Aug 2026 15:00:00 GMT"

// 503 にせずそのまま返すもの（メンテナンス画面の表示に必要なファイル）
const PASS_THROUGH = new Set(["/favicon.svg", "/clinic-icon-square.png"])

// next() が使えなかった場合の最小限の代替。画面が真っ白になるのを防ぐ。
const FALLBACK = `<!DOCTYPE html><html lang="ja"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>今泉歯科医院 — ホームページ更新のお知らせ</title></head>
<body style="font-family:'Hiragino Mincho ProN',serif;text-align:center;padding:60px 20px;color:#3d5f7a;background:#eef3f9">
<h1 style="font-size:20px">今泉歯科医院</h1>
<p>ホームページ更新のため一時的に休止しております。</p>
<p>ご予約・お問い合わせは <a href="tel:0277549893" style="color:#4b7cad;font-weight:bold">0277-54-9893</a> まで</p>
</body></html>`

export async function onRequest(context: any): Promise<Response> {
  const { request, next } = context

  if (!MAINTENANCE) {
    return next()
  }

  const pathname = new URL(request.url).pathname
  if (PASS_THROUGH.has(pathname)) {
    return next()
  }

  const headers = new Headers({
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
    "CDN-Cache-Control": "no-store",
    "Retry-After": RETRY_AFTER,
  })

  try {
    const page = await next("/index.html")
    return new Response(page.body, { status: 503, statusText: "Service Unavailable", headers })
  } catch {
    return new Response(FALLBACK, { status: 503, statusText: "Service Unavailable", headers })
  }
}
