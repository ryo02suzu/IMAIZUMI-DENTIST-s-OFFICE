import { useState, useEffect } from "react";
import { CalendarDays, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const BOOKING_URL = "https://functional-prototype.replit.app/book/imaizumi-dental";

const NAV_LINKS = [
  { name: "お知らせ", href: "#news" },
  { name: "当院の特徴", href: "#features" },
  { name: "診療内容", href: "#treatments" },
  { name: "料金表", href: "#pricing" },
  { name: "スタッフ", href: "#staff" },
  { name: "アクセス", href: "#access" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-border/50 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              {/* Tooth/Sparkle abstract logo icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22C10.5 22 9 20 9 18C9 16 12 14 12 14C12 14 15 16 15 18C15 20 13.5 22 12 22Z" />
                <path d="M12 2V8" />
                <path d="M5.5 5.5L8.5 8.5" />
                <path d="M18.5 5.5L15.5 8.5" />
                <path d="M3 12H8" />
                <path d="M16 12H21" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl leading-tight text-foreground tracking-wide">
                今泉歯科医院
              </span>
              <span className="text-[10px] text-primary font-medium tracking-widest">
                IMAIZUMI DENTAL CLINIC
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-bold shadow-lg shadow-accent/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <CalendarDays className="w-4 h-4" />
              WEB予約
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
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
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-[60] lg:hidden"
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
                  className="p-2 text-muted-foreground hover:text-foreground bg-muted rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="px-6 pb-6 flex flex-col gap-6 overflow-y-auto flex-1">
                <nav className="flex flex-col gap-4">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-medium text-foreground py-2 border-b border-border/50"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto pt-8">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-accent text-accent-foreground font-bold shadow-lg shadow-accent/25"
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
