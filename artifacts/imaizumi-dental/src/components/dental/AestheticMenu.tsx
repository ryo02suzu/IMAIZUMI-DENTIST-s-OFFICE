import { motion } from "framer-motion"

// 審美歯科ページのヒーロー＋メニュー料金リスト。
// クリニック承認のデザインモック（淡ブルー×明朝の「MENU」紙面）を再現。
// 写真は素材資料から切り出した実物（public/materials/）を使用する。

const BASE = import.meta.env.BASE_URL

const NAVY = "#2f4f6f"
const NAVY_SOFT = "#3d5f7a"
const LINE = "#e3edf4"
const HAIR = "#c9dcea"
const DESC = "#6b7a88"

type MenuItem = {
  img: string
  name: string
  tag: string
  desc: string
  price: string
}

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

const groups: { title: string; sub: string; items: MenuItem[] }[] = [
  {
    title: "詰め物",
    sub: "（インレー）",
    items: [
      {
        img: "hybrid-inlay",
        name: "ハイブリッド・インレー",
        tag: "【コスト重視】",
        desc: "セラミック＋プラスチック混合素材。白く仕上がるが経年変色あり。",
        price: "¥33,000〜",
      },
      {
        img: "zirconia-inlay",
        name: "ジルコニア・インレー",
        tag: "【強度重視】",
        desc: "ダイヤモンドに近い強度。強い力がかかる奥歯に最適。",
        price: "¥44,000〜",
      },
      {
        img: "emax-inlay",
        name: "e.max・インレー",
        tag: "【美しさ重視】",
        desc: "ガラスセラミック製。天然歯のような透明感。笑顔で見える部位におすすめ。",
        price: "¥55,000〜",
      },
      {
        img: "gold-inlay",
        name: "ゴールド・インレー",
        tag: "【長持ち重視】",
        desc: "18金使用。歯との隙間ができにくく、最も二次むし歯になりにくい素材。",
        price: "¥77,000〜",
      },
    ],
  },
  {
    title: "被せ物",
    sub: "（クラウン）",
    items: [
      {
        img: "full-zirconia",
        name: "フルジルコニア",
        tag: "【コスパNo.1】",
        desc: "全てジルコニアで製作。高強度で奥歯のスタンダードとして最も選ばれている素材。",
        price: "¥88,000〜",
      },
      {
        img: "emax-crown",
        name: "e.max・クラウン",
        tag: "【自然な透明感】",
        desc: "全てガラスセラミック製。金属ゼロで歯茎の黒ずみなし。自然で透明感ある仕上がり。",
        price: "¥99,000〜",
      },
      {
        img: "zirconia-stain",
        name: "ジルコニア・ステイン",
        tag: "【奥歯の審美】",
        desc: "ジルコニアに特殊な色付けを施し、本物の歯に近いグラデーションを再現。",
        price: "¥110,000〜",
      },
      {
        img: "pga-crown",
        name: "白金加金(PGA)クラウン",
        tag: "【噛み合わせ保護】",
        desc: "適度な硬さで対合歯を傷めない。密着性が高く土台の歯を最も守る素材。",
        price: "¥132,000〜",
      },
      {
        img: "zirconia-bond",
        name: "ジルコニア・ボンド",
        tag: "【前歯の最高峰】",
        desc: "ジルコニアフレームに熟練技工士がセラミックを積層。前歯の光の透過性を完全再現。",
        price: "¥143,000〜",
      },
    ],
  },
  {
    title: "その他",
    sub: "の審美治療",
    items: [
      {
        img: "direct-bonding",
        name: "ダイレクトボンディング",
        tag: "【削らない・即日】",
        desc: "型取り不要。高精度な樹脂を直接盛り付けて、すきっ歯や小さな虫歯をその日のうちに治します。",
        price: "¥33,000〜¥55,000",
      },
      {
        img: "laminate",
        name: "ラミネートベニア",
        tag: "【前歯の審美】",
        desc: "前歯の表面をわずかに削り、薄いセラミックを貼り付ける「歯のネイル」のような処置。",
        price: "¥110,000〜¥132,000",
      },
    ],
  },
]

export function AestheticMenu() {
  return (
    <>
      {/* ===== ヒーロー（淡ブルー＋女性写真＋波の裾） ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#dcebf5] via-[#e9f3fa] to-[#f4f9fc]">
        <h1 className="sr-only">審美歯科メニュー（つめ物・かぶせ物）｜今泉歯科医院</h1>

        {/* きらめき（ぼかし円） */}
        <div className="pointer-events-none absolute -top-6 left-[30%] w-40 h-40 rounded-full bg-white/60 blur-2xl" />
        <div className="pointer-events-none absolute top-24 left-[8%] w-24 h-24 rounded-full bg-white/50 blur-xl" />
        <div className="pointer-events-none absolute bottom-10 left-[45%] w-28 h-28 rounded-full bg-[#bcd8ea]/50 blur-2xl" />

        {/* 女性写真（右側・左端をグラデーションで溶け込ませる） */}
        {/* モバイルは幅が狭いため、笑顔が中央に来るよう表示位置を調整（PCは左基準） */}
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

      {/* ===== メニュー料金リスト ===== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {groups.map((g, gi) => (
            <div key={g.title} className={gi > 0 ? "mt-14" : ""}>
              {/* 見出し行：明朝見出し ―――――― ※価格は税込 */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-4 mb-2"
              >
                <h2 className="font-serif text-2xl md:text-3xl shrink-0" style={{ color: NAVY }}>
                  {g.title}
                  <span className="text-lg md:text-xl" style={{ color: NAVY_SOFT }}>{g.sub}</span>
                </h2>
                <span className="h-px flex-1" style={{ backgroundColor: HAIR }} />
                <span className="text-xs md:text-sm shrink-0" style={{ color: NAVY_SOFT }}>※価格は税込</span>
              </motion.div>

              {g.items.map((m, i) => (
                <motion.div
                  key={m.img}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="grid grid-cols-[80px_1fr] md:grid-cols-[96px_1fr_auto] gap-4 md:gap-6 items-center py-5 border-b"
                  style={{ borderColor: LINE }}
                >
                  <ItemPhoto img={m.img} name={m.name} boxClass="w-20 h-20 md:w-24 md:h-24" />
                  <div className="min-w-0">
                    <p className="font-serif text-lg md:text-xl leading-snug" style={{ color: NAVY }}>
                      {m.name}
                      <span className="font-bold text-base md:text-lg whitespace-nowrap">{m.tag}</span>
                    </p>
                    <p className="text-xs md:text-sm leading-relaxed mt-1.5" style={{ color: DESC }}>
                      {m.desc}
                    </p>
                    {/* モバイルでは価格を説明の下に */}
                    <p className="md:hidden font-serif text-xl mt-2" style={{ color: NAVY }}>{m.price}</p>
                  </div>
                  <p className="hidden md:block font-serif text-2xl whitespace-nowrap" style={{ color: NAVY }}>
                    {m.price}
                  </p>
                </motion.div>
              ))}
            </div>
          ))}
          <p className="text-xs mt-4" style={{ color: "#9aa7b2" }}>
            ※料金はすべて税込です。状態によって異なる場合があります。
          </p>
        </div>
      </section>
    </>
  )
}
