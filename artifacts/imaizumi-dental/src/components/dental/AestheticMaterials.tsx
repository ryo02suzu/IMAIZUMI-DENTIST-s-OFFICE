import { motion } from "framer-motion"
import { CheckCircle, MinusCircle, Sparkles } from "lucide-react"

// 審美歯科ページ専用「素材の選び方」セクション。
// 内容はクリニック提供の審美歯科メニュー資料に基づく。
// 配色はプレミアムテーマ（濃紺×シャンパンゴールド）に合わせている。

const BASE = import.meta.env.BASE_URL

const inlays = [
  {
    img: "hybrid-inlay",
    name: "ハイブリッドインレー",
    catch: "費用を抑えて白い歯にしたい方へ",
    body: "セラミックとレジン（歯科用樹脂）を組み合わせた素材です。保険の銀歯より自然な見た目で、比較的費用を抑えて白い歯にできます。",
    merits: ["費用を抑えられる", "白い歯になる", "金属アレルギーの心配がない"],
    demerits: ["長期間で変色することがある", "セラミックより摩耗・劣化しやすい", "強い力がかかる部位には向かない場合がある"],
    recommend: "費用を抑えながら白い詰め物を希望される方",
  },
  {
    img: "zirconia-inlay",
    name: "ジルコニアインレー",
    catch: "強度を重視する奥歯におすすめ",
    body: "ジルコニアは人工ダイヤモンドにも例えられる高い強度を持つセラミック素材です。噛む力が強くかかる奥歯にも適しています。",
    merits: ["非常に丈夫", "割れにくい", "金属を使用しない", "汚れが付きにくい"],
    demerits: ["e.maxより透明感はやや少ない", "強い衝撃では破損する可能性がある"],
    recommend: "奥歯・食いしばりがある方",
  },
  {
    img: "emax-inlay",
    name: "e.maxインレー",
    catch: "天然歯のような透明感",
    body: "ガラスセラミックで作られた審美性に優れた素材です。自然な透明感があり、周囲の歯になじみやすいことが特徴です。",
    merits: ["見た目が自然", "色調が美しい", "汚れが付きにくい"],
    demerits: ["ジルコニアより強度はやや低い", "強い力がかかる部位では適応を選ぶ"],
    recommend: "見える部分の歯を自然に仕上げたい方",
  },
  {
    img: "gold-inlay",
    name: "ゴールドインレー",
    catch: "長期間の安定性を重視する方へ",
    body: "18金を使用した詰め物です。歯との適合性に優れ、噛み合わせにも優しく、長期間安定して使用できる素材です。",
    merits: ["適合性が高い", "二次虫歯のリスク軽減が期待できる", "噛み合う歯に優しい", "長持ちしやすい"],
    demerits: ["金色", "費用が高い"],
    recommend: "見た目より耐久性を重視する方",
  },
]

const crowns = [
  {
    img: "full-zirconia",
    name: "フルジルコニアクラウン",
    catch: "奥歯のスタンダード",
    body: "すべてジルコニアで製作するクラウンです。高い強度があり、奥歯の治療によく選ばれています。金属を使用しないため、金属アレルギーが心配な方にも選ばれています。",
  },
  {
    img: "emax-crown",
    name: "e.maxクラウン",
    catch: "自然な透明感を求める方へ",
    body: "ガラスセラミックのみで製作します。天然歯に近い透明感があり、前歯にも適しています。金属を使用しないため、金属アレルギーが心配な方にも選ばれています。",
  },
  {
    img: "zirconia-stain",
    name: "ジルコニアステイン",
    catch: "強さと美しさのバランス",
    body: "フルジルコニアに色調を付与し、天然歯に近い色合いを再現したクラウンです。金属を使用しないため、金属アレルギーが心配な方にも選ばれています。",
  },
  {
    img: "pga-crown",
    name: "白金加金（PGA）クラウン",
    catch: "噛み合わせを大切にしたい方へ",
    body: "白金加金は適度な硬さを持ち、噛み合う歯への負担が少ない金属材料です。適合性にも優れています。",
  },
  {
    img: "zirconia-bond",
    name: "ジルコニアボンド",
    catch: "前歯の最高峰の美しさ",
    body: "内側にジルコニア、表面にセラミックを築盛したクラウンです。透明感や色調を細かく再現できます。金属を使用しないため、金属アレルギーが心配な方にも選ばれています。",
  },
]

const others = [
  {
    img: "direct-bonding",
    name: "ダイレクトボンディング",
    catch: "歯をできるだけ削らない治療",
    body: "高品質なコンポジットレジンを直接盛り付けて修復する治療です。型取りをせず、その日のうちに治療が完了する場合があります。",
    cases: ["小さな虫歯", "すきっ歯", "欠けた歯"],
  },
  {
    img: "laminate",
    name: "ラミネートベニア",
    catch: "前歯の見た目を美しく整える",
    body: "前歯の表面をわずかに整え、薄いセラミックを貼り付ける治療です。歯の色や形、すき間の改善に適しています。",
    cases: ["変色した歯", "すきっ歯", "歯の形を整えたい方"],
  },
]

const promises = [
  { title: "丁寧なカウンセリング", body: "患者様のお悩みやご希望をしっかりお伺いします。" },
  { title: "精密な診断とご提案", body: "お口の状態を詳しく検査し、最適な治療法をご提案します。" },
  { title: "長期的なサポート", body: "治療後のメンテナンスまでしっかりサポートします。" },
]

function fadeIn(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.4, delay },
  }
}

function SubHeading({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-4 mb-6 mt-12 first:mt-0">
      <span className="h-px flex-1 bg-[#d9c08a]/60" />
      <h3 className="text-lg md:text-xl font-bold text-[#3d5f7a] tracking-wide">{children}</h3>
      <span className="h-px flex-1 bg-[#d9c08a]/60" />
    </div>
  )
}

export function AestheticMaterials() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div {...fadeIn()} className="mb-4">
          <p className="text-[#b08d4f] text-sm tracking-widest mb-1">MATERIALS</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#3d5f7a]">素材の選び方</h2>
        </motion.div>
        <motion.p {...fadeIn(0.05)} className="text-[#4a4a4a] leading-relaxed mb-2">
          見た目の美しさだけでなく、機能性・耐久性にもこだわり、お一人おひとりに最適な素材をご提案します。
        </motion.p>
        <motion.p {...fadeIn(0.1)} className="inline-flex items-center gap-2 text-sm text-[#a8853f] bg-[#faf7f0] border border-[#e8dcc0] rounded-full px-4 py-1.5 mb-4">
          <Sparkles className="h-4 w-4 shrink-0" />
          金属を使用しない素材は、金属アレルギーが心配な方にも選ばれています
        </motion.p>

        {/* 詰め物（インレー） */}
        <SubHeading>詰め物（インレー）</SubHeading>
        <div className="space-y-5">
          {inlays.map((m, i) => (
            <motion.div key={m.img} {...fadeIn(i * 0.05)} className="bg-[#faf7f0] rounded-2xl border border-[#e8dcc0] p-5 md:p-6">
              <div className="flex gap-4 md:gap-5">
                <img
                  loading="lazy"
                  decoding="async"
                  src={`${BASE}materials/${m.img}.jpeg`}
                  alt={m.name}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover shrink-0 border border-[#e8dcc0]"
                />
                <div className="min-w-0">
                  <p className="font-bold text-[#3d5f7a] text-lg leading-snug">{m.name}</p>
                  <p className="text-[#a8853f] text-sm font-medium mb-2">{m.catch}</p>
                  <p className="text-sm text-[#666] leading-relaxed">{m.body}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white rounded-xl p-4 border border-[#e8dcc0]">
                  <p className="text-xs font-bold text-[#a8853f] tracking-widest mb-2">メリット</p>
                  <ul className="space-y-1.5">
                    {m.merits.map((x) => (
                      <li key={x} className="flex items-start gap-2 text-sm text-[#4a4a4a]">
                        <CheckCircle className="h-4 w-4 text-[#b08d4f] shrink-0 mt-0.5" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-4 border border-[#e8dcc0]">
                  <p className="text-xs font-bold text-[#8a8a8a] tracking-widest mb-2">デメリット</p>
                  <ul className="space-y-1.5">
                    {m.demerits.map((x) => (
                      <li key={x} className="flex items-start gap-2 text-sm text-[#666]">
                        <MinusCircle className="h-4 w-4 text-[#b9b3a5] shrink-0 mt-0.5" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-3 text-sm text-[#5a4a3a] bg-gradient-to-r from-[#f5efe0] to-[#faf7f0] border border-[#e0d3b3] rounded-lg px-4 py-2.5">
                <span className="font-bold text-[#a8853f] mr-2">おすすめ</span>
                {m.recommend}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 被せ物（クラウン） */}
        <SubHeading>被せ物（クラウン）</SubHeading>
        <div className="grid md:grid-cols-2 gap-5">
          {crowns.map((m, i) => (
            <motion.div key={m.img} {...fadeIn(i * 0.05)} className="bg-[#faf7f0] rounded-2xl border border-[#e8dcc0] p-5 flex gap-4">
              <img
                loading="lazy"
                decoding="async"
                src={`${BASE}materials/${m.img}.jpeg`}
                alt={m.name}
                className="w-20 h-20 rounded-xl object-cover shrink-0 border border-[#e8dcc0]"
              />
              <div className="min-w-0">
                <p className="font-bold text-[#3d5f7a] leading-snug">{m.name}</p>
                <p className="text-[#a8853f] text-xs font-medium mb-1.5">{m.catch}</p>
                <p className="text-sm text-[#666] leading-relaxed">{m.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* その他の審美治療 */}
        <SubHeading>その他の審美治療</SubHeading>
        <div className="grid md:grid-cols-2 gap-5">
          {others.map((m, i) => (
            <motion.div key={m.img} {...fadeIn(i * 0.05)} className="bg-[#faf7f0] rounded-2xl border border-[#e8dcc0] p-5">
              <div className="flex gap-4">
                <img
                  loading="lazy"
                  decoding="async"
                  src={`${BASE}materials/${m.img}.jpeg`}
                  alt={m.name}
                  className="w-20 h-20 rounded-xl object-cover shrink-0 border border-[#e8dcc0]"
                />
                <div className="min-w-0">
                  <p className="font-bold text-[#3d5f7a] leading-snug">{m.name}</p>
                  <p className="text-[#a8853f] text-xs font-medium mb-1.5">{m.catch}</p>
                  <p className="text-sm text-[#666] leading-relaxed">{m.body}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-3">
                <span className="text-[10px] font-bold text-[#a8853f] tracking-wider">向いている症例</span>
                {m.cases.map((c) => (
                  <span key={c} className="text-xs text-[#5a4a3a] bg-white border border-[#e0d3b3] rounded-full px-3 py-0.5">
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 当院のこだわり */}
        <motion.div {...fadeIn()} className="mt-12 bg-gradient-to-br from-[#2c4a63] to-[#3d5f7a] rounded-2xl p-6 md:p-8 text-white">
          <p className="text-[#d9c08a] text-xs tracking-[0.3em] mb-2 flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            OUR POLICY
          </p>
          <h3 className="font-bold text-xl mb-3">今泉歯科医院のこだわり</h3>
          <p className="text-white/90 text-sm leading-relaxed">
            当院では、見た目の美しさだけでなく、長く快適に使えることを大切にしています。患者さんのご予算やご希望も考慮し、無理に高額な治療をおすすめすることはありません。必ず複数の選択肢をご提案し、納得のいく治療を一緒に選んでいきます。
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            {promises.map((p) => (
              <div key={p.title} className="bg-white/10 rounded-xl p-4 border border-white/15">
                <p className="text-[#e9d9b8] font-bold text-sm mb-1.5 flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 shrink-0" />
                  {p.title}
                </p>
                <p className="text-white/80 text-xs leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
