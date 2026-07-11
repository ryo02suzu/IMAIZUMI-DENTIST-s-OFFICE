import { motion } from "framer-motion"
import { CheckCircle2, UserRound } from "lucide-react"
import { ItemPhoto } from "./AestheticMenu"

// 審美歯科ページ「審美歯科メニュー」セクション。
// クリニック提供のメニュー資料（ベージュ×ブラウンの紙面）の構成を
// そのまま再現している：帯見出し／写真・名前・説明・メリット・
// デメリット・おすすめの横並び行／こだわり枠／安心3ポイントの帯。

const BASE = import.meta.env.BASE_URL

// 配色（メニューUIと同じ淡ブルー×紺の上品トーン）
const BROWN = "#2f4f6f"      // 見出し・強調の紺
const BAND = "#a9c5d8"       // 帯・おすすめ見出しの淡ブルー
const BEIGE = "#eef5fa"      // 薄ブルー背景
const LINE = "#dce8f1"       // 罫線
const TEXT = "#55606a"       // 本文

const inlays = [
  {
    img: "hybrid-inlay",
    name: ["ハイブリッド", "インレー"],
    price: "¥33,000〜",
    catch: ["費用を抑えて", "白い歯にしたい方へ"],
    body: "セラミックとレジン（歯科用樹脂）を組み合わせた素材です。保険の銀歯より自然な見た目で、比較的費用を抑えて白い歯にできます。",
    merits: ["費用を抑えられる", "白い歯になる", "金属アレルギーの心配がない"],
    demerits: ["長期間で変色することがある", "セラミックより摩耗・劣化しやすい", "強い力がかかる部位には向かない場合がある"],
    recommend: "費用を抑えながら白い詰め物を希望される方",
  },
  {
    img: "zirconia-inlay",
    name: ["ジルコニア", "インレー"],
    price: "¥44,000〜",
    catch: ["強度を重視する", "奥歯におすすめ"],
    body: "ジルコニアは人工ダイヤモンドにも例えられる高い強度を持つセラミック素材です。噛む力が強くかかる奥歯にも適しています。",
    merits: ["非常に丈夫", "割れにくい", "金属を使用しない", "汚れが付きにくい"],
    demerits: ["e.maxより透明感はやや少ない", "強い衝撃では破損する可能性がある"],
    recommend: "奥歯・食いしばりがある方",
  },
  {
    img: "emax-inlay",
    name: ["e.max", "インレー"],
    price: "¥55,000〜",
    catch: ["天然歯のような", "透明感"],
    body: "ガラスセラミックで作られた審美性に優れた素材です。自然な透明感があり、周囲の歯になじみやすいことが特徴です。",
    merits: ["見た目が自然", "色調が美しい", "汚れが付きにくい"],
    demerits: ["ジルコニアより強度はやや低い", "強い力がかかる部位では適応を選ぶ"],
    recommend: "見える部分の歯を自然に仕上げたい方",
  },
  {
    img: "gold-inlay",
    name: ["ゴールド", "インレー"],
    price: "¥77,000〜",
    catch: ["長期間の安定性を", "重視する方へ"],
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
    price: "¥88,000〜",
    catch: "奥歯のスタンダード",
    body: "すべてジルコニアで製作するクラウンです。高い強度があり、奥歯の治療によく選ばれています。金属を使用しないため、金属アレルギーが心配な方にも選ばれています。",
  },
  {
    img: "emax-crown",
    name: "e.maxクラウン",
    price: "¥99,000〜",
    catch: "自然な透明感を求める方へ",
    body: "ガラスセラミックのみで製作します。天然歯に近い透明感があり、前歯にも適しています。金属を使用しないため、金属アレルギーが心配な方にも選ばれています。",
  },
  {
    img: "zirconia-stain",
    name: "ジルコニアステイン",
    price: "¥110,000〜",
    catch: "強さと美しさのバランス",
    body: "フルジルコニアに色調を付与し、天然歯に近い色合いを再現したクラウンです。金属を使用しないため、金属アレルギーが心配な方にも選ばれています。",
  },
  {
    img: "pga-crown",
    name: "白金加金（PGA）クラウン",
    price: "¥132,000〜",
    catch: "噛み合わせを大切にしたい方へ",
    body: "白金加金は適度な硬さを持ち、噛み合う歯への負担が少ない金属材料です。適合性にも優れています。",
  },
  {
    img: "zirconia-bond",
    name: "ジルコニアボンド",
    price: "¥143,000〜",
    catch: "前歯の最高峰の美しさ",
    body: "内側にジルコニア、表面にセラミックを築盛したクラウンです。透明感や色調を細かく再現できます。金属を使用しないため、金属アレルギーが心配な方にも選ばれています。",
  },
]

const others = [
  {
    img: "direct-bonding",
    name: "ダイレクトボンディング",
    price: "¥33,000〜¥55,000",
    catch: "歯をできるだけ削らない治療",
    body: "高品質なコンポジットレジンを直接盛り付けて修復する治療です。型取りをせず、その日のうちに治療が完了する場合があります。",
    cases: ["小さな虫歯", "すきっ歯", "欠けた歯"],
  },
  {
    img: "laminate",
    name: "ラミネートベニア",
    price: "¥110,000〜¥132,000",
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
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.4, delay },
  }
}

// 紙面と同じ「――― 帯見出し ―――」
function Band({ children }: { children: string }) {
  return (
    <div className="relative my-10" style={{ backgroundColor: BAND }}>
      <div className="flex items-center justify-center gap-4 py-2.5">
        <span className="hidden sm:block h-px w-16 bg-white/60" />
        <p className="font-serif text-white text-lg md:text-xl tracking-[0.25em]">{children}</p>
        <span className="hidden sm:block h-px w-16 bg-white/60" />
      </div>
    </div>
  )
}

function Check({ text, muted = false }: { text: string; muted?: boolean }) {
  return (
    <li className="flex items-start gap-1.5 text-xs leading-relaxed" style={{ color: TEXT }}>
      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5" style={{ color: muted ? "#b9c6d1" : "#9caf88" }} />
      {text}
    </li>
  )
}

export function AestheticMaterials() {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* ヘッダー */}
        <motion.div {...fadeIn()} className="md:flex items-start justify-between gap-8 mb-4">
          <div>
            <p className="text-sm mb-2" style={{ color: BROWN }}>美しく、長く使える審美治療</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: BROWN }}>
              素材の選び方
            </h2>
            <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: TEXT }}>
              見た目の美しさだけでなく、機能性・耐久性にもこだわり、
              <br className="hidden md:block" />
              お一人おひとりに最適な素材をご提案します。
            </p>
            <p className="text-xs mt-3" style={{ color: "#9db6c9" }}>※価格はすべて税込です。状態によって異なる場合があります。</p>
          </div>
          {/* 金属アレルギーの丸バッジ */}
          <div
            className="mt-6 md:mt-0 shrink-0 w-44 h-44 rounded-full flex items-center justify-center text-center p-5 mx-auto md:mx-0"
            style={{ backgroundColor: BEIGE }}
          >
            <p className="text-xs leading-relaxed" style={{ color: TEXT }}>
              金属を使用しないため、
              <span className="font-bold" style={{ color: BROWN }}>金属アレルギー</span>
              が心配な方にも選ばれています。
            </p>
          </div>
        </motion.div>

        {/* ===== 詰め物（インレー） ===== */}
        <Band>詰め物（インレー）</Band>
        <div>
          {inlays.map((m, i) => (
            <motion.div
              key={m.img}
              {...fadeIn(i * 0.05)}
              className="py-6 grid gap-4 md:gap-0 md:grid-cols-[128px_150px_1fr_1fr_170px] border-b"
              style={{ borderColor: LINE }}
            >
              {/* 写真 */}
              <div className="flex md:block items-center gap-4">
                <div className="shrink-0">
                  <ItemPhoto img={m.img} name={m.name.join("")} boxClass="w-28 h-28" />
                </div>
                {/* モバイルでは写真の横に名前 */}
                <div className="md:hidden">
                  <p className="font-serif font-bold text-lg leading-snug" style={{ color: BROWN }}>{m.name.join("")}</p>
                  <p className="text-xs mt-1" style={{ color: TEXT }}>{m.catch.join("")}</p>
                  <p className="font-serif text-xl mt-1" style={{ color: BROWN }}>{m.price}</p>
                </div>
              </div>
              {/* 名前（PC） */}
              <div className="hidden md:block md:px-4">
                <p className="font-serif font-bold text-lg leading-snug" style={{ color: BROWN }}>
                  {m.name[0]}<br />{m.name[1]}
                </p>
                <p className="text-xs mt-2 leading-relaxed" style={{ color: TEXT }}>
                  {m.catch[0]}<br />{m.catch[1]}
                </p>
                <p className="font-serif text-2xl mt-3" style={{ color: BROWN }}>{m.price}</p>
              </div>
              {/* 説明 */}
              <div className="md:px-4 md:border-l" style={{ borderColor: LINE }}>
                <p className="text-xs leading-loose" style={{ color: TEXT }}>{m.body}</p>
              </div>
              {/* メリット・デメリット */}
              <div className="grid grid-cols-2 gap-4 md:gap-0 md:px-4 md:border-l" style={{ borderColor: LINE }}>
                <div className="md:pr-3">
                  <p className="text-xs font-bold mb-2" style={{ color: BROWN }}>メリット</p>
                  <ul className="space-y-1.5">
                    {m.merits.map((x) => <Check key={x} text={x} />)}
                  </ul>
                </div>
                <div className="md:pl-3 md:border-l" style={{ borderColor: LINE }}>
                  <p className="text-xs font-bold mb-2" style={{ color: BROWN }}>デメリット</p>
                  <ul className="space-y-1.5">
                    {m.demerits.map((x) => <Check key={x} text={x} muted />)}
                  </ul>
                </div>
              </div>
              {/* おすすめ */}
              <div className="md:ml-4 self-start rounded overflow-hidden">
                <p className="text-white text-xs font-bold text-center py-1.5 tracking-widest" style={{ backgroundColor: BAND }}>
                  おすすめ
                </p>
                <p className="text-xs leading-relaxed text-center px-3 py-3" style={{ backgroundColor: BEIGE, color: TEXT }}>
                  {m.recommend}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== 被せ物（クラウン） ===== */}
        <Band>被せ物（クラウン）</Band>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
          {crowns.map((m, i) => (
            <motion.div key={m.img} {...fadeIn(i * 0.05)} className="flex gap-5">
              <div className="shrink-0">
                <ItemPhoto img={m.img} name={m.name} boxClass="w-28 h-28 md:w-32 md:h-32" />
              </div>
              <div className="min-w-0">
                <p className="font-serif font-bold text-lg leading-snug" style={{ color: BROWN }}>{m.name}</p>
                <p className="text-xs mt-0.5 mb-2" style={{ color: BROWN }}>{m.catch}</p>
                <p className="text-xs leading-loose" style={{ color: TEXT }}>{m.body}</p>
                <p className="font-serif text-xl mt-2" style={{ color: BROWN }}>{m.price}</p>
              </div>
            </motion.div>
          ))}

          {/* こだわり枠（紙面と同じくクラウン一覧の右下） */}
          <motion.div
            {...fadeIn(0.25)}
            className="rounded border p-5 flex gap-4"
            style={{ borderColor: "#cfe0ec", backgroundColor: "#fbfdfe" }}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: BEIGE }}>
              <UserRound className="h-7 w-7" style={{ color: BROWN }} />
            </div>
            <div>
              <p className="font-serif font-bold mb-2" style={{ color: BROWN }}>今泉歯科医院のこだわり</p>
              <p className="text-xs leading-loose" style={{ color: TEXT }}>
                当院では、見た目の美しさだけでなく、長く快適に使えることを大切にしています。患者さんのご予算やご希望も考慮し、無理に高額な治療をおすすめすることはありません。必ず複数の選択肢をご提案し、納得のいく治療を一緒に選んでいきます。
              </p>
            </div>
          </motion.div>
        </div>

        {/* ===== その他の審美治療 ===== */}
        <Band>その他の審美治療</Band>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
          {others.map((m, i) => (
            <motion.div key={m.img} {...fadeIn(i * 0.05)} className="flex gap-5">
              <div className="shrink-0">
                <ItemPhoto img={m.img} name={m.name} boxClass="w-28 h-28 md:w-32 md:h-32" />
              </div>
              <div className="min-w-0">
                <p className="font-serif font-bold text-lg leading-snug" style={{ color: BROWN }}>{m.name}</p>
                <p className="text-xs mt-0.5 mb-2" style={{ color: BROWN }}>{m.catch}</p>
                <p className="text-xs leading-loose mb-2" style={{ color: TEXT }}>{m.body}</p>
                <p className="text-[11px] font-bold inline-block px-2 py-0.5 rounded mb-1.5" style={{ backgroundColor: BEIGE, color: BROWN }}>
                  向いている症例
                </p>
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                  {m.cases.map((c) => <Check key={c} text={c} />)}
                </ul>
                <p className="font-serif text-xl mt-2" style={{ color: BROWN }}>{m.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== 安心してご相談ください（紙面下部の帯） ===== */}
        <motion.div {...fadeIn()} className="mt-12 rounded px-6 py-8" style={{ backgroundColor: BEIGE }}>
          <p className="font-serif text-center font-bold text-lg mb-6 tracking-wider" style={{ color: BROWN }}>
            安心してご相談ください
          </p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {promises.map((p) => (
              <div key={p.title} className="flex gap-2.5">
                <span
                  className="w-5 h-5 rounded-sm flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: BAND }}
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                </span>
                <div>
                  <p className="text-sm font-bold mb-1" style={{ color: BROWN }}>{p.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: TEXT }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
