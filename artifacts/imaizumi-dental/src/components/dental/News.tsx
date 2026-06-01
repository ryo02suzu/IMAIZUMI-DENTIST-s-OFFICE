import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { useNews } from "@/hooks/useNews"
import { Link } from "wouter"

export function News() {
  const { items } = useNews()
  const displayItems = items.slice(0, 3)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[200px_1fr] gap-8">
            {/* Left: Title */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[#7eb4d2] text-sm tracking-widest mb-2">NEWS & TOPICS</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#7eb4d2] mb-4">お知らせ</h2>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 bg-[#f5d56e] text-[#5a4a3a] px-6 py-2 rounded-full hover:bg-[#f0c84a] transition-colors text-sm font-medium"
              >
                もっと見る
                <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Right: News List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ul className="divide-y divide-gray-200">
                {displayItems.map((item) => (
                  <li key={item.id} className="py-4 hover:bg-gray-50 transition-colors">
                    <Link href={`/news/${item.id}`} className="flex gap-6 items-start">
                      <span className="text-[#999] text-sm whitespace-nowrap">{item.date}</span>
                      <span className="text-[#4a4a4a] text-sm md:text-base hover:text-[#7eb4d2] transition-colors">{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
