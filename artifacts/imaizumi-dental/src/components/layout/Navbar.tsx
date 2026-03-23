import { useState } from "react";
import { CalendarDays, Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const BOOKING_URL = "https://functional-prototype.replit.app/book/imaizumi-dental";

const NAV_LINKS = [
  { name: "ホーム", href: "#" },
  { name: "ごあいさつ", href: "#concept" },
  { name: "当院の特徴", href: "#features" },
  { name: "診療内容", href: "#treatments" },
  { name: "料金表", href: "#pricing" },
  { name: "アクセス", href: "#access" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white border-b border-border sticky top-0 z-50 shadow-sm">
        {/* Top Bar */}
        <div className="hidden lg:flex justify-end items-center bg-gray-50 border-b border-border px-4 sm:px-6 lg:px-8 h-12">
          <div className="flex items-center gap-8 h-full">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Phone className="w-4 h-4 text-primary" />
              <span>TEL: 近日公開</span>
            </div>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 h-full px-8 bg-accent text-accent-foreground text-sm font-bold hover:bg-accent/90 transition-colors"
            >
              <CalendarDays className="w-4 h-4" />
              WEB予約はこちら
            </a>
          </div>
        </div>

        {/* Main Nav */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-primary flex items-center justify-center text-white">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22C10.5 22 9 20 9 18C9 16 12 14 12 14C12 14 15 16 15 18C15 20 13.5 22 12 22Z" />
                <path d="M12 2V8" />
                <path d="M5.5 5.5L8.5 8.5" />
                <path d="M18.5 5.5L15.5 8.5" />
                <path d="M3 12H8" />
                <path d="M16 12H21" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl leading-tight text-foreground tracking-wide">
                今泉歯科医院
              </span>
              <span className="text-[10px] text-primary font-bold tracking-widest uppercase">
                Imaizumi Dental Clinic
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center h-full">
            <nav className="flex items-center h-full">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="h-full flex items-center px-5 text-sm font-bold text-foreground relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Button & Booking */}
          <div className="flex items-center gap-4 lg:hidden">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded bg-accent text-accent-foreground text-xs font-bold"
            >
              <CalendarDays className="w-4 h-4" />
              WEB予約
            </a>
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-[60] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 20 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl z-[70] lg:hidden flex flex-col"
            >
              <div className="p-6 flex justify-end">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-muted-foreground hover:text-foreground bg-muted rounded-none"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="px-6 pb-6 flex flex-col gap-6 overflow-y-auto flex-1">
                <nav className="flex flex-col gap-0">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-bold text-foreground py-4 border-b border-border"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto pt-8 flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-foreground px-2">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>TEL: 近日公開</span>
                  </div>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-accent text-accent-foreground font-bold shadow-md"
                  >
                    <CalendarDays className="w-5 h-5" />
                    24時間WEB予約
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
