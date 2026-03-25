import { useState } from "react"
import { Link, useLocation } from "wouter"
import { Menu, X, Phone } from "lucide-react"

const navItems = [
  { label: "診療内容", href: "/#treatment" },
  { label: "はじめての方へ", href: "/#about" },
  { label: "医師紹介", href: "/#doctor" },
  { label: "院内のご紹介", href: "/#gallery" },
  { label: "お問い合わせ", href: "/#contact" },
  { label: "アクセス", href: "/#access" },
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
            <div className="w-12 h-12 rounded-full bg-[#7eb4d2] flex items-center justify-center">
              <span className="text-white text-[8px] font-bold leading-tight text-center">
                今泉<br/>歯科
              </span>
            </div>
            <div>
              <p className="text-[#3d5f7a] font-bold text-lg tracking-wide">今泉歯科医院</p>
              <p className="text-[#3d5f7a] text-[10px] tracking-widest">IMAIZUMI DENTAL CLINIC</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#4a4a4a] text-sm hover:text-[#7eb4d2] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA and Phone */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://functional-prototype.replit.app/book/imaizumi-dental"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f5a623] text-white text-xs px-4 py-2 rounded-full hover:bg-[#e09520] transition-colors"
            >
              ご予約・お問い合わせ
            </a>
            <div className="flex items-baseline gap-1">
              <span className="text-[#7eb4d2] text-xs font-medium">TEL</span>
              <a href="tel:0277549893" className="text-[#7eb4d2] text-lg font-bold tracking-wider hover:opacity-80 transition-opacity">0277-54-9893</a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#4a4a4a]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニュー"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
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
              <a
                href="https://functional-prototype.replit.app/book/imaizumi-dental"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#f5a623] text-white text-center py-3 rounded-full"
              >
                ご予約・お問い合わせ
              </a>
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
