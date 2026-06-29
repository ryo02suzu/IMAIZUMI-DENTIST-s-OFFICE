import { useEffect } from "react"

const SITE_URL = "https://imaizumi-dentist-office.com"

// JSON-LD（構造化データ）を <head> に差し込むフック。アンマウントで除去する。
export function useJsonLd(data: object | null) {
  const json = data ? JSON.stringify(data) : ""
  useEffect(() => {
    if (!json) return
    const el = document.createElement("script")
    el.type = "application/ld+json"
    el.textContent = json
    document.head.appendChild(el)
    return () => {
      document.head.removeChild(el)
    }
  }, [json])
}

// FAQPage（よくある質問）の構造化データを作るヘルパー。
export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  }
}

// パンくず（BreadcrumbList）を作るヘルパー。
// 最後の項目（現在ページ）は item を付けないのが推奨。
export function breadcrumbLd(items: { name: string; path?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      ...(it.path ? { item: `${SITE_URL}${it.path}` } : {}),
    })),
  }
}
