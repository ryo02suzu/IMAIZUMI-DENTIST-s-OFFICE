import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Link } from "wouter"
import { ChevronRight, ShieldCheck } from "lucide-react"
import { useSEO } from "@/hooks/useSEO"

// 地方厚生局へ届出済みの施設基準。名称は届出受理通知書（厚生局の受理番号一覧）に合わせる。
const standards = [
  {
    name: "歯科初診料の注1に規定する施設基準",
    abbr: "歯初診",
    body: "院内感染防止対策および医療安全対策に関する基準です。患者様ごとに器具を交換し、洗浄・滅菌を徹底するなど、感染対策の体制を整えています。",
  },
  {
    name: "歯科訪問診療料の注13に規定する基準",
    abbr: "歯訪診",
    body: "通院が難しい方のご自宅や施設へ伺う、歯科訪問診療の体制に関する基準です。",
  },
  {
    name: "CAD/CAM冠及びCAD/CAMインレー",
    abbr: "歯CAD",
    body: "コンピュータ設計により製作する白い被せ物・詰め物です。条件を満たす場合に健康保険で製作できます。",
  },
  {
    name: "クラウン・ブリッジ維持管理料",
    abbr: "補管",
    body: "健康保険で装着した被せ物・ブリッジについて、装着日から2年間、当院で責任をもって維持管理を行う制度です。",
  },
  {
    name: "歯科外来・在宅ベースアップ評価料（Ⅰ）",
    abbr: "歯外在ベⅠ",
    body: "医療従事者の処遇改善・賃金改善の取り組みに関する評価です。安定した医療の提供体制を維持するための制度で、会計時の負担に反映されます。",
  },
  {
    name: "外来・在宅ベースアップ評価料",
    abbr: "歯技ベ",
    body: "歯科技工士との連携等に関する評価です。被せ物・入れ歯などを製作する歯科技工士の処遇改善に関する取り組みです。",
  },
]

export default function FacilityStandards() {
  useSEO({
    title: "施設基準・院内掲示事項",
    description:
      "今泉歯科医院が関東信越厚生局長に届け出ている施設基準の一覧です。院内感染防止対策、歯科訪問診療、CAD/CAM冠、クラウン・ブリッジ維持管理料などの届出内容を掲載しています。",
  })

  return (
    <div className="min-h-screen font-sans bg-white">
      <Navbar />
      <main className="pt-20 pb-20">

        {/* Page header */}
        <div className="bg-[#f8fbfc] border-b border-gray-100 py-10">
          <div className="container mx-auto px-4 max-w-3xl">
            <nav className="flex items-center gap-1 text-xs text-gray-400 mb-4">
              <Link href="/" className="hover:text-[#7eb4d2] transition-colors">ホーム</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-[#3d5f7a]">施設基準・院内掲示事項</span>
            </nav>
            <h1 className="text-2xl md:text-3xl font-bold text-[#3d5f7a]">施設基準・院内掲示事項</h1>
            <p className="text-sm text-gray-500 mt-2">当院が厚生局へ届け出ている基準のご案内</p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 max-w-3xl py-12">

          {/* Intro */}
          <div className="bg-[#f0f8ff] border-l-4 border-[#7eb4d2] rounded-r-xl p-5 mb-10 text-sm text-gray-700 leading-relaxed">
            当院は、下記の施設基準について <strong className="text-[#3d5f7a]">関東信越厚生局長</strong> に届出を行っています。
            保険医療機関として院内に掲示している事項を、こちらのページにも掲載しています。
          </div>

          {/* Standards list */}
          <h2 className="text-base font-bold text-[#3d5f7a] mb-5 pb-2 border-b border-[#7eb4d2]/30">
            届出を行っている施設基準
          </h2>

          <ul className="space-y-4">
            {standards.map((s) => (
              <li
                key={s.abbr}
                className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-[#7eb4d2] shrink-0 mt-0.5" />
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="text-sm font-bold text-[#3d5f7a] leading-snug">{s.name}</h3>
                      <span className="text-[10px] font-medium text-[#b08d4f] bg-[#faf7f0] border border-[#e3d5b5] rounded-full px-2 py-0.5 whitespace-nowrap">
                        {s.abbr}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{s.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Notes */}
          <h2 className="text-base font-bold text-[#3d5f7a] mt-12 mb-5 pb-2 border-b border-[#7eb4d2]/30">
            費用に関するご案内
          </h2>
          <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
            <p>
              保険診療の一部負担金のほか、健康保険の対象とならない自費診療については、別途費用を申し受けます。
              主な自費診療の費用は各診療ページに掲載しています。ご不明な点は、治療前にお気軽におたずねください。
            </p>
            <p>
              当院では、療養の給付と直接関係のないサービス等の費用について、あらかじめ患者様に内容と費用をご説明し、
              ご同意をいただいたうえで承っております。
            </p>
          </div>

          {/* Contact */}
          <div className="mt-12 bg-[#f8fbfc] rounded-2xl p-6 text-sm text-gray-700 leading-relaxed">
            <p className="font-bold text-[#3d5f7a] mb-2">お問い合わせ</p>
            <p>
              本ページの内容についてのご質問は、受付窓口またはお電話にて承ります。<br />
              今泉歯科医院　TEL:{" "}
              <a href="tel:0277549893" className="text-[#7eb4d2] font-bold hover:opacity-80">
                0277-54-9893
              </a>
            </p>
          </div>

          {/* Back button */}
          <div className="mt-10 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#7eb4d2] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#6aa3c1] transition-colors"
            >
              トップページへ戻る
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
