import { useState } from "react"
import { BOOKING_PATH } from "@/config/booking"
import { Link, useLocation } from "wouter"
import { Menu, X, Phone } from "lucide-react"

// desktop:false の項目はPC上部ナビには出さず、モバイルメニューにのみ表示する
// （PCは項目が多いと折り返して崩れるため、主要項目に絞る）
const navItems: { label: string; href: string; desktop?: boolean }[] = [
  { label: "お知らせ", href: "/news" },
  { label: "コラム", href: "/column" },
  { label: "診療内容", href: "/#treatment" },
  { label: "はじめての方へ", href: "/#about" },
  { label: "医師紹介", href: "/#doctor", desktop: false },
  { label: "院内のご紹介", href: "/#gallery", desktop: false },
  { label: "お問い合わせ", href: "/#contact", desktop: false },
  { label: "よくある質問", href: "/faq" },
  { label: "アクセス", href: "/access" },
  { label: "English", href: "/en" },
]

const specialItems = [
  { label: "お口のエステ", href: "/dental-esthetics" },
  { label: "採用情報", href: "/recruit" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [location] = useLocation()

  const visibleSpecialItems = specialItems.filter((item) => item.href !== location)

  return (
    <header className="bg-card sticky top-0 z-50 shadow-sm">
      {/* Special pages bar – hidden when already on that page */}
      {visibleSpecialItems.length > 0 && (
        <div className="bg-[#3d5f7a] hidden lg:block">
          <div className="container mx-auto px-4 flex justify-end gap-4 py-1">
            {visibleSpecialItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white/80 text-xs hover:text-white transition-colors flex items-center gap-1"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] inline-block"></span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white border-2 border-[#7eb4d2] flex items-center justify-center overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}clinic-icon.png`}
                alt="今泉歯科医院"
                className="w-full h-full object-contain p-0.5"
              />
            </div>
            <div>
              <p className="text-[#3d5f7a] font-bold text-lg tracking-wide">今泉歯科医院</p>
              <p className="text-[#3d5f7a] text-[10px] tracking-widest">IMAIZUMI DENTIST OFFICE</p>
            </div>
          </Link>

          {/* Desktop Navigation（主要項目のみ・折り返し防止） */}
          <nav className="hidden xl:flex items-center gap-5">
            {navItems
              .filter((item) => item.desktop !== false)
              .map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[#4a4a4a] text-sm hover:text-[#7eb4d2] transition-colors whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
          </nav>

          {/* CTA and Phone */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a href={BOOKING_PATH} target="_blank" rel="noopener noreferrer" className="bg-[#f5a623] text-white text-xs px-4 py-2 rounded-full hover:bg-[#e0961c] transition-colors whitespace-nowrap">WEB予約</a>
            <div className="flex items-baseline gap-1 whitespace-nowrap">
              <span className="text-[#7eb4d2] text-xs font-medium">TEL</span>
              <a href="tel:0277549893" className="text-[#7eb4d2] text-lg font-bold tracking-wider hover:opacity-80 transition-opacity">0277-54-9893</a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 text-[#4a4a4a]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニュー"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="xl:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 text-[#4a4a4a] hover:text-[#7eb4d2] border-b border-border/50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            {visibleSpecialItems.length > 0 && (
              <div className="py-2 border-b border-border/50 space-y-1">
                {visibleSpecialItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-2 py-2 text-[#3d5f7a] font-medium text-sm hover:text-[#7eb4d2]"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] inline-block"></span>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
            <div className="pt-4 space-y-3">
              <a href={BOOKING_PATH} target="_blank" rel="noopener noreferrer" className="block bg-[#f5a623] text-white text-center py-3 rounded-full text-sm hover:bg-[#e0961c] transition-colors">WEB予約</a>
              <div className="flex items-center justify-center gap-2 text-[#3d5f7a]">
                <Phone className="h-4 w-4" />
                <a href="tel:0277549893" className="text-[#3d5f7a] text-lg font-bold hover:opacity-80 transition-opacity">0277-54-9893</a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
