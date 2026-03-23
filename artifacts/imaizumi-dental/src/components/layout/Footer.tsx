import { ChevronRight } from "lucide-react"

const footerMain = [
  { label: "ホーム", href: "/" },
  { label: "診療内容", href: "/#treatment" },
  { label: "はじめての方へ", href: "/#about" },
  { label: "医師紹介", href: "/#doctor" },
  { label: "院内のご紹介", href: "/#gallery" },
  { label: "お知らせ", href: "/news" },
  { label: "お問い合わせ", href: "/#contact" },
  { label: "アクセス", href: "/#access" },
  { label: "プライバシーポリシー", href: "/privacy-policy" },
]

const footerTreatment = [
  { label: "一般歯科", href: "/treatment/general" },
  { label: "小児歯科", href: "/treatment/pediatric" },
  { label: "予防歯科", href: "/treatment/preventive" },
  { label: "入れ歯", href: "/treatment/denture" },
  { label: "審美歯科", href: "/treatment/aesthetic" },
  { label: "口腔外科", href: "/treatment/oral-surgery" },
  { label: "ホワイトニング", href: "/treatment/whitening" },
  { label: "訪問診療", href: "/treatment/home-visit" },
]

export function Footer() {
  return (
    <footer className="bg-[#7eb4d2] text-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Logo and Address */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white text-[6px] font-bold leading-tight text-center">
                  今泉<br/>歯科
                </span>
              </div>
              <div>
                <p className="text-white font-bold">今泉歯科医院</p>
                <p className="text-white/70 text-[8px] tracking-widest">IMAIZUMI DENTAL CLINIC</p>
              </div>
            </div>
            <p className="text-white/80 text-sm mb-4">
              群馬県桐生市広沢町間ノ島291-5
            </p>

            <div className="mb-4">
              <a href="tel:0277549893" className="block text-white font-bold text-lg mb-1 hover:opacity-80 transition-opacity">
                0277-54-9893
              </a>
              <p className="text-white/60 text-xs mb-4">月〜金 9:30〜19:00（木午前除く）</p>
            </div>

            <div className="mb-4">
              <p className="text-white/80 text-sm font-medium mb-2">【アクセス】</p>
              <p className="text-white/70 text-xs leading-relaxed">・バス停「昭和橋」から徒歩2分</p>
              <p className="text-white/70 text-xs leading-relaxed">・東武桐生線 新桐生駅から約1.6km</p>
              <p className="text-white/70 text-xs leading-relaxed mt-1">・駐車場10台完備</p>
              <p className="text-white/70 text-xs leading-relaxed">・日曜・祝日休診</p>
            </div>
          </div>

          {/* Site Links (page order) */}
          <div>
            <p className="text-white font-medium mb-3">サイトメニュー</p>
            {footerMain.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-white/90 text-sm py-1.5 hover:text-white transition-colors border-b border-white/10 last:border-0"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Treatment Links */}
          <div>
            <p className="text-white font-medium mb-3">診療内容</p>
            {footerTreatment.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 text-white/80 text-sm py-1.5 hover:text-white transition-colors border-b border-white/10 last:border-0"
              >
                <ChevronRight className="h-3 w-3 shrink-0" />
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white/20 text-center">
          <p className="text-white/60 text-xs">
            &copy; {new Date().getFullYear()} 今泉歯科医院 All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Page Top Button */}
      <a
        href="#"
        className="fixed bottom-6 right-6 w-16 h-16 bg-white rounded-full shadow-lg flex flex-col items-center justify-center hover:shadow-xl transition-shadow group z-50"
      >
        <span className="text-[#7eb4d2] text-[8px] font-bold">PAGE</span>
        <span className="text-[#7eb4d2] text-[8px] font-bold">TOP</span>
        <svg className="w-8 h-8 text-[#7eb4d2] mt-1" viewBox="0 0 32 32" fill="currentColor">
          <path d="M16 4c-4 0-7 2-8 5-1 4 0 8 1 12 1 3 2 7 4 7s2-3 3-6c1 3 1 6 3 6s3-4 4-7c1-4 2-8 1-12-1-3-4-5-8-5z" />
        </svg>
      </a>
    </footer>
  )
}
