import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Link } from "wouter"
import { ChevronRight } from "lucide-react"
import { useSEO } from "@/hooks/useSEO"

const sections = [
  {
    title: "1. 個人情報の収集について",
    body: `当院では、診療予約・問い合わせ・診療に関連して、氏名・生年月日・住所・電話番号・メールアドレス・保険証情報・既往歴・アレルギー情報などの個人情報をお預かりする場合があります。これらの情報は、適法かつ公正な手段により収集いたします。`,
  },
  {
    title: "2. 個人情報の利用目的",
    body: `収集した個人情報は、以下の目的のためにのみ使用いたします。\n\n・診療・治療・健康管理のため\n・診療予約の管理および連絡のため\n・診療費の請求・会計処理のため\n・保険請求のため（保険者への提出）\n・お知らせ・健診のご案内など当院からのご連絡のため\n・医療安全管理の改善・院内研修のため`,
  },
  {
    title: "3. 個人情報の第三者提供",
    body: `当院は、以下の場合を除き、患者様の個人情報を第三者に提供・開示することはありません。\n\n・患者様本人の同意がある場合\n・法令に基づき開示を求められた場合\n・患者様の生命・身体・財産の保護のために必要で、本人の同意を得ることが困難な場合\n・公衆衛生の向上・児童の健全育成のために特に必要な場合\n・他の医療機関に紹介・連携する際（必要最小限の情報に限る）`,
  },
  {
    title: "4. 個人情報の安全管理",
    body: `当院は、個人情報への不正アクセス、紛失、破損、漏えいを防止するため、適切なセキュリティ対策を実施しています。また、個人情報を取り扱うスタッフへの教育・指導を徹底しております。`,
  },
  {
    title: "5. 個人情報の開示・訂正・削除",
    body: `患者様は、当院が保有するご自身の個人情報について、開示・訂正・追加・削除・利用停止を求める権利を有します。ご希望の場合は、受付窓口またはお問い合わせフォームよりお申し出ください。本人確認を行ったうえで、速やかに対応いたします。`,
  },
  {
    title: "6. 診療情報（カルテ）の取り扱い",
    body: `診療録（カルテ）は、医療法および個人情報保護法に基づき、最終受診日から5年間保存いたします。保存期間経過後は、適切な方法で破棄します。`,
  },
  {
    title: "7. Webサイトにおける情報取得",
    body: `当院のウェブサイトでは、アクセス解析のためにCookieを使用することがあります。Cookieは個人を特定する情報を含みません。ブラウザの設定によりCookieを無効にすることができますが、一部のサービスが正常にご利用いただけない場合があります。`,
  },
  {
    title: "8. プライバシーポリシーの変更",
    body: `当院は、法令の変更や運営上の必要に応じて、本プライバシーポリシーを予告なく変更することがあります。変更後のポリシーは、本ページに掲載した時点から効力を生じます。`,
  },
  {
    title: "9. お問い合わせ窓口",
    body: `個人情報の取り扱いに関するご質問・ご相談は、下記までお問い合わせください。\n\n今泉歯科医院\n〒376-0011 群馬県桐生市広沢町間ノ島291-5\nTEL: 0277-54-9893\n診療時間内にお電話ください。`,
  },
]

export default function PrivacyPolicy() {
  useSEO({
    title: "プライバシーポリシー",
    description: "今泉歯科医院の個人情報保護方針です。患者様の個人情報を適切に保護・管理することを重要な責務と考えています。",
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
              <span className="text-[#3d5f7a]">プライバシーポリシー</span>
            </nav>
            <h1 className="text-2xl md:text-3xl font-bold text-[#3d5f7a]">プライバシーポリシー</h1>
            <p className="text-sm text-gray-500 mt-2">個人情報保護方針</p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 max-w-3xl py-12">

          {/* Intro */}
          <div className="bg-[#f0f8ff] border-l-4 border-[#7eb4d2] rounded-r-xl p-5 mb-10 text-sm text-gray-700 leading-relaxed">
            今泉歯科医院（以下「当院」）は、患者様の個人情報を適切に保護・管理することを重要な責務と考え、個人情報保護法その他関連法令を遵守した上で、以下のとおり個人情報保護方針を定めます。
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((sec, i) => (
              <div key={i}>
                <h2 className="text-base font-bold text-[#3d5f7a] mb-3 pb-2 border-b border-[#7eb4d2]/30">
                  {sec.title}
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                  {sec.body}
                </p>
              </div>
            ))}
          </div>

          {/* Date */}
          <div className="mt-14 text-right text-xs text-gray-400">
            制定日：2010年4月1日<br />
            最終改定：2024年4月1日<br />
            今泉歯科医院　院長　今泉 淳
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
