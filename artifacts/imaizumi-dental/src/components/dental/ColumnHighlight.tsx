import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Link } from "wouter"
import { columnArticles } from "@/data/columnData"

export function ColumnHighlight() {
  const latest = columnArticles.slice(0, 3)
  if (latest.length === 0) return null

  return (
    <section className="py-16 bg-[#f8fbfd]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="text-[#7eb4d2] text-sm tracking-widest mb-2">COLUMN</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#7eb4d2]">歯のお役立ちコラム</h2>
            <p className="text-sm text-[#888] mt-2">歯とお口の健康に役立つ情報をお届けします</p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {latest.map((item, i) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/column/${item.slug}`}
                  className="group block bg-white rounded-2xl shadow-sm h-full p-5 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#7eb4d2] text-white">{item.category}</span>
                    <span className="text-xs text-[#999]">{item.date}</span>
                  </div>
                  <p className="font-bold text-[#3d5f7a] leading-snug mb-2 group-hover:text-[#7eb4d2] transition-colors">
                    {item.title}
                  </p>
                  <p className="text-sm text-[#666] leading-relaxed line-clamp-3">{item.excerpt}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/column"
              className="inline-flex items-center gap-2 bg-[#f5d56e] text-[#5a4a3a] px-6 py-2 rounded-full hover:bg-[#f0c84a] transition-colors text-sm font-medium"
            >
              コラムをもっと見る
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
