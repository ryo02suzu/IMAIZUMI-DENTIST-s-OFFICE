import { useState, useEffect } from "react";
import { CalendarDays, Menu, X, Phone, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const BOOKING_URL = "https://functional-prototype.replit.app/book/imaizumi-dental";

const NAV_LINKS = [
  { name: "ホーム", href: "#" },
  { name: "診療内容", href: "#treatments" },
  { name: "当院について", href: "#about" },
  { name: "特徴", href: "#features" },
  { name: "アクセス", href: "#contact" },
  { name: "ご予約", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={cn(
          "w-full bg-white fixed top-0 z-50 transition-shadow duration-300",
          isScrolled ? "shadow-md" : ""
        )}
      >
        {/* Top Bar */}
        <div className="hidden lg:flex justify-end items-center px-4 sm:px-6 lg:px-8 h-12 border-b border-border/50 bg-white">
          <div className="flex items-center h-full">
            <div className="flex items-center gap-2 px-6 text-foreground font-bold font-mono">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-sm">TEL: 近日公開</span>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 lg:h-24 bg-white">
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl lg:text-3xl leading-tight text-foreground tracking-wide">
                今泉歯科医院
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center h-full">
            <nav className="flex items-center h-full space-x-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="h-full flex items-center px-4 text-sm font-bold text-foreground hover:text-primary transition-colors relative"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Button */}
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
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] lg:hidden"
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
                  className="p-2 text-muted-foreground hover:text-foreground bg-muted"
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
                      className="text-lg font-bold text-foreground py-4 border-b border-border flex justify-between items-center"
                    >
                      {link.name}
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </a>
                  ))}
                </nav>
                <div className="mt-auto pt-8 flex flex-col gap-4">
                  <div className="flex items-center justify-center gap-2 text-base font-bold text-foreground bg-gray-50 py-4 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>TEL: 近日公開</span>
                  </div>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-lg bg-accent text-accent-foreground font-bold shadow-md"
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
