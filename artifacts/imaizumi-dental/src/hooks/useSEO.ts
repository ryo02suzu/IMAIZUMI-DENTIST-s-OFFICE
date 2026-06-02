import { useEffect } from "react"

interface SEOProps {
  title?: string
  description?: string
  canonicalPath?: string
}

const SITE_NAME = "今泉歯科医院"
const SITE_URL = "https://imaizumi-dentist-office.com"
const DEFAULT_TITLE = `今泉歯科医院｜桐生市の歯医者・歯科`
const DEFAULT_DESCRIPTION = "桐生市の歯医者「今泉歯科医院」。一般歯科・小児歯科・予防歯科・入れ歯・審美歯科・ホワイトニング・訪問診療に対応。土曜診療あり・駐車場10台完備・昭和橋バス停から徒歩2分。TEL 0277-54-9893"

export function useSEO({ title, description, canonicalPath }: SEOProps = {}) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${SITE_NAME}`
      : DEFAULT_TITLE

    document.title = fullTitle

    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute("content", description ?? DEFAULT_DESCRIPTION)
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute("content", fullTitle)

    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute("content", description ?? DEFAULT_DESCRIPTION)

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl && canonicalPath) ogUrl.setAttribute("content", `${SITE_URL}${canonicalPath}`)

    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical && canonicalPath) canonical.setAttribute("href", `${SITE_URL}${canonicalPath}`)

    return () => {
      document.title = DEFAULT_TITLE
      if (metaDesc) metaDesc.setAttribute("content", DEFAULT_DESCRIPTION)
      if (canonical) canonical.setAttribute("href", `${SITE_URL}/`)
    }
  }, [title, description, canonicalPath])
}
