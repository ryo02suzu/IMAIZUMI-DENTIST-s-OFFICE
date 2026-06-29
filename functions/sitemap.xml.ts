// Cloudflare Pages Function: GET /sitemap.xml
// 固定ページ＋microCMSのお知らせ記事URLを含むサイトマップを動的生成する。
// （microCMS未設定や取得失敗時は固定ページのみ出力）

const SITE = "https://imaizumi-dentist-office.com"

const STATIC: { path: string; changefreq: string; priority: string }[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/access", changefreq: "monthly", priority: "0.8" },
  { path: "/faq", changefreq: "monthly", priority: "0.8" },
  { path: "/news", changefreq: "weekly", priority: "0.9" },
  { path: "/column", changefreq: "weekly", priority: "0.8" },
  { path: "/column/wisdom-tooth", changefreq: "monthly", priority: "0.7" },
  { path: "/column/denture-fit", changefreq: "monthly", priority: "0.7" },
  { path: "/column/whitening-guide", changefreq: "monthly", priority: "0.7" },
  { path: "/column/silver-to-ceramic", changefreq: "monthly", priority: "0.7" },
  { path: "/column/cavity-stages", changefreq: "monthly", priority: "0.7" },
  { path: "/column/oral-surgery-scope", changefreq: "monthly", priority: "0.7" },
  { path: "/column/cleaning-frequency", changefreq: "monthly", priority: "0.7" },
  { path: "/column/brushing-floss", changefreq: "monthly", priority: "0.7" },
  { path: "/column/fluoride", changefreq: "monthly", priority: "0.7" },
  { path: "/column/checkup", changefreq: "monthly", priority: "0.7" },
  { path: "/column/kids-first-visit", changefreq: "monthly", priority: "0.7" },
  { path: "/column/home-visit-care", changefreq: "monthly", priority: "0.7" },
  { path: "/column/tooth-sensitivity", changefreq: "monthly", priority: "0.7" },
  { path: "/column/filling-came-off", changefreq: "monthly", priority: "0.7" },
  { path: "/column/toothache", changefreq: "monthly", priority: "0.7" },
  { path: "/column/gum-disease", changefreq: "monthly", priority: "0.7" },
  { path: "/column/bad-breath", changefreq: "monthly", priority: "0.7" },
  { path: "/treatment/general", changefreq: "monthly", priority: "0.8" },
  { path: "/treatment/pediatric", changefreq: "monthly", priority: "0.8" },
  { path: "/treatment/preventive", changefreq: "monthly", priority: "0.8" },
  { path: "/treatment/denture", changefreq: "monthly", priority: "0.8" },
  { path: "/treatment/aesthetic", changefreq: "monthly", priority: "0.8" },
  { path: "/treatment/whitening", changefreq: "monthly", priority: "0.8" },
  { path: "/treatment/oral-surgery", changefreq: "monthly", priority: "0.7" },
  { path: "/treatment/home-visit", changefreq: "monthly", priority: "0.7" },
  { path: "/dental-esthetics", changefreq: "monthly", priority: "0.8" },
  { path: "/subscription", changefreq: "monthly", priority: "0.7" },
  { path: "/breath-care", changefreq: "monthly", priority: "0.7" },
  { path: "/recruit", changefreq: "monthly", priority: "0.6" },
  { path: "/en", changefreq: "monthly", priority: "0.7" },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
]

function urlEntry(path: string, lastmod: string, changefreq: string, priority: string) {
  return `  <url>\n    <loc>${SITE}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
}

export async function onRequestGet(context: any): Promise<Response> {
  const { env } = context
  const today = new Date().toISOString().slice(0, 10)

  const entries: string[] = STATIC.map((s) =>
    urlEntry(s.path, today, s.changefreq, s.priority),
  )

  // お知らせ記事を microCMS から取得して追加
  if (env.MICROCMS_SERVICE_DOMAIN && env.MICROCMS_API_KEY) {
    try {
      const endpoint = env.MICROCMS_NEWS_ENDPOINT || "news"
      const res = await fetch(
        `https://${env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/${endpoint}?limit=100&fields=id,date,publishedAt,revisedAt`,
        { headers: { "X-MICROCMS-API-KEY": env.MICROCMS_API_KEY } },
      )
      if (res.ok) {
        const data: any = await res.json()
        for (const c of data.contents ?? []) {
          const lastmod =
            (c.revisedAt || c.publishedAt || c.date || "").slice(0, 10) || today
          entries.push(urlEntry(`/news/${c.id}`, lastmod, "monthly", "0.6"))
        }
      }
    } catch {
      // 失敗時は固定ページのみ
    }
  }

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    entries.join("\n") +
    `\n</urlset>\n`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
