import { useEffect } from "react"

interface SEOProps {
  title?: string
  description?: string
}

const SITE_NAME = "今泉歯科医院"
const DEFAULT_DESCRIPTION = "群馬県桐生市の今泉歯科医院。一般歯科・小児歯科・予防歯科・入れ歯・審美歯科・お口のエステ（ホワイトニング・クリーニング・口臭外来）・訪問診療など幅広く対応。土曜診療あり・駐車場10台完備。TEL 0277-54-9893"

export function useSEO({ title, description }: SEOProps = {}) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${SITE_NAME}`
      : `${SITE_NAME} | 群馬県桐生市の歯科・歯医者`
    document.title = fullTitle

    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute("content", description ?? DEFAULT_DESCRIPTION)
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute("content", fullTitle)

    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute("content", description ?? DEFAULT_DESCRIPTION)

    return () => {
      document.title = `${SITE_NAME} | 群馬県桐生市の歯科・歯医者`
    }
  }, [title, description])
}
