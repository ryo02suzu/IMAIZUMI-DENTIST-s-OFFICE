import { motion } from "framer-motion"
import { CheckCircle2, UserRound } from "lucide-react"
import { ItemPhoto } from "./AestheticMenu"

// 審美歯科ページ「素材の選び方」セクション。
// インレー・クラウン・その他の審美治療を、すべて共通フォーマット
// （写真／名前・特徴・料金／説明／メリット・デメリット／おすすめ）で掲載する。
// 文言はクリニック提供の原稿に基づく。

// 配色（メニューUIと同じ淡ブルー×紺の上品トーン）
const BROWN = "#2f4f6f"      // 見出し・強調の紺
const BAND = "#a9c5d8"       // 帯・おすすめ見出しの淡ブルー
const BEIGE = "#eef5fa"      // 薄ブルー背景
const LINE = "#dce8f1"       // 罫線
const TEXT = "#55606a"       // 本文

type Material = {
  img: string
  name: string
  catch: string
  price: string
  body: string
  merits: string[]
  demerits: string[]
  recommend: string
}

const inlays: Material[] = [
  {
    img: "hybrid-inlay",
    name: "ハイブリッドインレー",
    price: "¥33,000〜",
    catch: "費用を抑えて白い歯にしたい方へ",
    body: "セラミックとレジン（歯科用樹脂）を組み合わせた素材です。保険の銀歯より自然な見た目で、比較的費用を抑えて白い歯にできます。",
    merits: ["費用を抑えられる", "白い歯になる", "金属アレルギーの心配がない"],
    demerits: ["長期間で変色することがある", "セラミックより摩耗・劣化しやすい", "強い力がかかる部位には向かない場合がある"],
    recommend: "費用を抑えながら白い詰め物を希望される方",
  },
  {
    img: "zirconia-inlay",
    name: "ジルコニアインレー",
    price: "¥44,000〜",
    catch: "強度を重視する奥歯におすすめ",
    body: "ジルコニアは人工ダイヤモンドにも例えられる高い強度を持つセラミック素材です。噛む力が強くかかる奥歯にも適しています。",
    merits: ["非常に丈夫", "割れにくい", "金属を使用しない", "汚れが付きにくい"],
    demerits: ["e.maxより透明感はやや少ない", "強い衝撃では破損する可能性がある"],
    recommend: "奥歯・食いしばりがある方",
  },
  {
    img: "emax-inlay",
    name: "e.maxインレー",
    price: "¥55,000〜",
    catch: "天然歯のような透明感",
    body: "ガラスセラミックで作られた審美性に優れた素材です。自然な透明感があり、周囲の歯になじみやすいことが特徴です。",
    merits: ["見た目が自然", "色調が美しい", "汚れが付きにくい"],
    demerits: ["ジルコニアより強度はやや低い", "強い力がかかる部位では適応を選ぶ"],
    recommend: "見える部分の歯を自然に仕上げたい方",
  },
  {
    img: "gold-inlay",
    name: "ゴールドインレー",
    price: "¥77,000〜",
    catch: "長期間の安定性を重視する方へ",
    body: "18金を使用した詰め物です。歯との適合性に優れ、噛み合わせにも優しく、長期間安定して使用できる素材です。",
    merits: ["適合性が高い", "二次虫歯のリスク軽減が期待できる", "噛み合う歯に優しい", "長持ちしやすい"],
    demerits: ["金色", "費用が高い"],
    recommend: "見た目より耐久性を重視する方",
  },
]

const crowns: Material[] = [
  {
    img: "full-zirconia",
    name: "フルジルコニアクラウン",
    price: "¥88,000〜",
    catch: "奥歯のスタンダード",
    body: "すべてジルコニアで製作するクラウンです。高い強度があり、奥歯の治療によく選ばれています。金属を使用しないため、金属アレルギーが心配な方にも選ばれています。",
    merits: [
      "非常に丈夫で割れにくい",
      "金属アレルギーの心配がない",
      "汚れ（プラーク）が付きにくく衛生的",
      "保険の銀歯と比べて二次虫歯になりにくい",
    ],
    demerits: [
      "e.max等のガラスセラミックに比べると透明感はやや劣る",
      "天然歯よりも硬いため、噛み合う歯（対合歯）がすり減る可能性がある",
    ],
    recommend: "噛む力が強い方・食いしばりがある方で、奥歯を白くしたい方",
  },
  {
    img: "emax-crown",
    name: "e.maxクラウン",
    price: "¥99,000〜",
    catch: "自然な透明感を求める方へ",
    body: "ガラスセラミックのみで製作します。天然歯に近い透明感があり、前歯にも適しています。金属を使用しないため、金属アレルギーが心配な方にも選ばれています。",
    merits: [
      "天然歯のような美しく自然な透明感がある",
      "金属アレルギーの心配がない",
      "汚れが付きにくく、変色しない",
      "歯との接着性が高く、二次虫歯になりにくい",
    ],
    demerits: [
      "ジルコニアに比べると強度が劣るため、強い衝撃で割れるリスクがある",
      "強い力がかかる奥歯（大臼歯）やブリッジには向かない場合がある",
    ],
    recommend: "前歯や笑った時に見える歯を、とにかく自然で美しく仕上げたい方",
  },
  {
    img: "zirconia-stain",
    name: "ジルコニアステイン",
    price: "¥110,000〜",
    catch: "強さと美しさのバランス",
    body: "フルジルコニアに色調を付与し、天然歯に近い色合いを再現したクラウンです。金属を使用しないため、金属アレルギーが心配な方にも選ばれています。",
    merits: [
      "フルジルコニアの「高い強度」を保ちつつ、より自然な色合いを出せる",
      "金属アレルギーの心配がない",
      "汚れが付きにくく衛生的",
    ],
    demerits: [
      "表面の着色（ステイン）が、長年の使用でわずかに摩耗・退色する可能性がある",
      "ジルコニアボンド（陶材焼付）ほどの複雑な透明感やグラデーションは出せない",
    ],
    recommend: "奥歯でも見た目の自然さにこだわりたい方、強度と美しさのバランスを取りたい方",
  },
  {
    img: "pga-crown",
    name: "白金加金（PGA）クラウン",
    price: "¥132,000〜",
    catch: "噛み合わせを大切にしたい方へ",
    body: "白金加金は適度な硬さを持ち、噛み合う歯への負担が少ない金属材料です。適合性にも優れています。",
    merits: [
      "天然歯に近い硬さで、噛み合う歯（対合歯）を傷めない",
      "歯との適合性（密着度）が極めて高く、二次虫歯になりにくい",
      "強い力がかかっても割れる心配がない",
    ],
    demerits: [
      "金属色（ゴールド・シルバー系）のため、見た目の審美性には劣る",
      "貴金属を使用するため、費用が高額になりやすい",
      "金属アレルギーのリスクがゼロではない（保険の銀歯よりは極めて低い）",
    ],
    recommend: "見た目よりも、噛み合わせの良さや「歯を長持ちさせること」を最優先したい方",
  },
  {
    img: "zirconia-bond",
    name: "ジルコニアボンド",
    price: "¥143,000〜",
    catch: "前歯の最高峰の美しさ",
    body: "内側にジルコニア、表面にセラミックを築盛したクラウンです。透明感や色調を細かく再現できます。金属を使用しないため、金属アレルギーが心配な方にも選ばれています。",
    merits: [
      "前歯に最適な、最高クラスの美しさと透明感（周りの歯に色を完璧に合わせられる）",
      "内側がジルコニアなので、ベースの強度がしっかりしている",
      "金属アレルギーの心配がない",
      "長期間使用しても変色しない",
    ],
    demerits: [
      "表面のセラミック部分が、強い衝撃や噛み合わせで欠ける（チッピング）リスクがある",
      "製作工程が複雑なため、費用が最も高額になりやすい",
    ],
    recommend: "前歯の見た目を最高に美しくしたい方、ご自身の歯と見分けがつかない仕上がりを求める方",
  },
]

const others: Material[] = [
  {
    img: "direct-bonding",
    name: "ダイレクトボンディング",
    price: "¥33,000〜¥55,000",
    catch: "歯をできるだけ削らない治療",
    body: "高品質なコンポジットレジンを直接盛り付けて修復する治療です。型取りをせず、その日のうちに治療が完了する場合があります。",
    merits: [
      "健康な歯を削る量を最小限に抑えられる",
      "型取りが不要で、1回の通院で治療が完了することが多い（即日修復）",
      "セラミック治療（インレーやクラウン）と比べて費用を抑えやすい",
      "金属アレルギーの心配がない",
      "万が一欠けたり着色したりしても、部分的な修理（リペア）が比較的容易",
    ],
    demerits: [
      "セラミックに比べると、長期間の使用で変色やツヤ落ち（劣化）が起こりやすい",
      "強度はセラミックや金属に劣るため、大きく欠けた歯や強い力がかかる部位には向かない",
      "歯科医師の技術によって、仕上がりの美しさや耐久性に差が出やすい",
    ],
    recommend: "なるべくご自身の歯を削らずに、手軽にすきっ歯や小さな欠けを綺麗に治したい方",
  },
  {
    img: "laminate",
    name: "ラミネートベニア",
    price: "¥110,000〜¥132,000",
    catch: "前歯の見た目を美しく整える",
    body: "前歯の表面をわずかに整え、薄いセラミックを貼り付ける治療です。歯の色や形、すき間の改善に適しています。",
    merits: [
      "クラウン（被せ物）にするよりも、歯を削る量が少なく済む（表面をわずかに整えるのみ）",
      "ホワイトニングでは白くならない歯（薬の影響による変色など）でも、確実に理想の白さにできる",
      "セラミック製のため、長期間使用しても変色せず、汚れ（プラーク）も付きにくい",
      "歯の形や大きさ、すきっ歯（正中離開など）を短期間で美しく整えられる",
    ],
    demerits: [
      "わずかではあるが、健康な歯の表面（エナメル質）を削る必要がある",
      "強い衝撃や、歯ぎしり・食いしばりなどによって、セラミックが割れたり剥がれたりするリスクがある",
      "虫歯が進行している歯や、噛み合わせの負担が大きすぎる部位には適応できないことがある",
    ],
    recommend: "前歯の色・形・すき間を、短期間でトータルに美しく改善したい方",
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

// 素材1件のカード（インレー・クラウン・その他で共通）
// PCでは2枚並びで四角く、カード内はメリット｜デメリットを左右分割にして
// 各テキストに十分な横幅を持たせ、変な位置での折り返しを防ぐ。
function MaterialCard({ m }: { m: Material }) {
  return (
    <div
      className="h-full flex flex-col rounded-xl border p-5 md:p-6 bg-white"
      style={{ borderColor: LINE }}
    >
      {/* ヘッダー：写真 ＋ 名前・特徴・料金 */}
      <div className="flex gap-4 md:gap-5 items-start">
        <div className="shrink-0">
          <ItemPhoto img={m.img} name={m.name} boxClass="w-24 h-24 md:w-28 md:h-28" />
        </div>
        <div className="min-w-0">
          <p className="font-serif font-bold text-lg md:text-xl leading-snug" style={{ color: BROWN }}>{m.name}</p>
          <p className="text-xs md:text-sm mt-1" style={{ color: TEXT }}>{m.catch}</p>
          <p className="font-serif text-2xl mt-2" style={{ color: BROWN }}>{m.price}</p>
        </div>
      </div>

      {/* 説明 */}
      <p className="text-xs md:text-sm leading-loose mt-4" style={{ color: TEXT }}>{m.body}</p>

      {/* メリット ｜ デメリット（左右分割） */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-4 border-t" style={{ borderColor: LINE }}>
        <div className="sm:pr-4">
          <p className="text-xs font-bold mb-2" style={{ color: BROWN }}>メリット</p>
          <ul className="space-y-1.5">
            {m.merits.map((x) => <Check key={x} text={x} />)}
          </ul>
        </div>
        <div className="sm:pl-4 sm:border-l" style={{ borderColor: LINE }}>
          <p className="text-xs font-bold mb-2" style={{ color: BROWN }}>デメリット</p>
          <ul className="space-y-1.5">
            {m.demerits.map((x) => <Check key={x} text={x} muted />)}
          </ul>
        </div>
      </div>

      {/* おすすめ（カード下部・全幅） */}
      <div className="mt-auto pt-4">
        <div className="rounded overflow-hidden flex items-stretch">
          <p className="text-white text-xs font-bold flex items-center px-4 tracking-widest shrink-0" style={{ backgroundColor: BAND }}>
            おすすめ
          </p>
          <p className="text-xs md:text-sm leading-relaxed px-4 py-3 flex-1" style={{ backgroundColor: BEIGE, color: TEXT }}>
            {m.recommend}
          </p>
        </div>
      </div>
    </div>
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
        <div className="grid gap-5 lg:grid-cols-2">
          {inlays.map((m, i) => (
            <motion.div key={m.img} {...fadeIn(i * 0.05)}>
              <MaterialCard m={m} />
            </motion.div>
          ))}
        </div>

        {/* ===== 被せ物（クラウン） ===== */}
        <Band>被せ物（クラウン）</Band>
        <div className="grid gap-5 lg:grid-cols-2">
          {crowns.map((m, i) => (
            <motion.div key={m.img} {...fadeIn(i * 0.05)}>
              <MaterialCard m={m} />
            </motion.div>
          ))}
        </div>

        {/* ===== その他の審美治療 ===== */}
        <Band>その他の審美治療</Band>
        <div className="grid gap-5 lg:grid-cols-2">
          {others.map((m, i) => (
            <motion.div key={m.img} {...fadeIn(i * 0.05)}>
              <MaterialCard m={m} />
            </motion.div>
          ))}
        </div>

        {/* 当院のこだわり */}
        <motion.div
          {...fadeIn()}
          className="mt-12 rounded border p-6 flex gap-5"
          style={{ borderColor: "#cfe0ec", backgroundColor: "#fbfdfe" }}
        >
          <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: BEIGE }}>
            <UserRound className="h-7 w-7" style={{ color: BROWN }} />
          </div>
          <div>
            <p className="font-serif font-bold mb-2" style={{ color: BROWN }}>今泉歯科医院のこだわり</p>
            <p className="text-xs md:text-sm leading-loose" style={{ color: TEXT }}>
              当院では、見た目の美しさだけでなく、長く快適に使えることを大切にしています。患者さんのご予算やご希望も考慮し、無理に高額な治療をおすすめすることはありません。必ず複数の選択肢をご提案し、納得のいく治療を一緒に選んでいきます。
            </p>
          </div>
        </motion.div>

        {/* ===== 安心してご相談ください（紙面下部の帯） ===== */}
        <motion.div {...fadeIn()} className="mt-8 rounded px-6 py-8" style={{ backgroundColor: BEIGE }}>
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
