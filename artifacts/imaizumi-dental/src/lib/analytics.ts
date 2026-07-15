// Google Analytics(GA4) 連携ユーティリティ。
// gtag は index.html で読み込み済み（G-MZ3XMKBVS4）。
// このサイトはSPAなので、ページ遷移ごとに page_view を手動送信しないと
// 2ページ目以降がカウントされない（過小計測になる）ため、ここで補う。

type GtagParams = Record<string, unknown>

function gtag(...args: unknown[]) {
  const w = window as unknown as { gtag?: (...a: unknown[]) => void }
  if (typeof w.gtag === "function") w.gtag(...args)
}

// ルート遷移ごとのページビュー送信
export function trackPageView(path: string, title: string) {
  gtag("event", "page_view", {
    page_path: path,
    page_title: title,
    page_location: window.location.origin + path,
  })
}

// 任意イベント送信
export function trackEvent(name: string, params?: GtagParams) {
  gtag("event", name, params ?? {})
}

// 電話タップ・WEB予約クリックを自動計測（個別のaタグを触らず、委譲で拾う）
let clickBound = false
export function initClickTracking() {
  if (clickBound) return
  clickBound = true
  document.addEventListener(
    "click",
    (e) => {
      const target = e.target as HTMLElement | null
      const a = target?.closest?.("a")
      if (!a) return
      const href = a.getAttribute("href") || ""
      if (href.startsWith("tel:")) {
        trackEvent("tel_tap", { link_url: href, page: window.location.pathname })
      } else if (/onrender\.com\/book/.test(href) || href === "/booking" || href.startsWith("/booking?")) {
        // 「WEB予約」ボタンは読み込み画面(/booking)経由でRenderへ遷移する
        trackEvent("book_click", { link_url: href, page: window.location.pathname })
      }
    },
    { capture: true },
  )
}
