import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone } from "lucide-react"

const BOOKING_URL = "https://functional-prototype.replit.app/book/imaizumi-dental"

export function StickyBottomBar() {
  const [visible, setVisible] = useState(false)
  const [lastY, setLastY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY === 0) {
        setVisible(false)
      } else if (currentY < lastY) {
        setVisible(true)
      } else if (currentY > lastY) {
        setVisible(false)
      }
      setLastY(currentY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastY])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg px-4 py-3 flex items-center gap-3"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#f5a623] text-white text-center py-3 rounded-full font-bold text-sm hover:bg-[#e09520] transition-colors"
          >
            WEB予約はこちら
          </a>
          <a
            href="tel:0277549893"
            className="flex-1 flex items-center justify-center gap-2 bg-[#3d5f7a] text-white py-3 rounded-full font-bold text-sm hover:bg-[#2d4a5e] transition-colors"
          >
            <Phone className="h-4 w-4" />
            0277-54-9893
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
