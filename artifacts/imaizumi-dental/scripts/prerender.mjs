// ビルド後に各ページのHTMLを書き出すプリレンダリング。
// SPAは最初のHTMLが全ページ共通（トップのメタ）になるため、固定ページごとに
// タイトル・説明・OGP・canonical を正しい内容に差し替えたHTMLを生成する。
// → SNSシェア時のプレビューや、JS非実行のクローラに対するSEOが正確になる。
//
// 対象は内容が固定のページのみ。お知らせ記事(/news/:id)は動的なので対象外
// （従来通りクライアント側で描画）。
//
// 注意: 各ページの useSEO の値に合わせた一覧をここに持つ。文面を変えたら更新する。

import { readFileSync, writeFileSync, mkdirSync } from "fs"
import path from "path"

const DIST = path.resolve(import.meta.dirname, "..", "dist", "public")
const SITE = "https://imaizumi-dentist-office.com"
const SITE_NAME = "今泉歯科医院"

// useSEO と同じタイトル整形
const fullTitle = (title) => (title ? `${title} | ${SITE_NAME}` : null)

// 治療ページ（TreatmentDetail の treatments と対応）
const treatments = [
  { slug: "general", title: "一般歯科", intro: "むし歯・歯周病・歯の痛みなど、歯にまつわるお悩みを幅広く診療します。症状が軽いうちに治療することで、歯を長く守ることができます。「ちょっと気になる」段階でもお気軽にご相談ください。" },
  { slug: "pediatric", title: "小児歯科", intro: "乳歯のむし歯治療から永久歯への生え変わり、フッ素塗布やシーラントによる予防まで、お子さまのお口の健康を幅広くサポートします。歯医者が苦手なお子さまも、スタッフが笑顔でお迎えします。" },
  { slug: "preventive", title: "予防歯科", intro: "「治療するより、ならないほうがいい」という考えのもと、予防歯科に力を入れています。定期的なクリーニングや歯石除去で、むし歯・歯周病を未然に防ぎましょう。" },
  { slug: "denture", title: "入れ歯（義歯）", intro: "「入れ歯が合わない」「食事中に外れそうで不安」といったお悩みにお応えします。保険の入れ歯から、より快適な自費の入れ歯まで、患者さんに合った最適な義歯をご提案します。" },
  { slug: "aesthetic", title: "審美歯科", intro: "「白くしたいけれど、どれを選べばいいかわからない」「保険と自費の違いを聞いてから決めたい」そのような方にも、わかりやすく丁寧にご説明します。見た目の自然さ・強度・ご予算のバランスに合わせて選べるメニューをご用意しています。" },
  { slug: "oral-surgery", title: "口腔外科", intro: "口腔外科では、親知らずの抜歯・嚢胞の摘出・口腔内の外傷処置など、外科的な治療を行います。「親知らずが痛い」「頬が腫れている」「口が開きにくい」といったお悩みはお気軽にご相談ください。" },
  { slug: "whitening", title: "ホワイトニング", intro: "ホワイトニングは、歯を削らずに専用の薬剤を使って歯を白くする方法です。加齢や着色によるくすみを改善し、自然で明るい笑顔を取り戻すことができます。ホームホワイトニングとオフィスホワイトニングの2種類をご用意しています。" },
  { slug: "home-visit", title: "訪問診療", intro: "ご高齢・病気・障害などにより通院が困難な患者さまのご自宅や介護施設へ、歯科医師と歯科衛生士がお伺いして診療を行います。むし歯の治療・入れ歯の調整・口腔ケアなど、幅広い処置に対応しています。" },
]

const routes = [
  ...treatments.map((t) => ({
    path: `/treatment/${t.slug}`,
    title: `桐生市の${t.title}`,
    description: `桐生市の歯医者「${SITE_NAME}」の${t.title}について。${t.intro}`,
  })),
  {
    path: "/dental-esthetics",
    title: "桐生市のホワイトニング・歯のクリーニング",
    description: "桐生市の歯医者「今泉歯科医院」のお口のエステ。ホワイトニング・クリーニング定期コース（月額¥3,300〜）・口臭外来の3つのメニューで、清潔で白い歯と自信ある笑顔をサポートします。",
  },
  {
    path: "/subscription",
    title: "桐生市の歯のクリーニング定期コース",
    description: "桐生市の歯医者「今泉歯科医院」のクリーニング定期コース（月額¥3,300〜）。PMTC・エアフロー・フッ素塗布など専門クリーニングで健康な歯を維持。いつでも解約可能・家族割あり。",
  },
  {
    path: "/breath-care",
    title: "桐生市の口臭外来",
    description: "桐生市の歯医者「今泉歯科医院」の口臭外来。専用測定器による精密口臭検査（¥5,500〜）と舌クリーニング・専門処置で口臭の根本原因を科学的に解決します。一人で悩まず、まずご相談ください。",
  },
  {
    path: "/recruit",
    title: "採用情報（歯科衛生士・歯科助手募集）",
    description: "桐生市の今泉歯科医院では歯科衛生士・歯科助手を募集しています。未経験OK・パート・アルバイト・正社員（衛生士）。一緒に働きませんか？",
  },
  {
    path: "/news",
    title: "お知らせ（桐生市の歯医者）",
    description: "桐生市の歯医者「今泉歯科医院」からのお知らせ・診療情報・休診情報をお届けします。最新情報をご確認ください。",
  },
  {
    path: "/column",
    title: "コラム（歯のお役立ち情報）",
    description: "桐生市の歯医者「今泉歯科医院」の歯のお役立ちコラム。親知らず・むし歯・予防・お口の健康に関する情報を、わかりやすくお届けします。",
  },
  {
    path: "/column/wisdom-tooth",
    title: "親知らずは抜いた方がいい？桐生の歯医者がやさしく解説",
    description: "親知らずは抜くべき？残せる？桐生市の今泉歯科医院が、抜いた方がよいケースと残せるケース、放置のリスク、抜歯の流れや術後の注意までやさしく解説します。",
  },
  {
    path: "/column/tooth-sensitivity",
    title: "歯がしみるのはなぜ？知覚過敏かもしれません",
    description: "桐生市で歯がしみるとお悩みの方へ。今泉歯科医院が知覚過敏・むし歯・歯周病など、しみる原因と自宅でできる工夫、受診の目安をやさしく解説します。土曜診療・駐車場完備。",
  },
  {
    path: "/column/filling-came-off",
    title: "詰め物・被せ物が取れた！応急処置とやってはいけないこと",
    description: "桐生市で詰め物・被せ物が取れてお困りの方へ。今泉歯科医院が応急処置とやってはいけないNG行動、受診の目安をわかりやすく解説します。土曜診療・駐車場完備。",
  },
  {
    path: "/column/toothache",
    title: "急に歯が痛い！考えられる原因と受診の目安",
    description: "桐生市で急に歯が痛い方へ。今泉歯科医院がむし歯・神経の炎症・親知らずなど痛みの原因と受診の目安、応急的な過ごし方を解説します。土曜診療・駐車場完備。",
  },
  {
    path: "/privacy-policy",
    title: "プライバシーポリシー",
    description: "今泉歯科医院の個人情報保護方針です。患者様の個人情報を適切に保護・管理することを重要な責務と考えています。",
  },
]

const tpl = readFileSync(path.join(DIST, "index.html"), "utf8")

function applyMeta(html, { title, description, url }) {
  const t = fullTitle(title)
  const repl = (re, value) => {
    html = html.replace(re, value)
  }
  if (t) {
    repl(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`)
    repl(/(<meta name="title" content=")[\s\S]*?(")/, `$1${t}$2`)
    repl(/(<meta property="og:title" content=")[\s\S]*?(")/, `$1${t}$2`)
    repl(/(<meta name="twitter:title" content=")[\s\S]*?(")/, `$1${t}$2`)
  }
  if (description) {
    repl(/(<meta name="description" content=")[\s\S]*?(")/, `$1${description}$2`)
    repl(/(<meta property="og:description" content=")[\s\S]*?(")/, `$1${description}$2`)
    repl(/(<meta name="twitter:description" content=")[\s\S]*?(")/, `$1${description}$2`)
  }
  repl(/(<meta property="og:url" content=")[\s\S]*?(")/, `$1${url}$2`)
  repl(/(<link rel="canonical" href=")[\s\S]*?(")/, `$1${url}$2`)
  return html
}

let count = 0
for (const r of routes) {
  const url = `${SITE}${r.path}`
  const html = applyMeta(tpl, { title: r.title, description: r.description, url })
  // ディレクトリ(index.html)ではなくフラットな .html で出力する。
  // Cloudflare Pages は /foo を foo.html から末尾スラッシュ無し・リダイレクト無しで
  // 配信するため、canonical/サイトマップ(スラッシュ無し)と完全に一致する。
  const rel = r.path.replace(/^\//, "")
  const outFile = path.join(DIST, `${rel}.html`)
  mkdirSync(path.dirname(outFile), { recursive: true })
  writeFileSync(outFile, html)
  count++
}
console.log(`prerendered ${count} pages`)
