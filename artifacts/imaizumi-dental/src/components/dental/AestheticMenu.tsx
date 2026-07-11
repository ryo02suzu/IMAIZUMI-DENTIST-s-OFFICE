import { motion } from "framer-motion"

// 審美歯科ページのヒーロー（淡ブルー×明朝の「MENU」紙面）。
// 各素材の写真・説明・料金は「素材の選び方」(AestheticMaterials) に一本化しており、
// ここではヒーローと、共用の写真プレースホルダー(ItemPhoto)のみを扱う。

const BASE = import.meta.env.BASE_URL

const NAVY_SOFT = "#3d5f7a"

// 素材写真は差し替え待ち。現状はNO IMAGEプレースホルダーを表示する。
// （画像が用意でき次第、ここを実画像表示に戻す）
export function ItemPhoto({ img: _img, name: _name, boxClass }: { img: string; name: string; boxClass: string }) {
  return (
    <div
      className={`${boxClass} flex items-center justify-center rounded border border-dashed`}
      style={{ borderColor: "#c9dcea", backgroundColor: "#f4f9fc" }}
    >
      <span className="text-[10px] md:text-[11px] font-medium tracking-wider text-center leading-tight" style={{ color: "#9db6c9" }}>
        NO<br />IMAGE
      </span>
    </div>
  )
}

export function AestheticMenu() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#dcebf5] via-[#e9f3fa] to-[#f4f9fc]">
      <h1 className="sr-only">審美歯科メニュー（つめ物・かぶせ物）｜今泉歯科医院</h1>

      {/* きらめき（ぼかし円） */}
      <div className="pointer-events-none absolute -top-6 left-[30%] w-40 h-40 rounded-full bg-white/60 blur-2xl" />
      <div className="pointer-events-none absolute top-24 left-[8%] w-24 h-24 rounded-full bg-white/50 blur-xl" />
      <div className="pointer-events-none absolute bottom-10 left-[45%] w-28 h-28 rounded-full bg-[#bcd8ea]/50 blur-2xl" />

      {/* 女性写真（右側・左端をグラデーションで溶け込ませる）
          モバイルは幅が狭いため、笑顔が中央に来るよう表示位置を調整（PCは左基準） */}
      <img
        src={`${BASE}aesthetic-hero.jpeg`}
        alt=""
        aria-hidden="true"
        className="absolute right-0 top-0 h-full w-[58%] md:w-[44%] object-cover object-[60%_center] md:object-left [mask-image:linear-gradient(to_right,transparent,black_38%)]"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl py-14 md:py-24 pb-20 md:pb-28"
        >
          <p className="font-serif tracking-[0.3em] text-sm md:text-base mb-3" style={{ color: NAVY_SOFT }}>
            〜 審美歯科メニュー 〜
          </p>
          <p className="font-serif text-6xl md:text-8xl tracking-[0.12em] font-medium bg-gradient-to-b from-[#6e93b4] to-[#31536f] bg-clip-text text-transparent mb-5">
            MENU
          </p>
          <p className="font-serif text-sm md:text-base leading-loose" style={{ color: NAVY_SOFT }}>
            美しさと機能性を兼ね備えた
            <br />
            高品質な素材で、理想の笑顔へ
            <br />
            導きます。
          </p>
        </motion.div>
      </div>

      {/* 波の裾 */}
      <svg
        className="absolute bottom-0 left-0 w-full h-10 md:h-14"
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,34 C320,78 760,-6 1100,26 C1260,40 1380,52 1440,42 L1440,70 L0,70 Z" fill="#ffffff" />
      </svg>
    </section>
  )
}
