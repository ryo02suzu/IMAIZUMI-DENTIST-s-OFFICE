import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-[4/3] bg-gradient-to-br from-[#e8f4f8] to-[#d1e8f0] rounded-lg flex items-center justify-center"
          >
            <p className="text-[#7eb4d2]/50 text-sm">写真準備中</p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#7eb4d2] text-sm tracking-widest mb-2">ABOUT US</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#7eb4d2] mb-6">
              今泉歯科医院について
            </h2>
            
            <div className="text-[#4a4a4a] leading-loose space-y-4 text-sm md:text-base">
              <p>
                当院では患者さんの気持ちを理解した診療をモットーとし、健康という側面から一生涯自分の歯で生活出来るようにインフォームドコンセントを大切にし、予防歯科に力を入れて治療しております。
              </p>
              <p>
                また、滅菌・消毒や院内の空気環境などの衛生管理を徹底し、患者さんに安心して治療を受けていただける環境づくりに努めております。
              </p>
              <p>
                患者さんとのコミュニケーションを大切してますので、歯について分からないことや不安なことがありましたら、お子様からお年寄りの方まで、お気軽にご相談ください。
              </p>
              <p>
                院長含めスタッフはアットホームな雰囲気でお迎えします。
              </p>
            </div>

            <a
              href="#doctor"
              className="inline-flex items-center gap-2 mt-8 bg-[#f5d56e] text-[#5a4a3a] px-8 py-3 rounded-full hover:bg-[#f0c84a] transition-colors font-medium"
            >
              詳細を見る
              <ChevronRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
