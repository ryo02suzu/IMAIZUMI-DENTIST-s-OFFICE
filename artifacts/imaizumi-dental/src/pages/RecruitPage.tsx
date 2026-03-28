import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Link } from "wouter"
import { ChevronRight, Phone, Mail, Clock, Car, Star, Heart, Users } from "lucide-react"
import { useSEO } from "@/hooks/useSEO"

const features = [
  {
    icon: Clock,
    title: "メリハリのある勤務時間",
    body: "日曜・祝日定休。土曜も午後4時まで。仕事もプライベートも大切にできる環境です。",
  },
  {
    icon: Car,
    title: "車通勤OK・駐車場完備",
    body: "駐車場10台完備。車での通勤もOKです。バス停「昭和橋」からも徒歩2分と好アクセス。",
  },
  {
    icon: Star,
    title: "幅広い経験が積める",
    body: "一般診療から訪問診療、ホワイトニング・専門クリーニング（お口のエステ）まで多彩な診療に携われます。",
  },
]

const values = [
  "患者さんに親身に寄り添える方",
  "チームワークを大切にできる方",
  "明るく笑顔で接することが好きな方",
  "未経験だけど歯科の仕事に興味がある方",
  "子育て中でもしっかり働きたい方",
]

const jobs = [
  {
    role: "歯科助手",
    tag: "バイト・パート",
    color: "bg-[#7eb4d2]",
    wage: "時給 ¥1,050〜",
    wageNote: "経験・スキルに応じて応相談",
    experience: "未経験歓迎・高校生から応募OK",
    employment: ["アルバイト", "パート"],
    duties: [
      "診療補助（器具の準備・片付けなど）",
      "受付・電話応対",
      "院内清掃・消毒",
    ],
    hours: "9:30〜12:30 / 15:00〜19:00（曜日・コマ相談可）",
    holiday: "日曜・祝日定休（シフト制）",
  },
  {
    role: "歯科衛生士",
    tag: "バイト・パート・正社員",
    color: "bg-[#f5a623]",
    wage: "時給 ¥1,300〜 ／ 正社員 月給 ¥175,000〜",
    wageNote: "経験・スキルに応じて昇給あり",
    experience: "未経験OK（新卒歓迎）",
    employment: ["アルバイト", "パート", "正社員"],
    duties: [
      "歯科衛生士業務全般",
      "PMTC・エアフロー・フッ素塗布",
      "ホワイトニング補助",
      "口臭外来のサポート",
      "訪問診療の同行（希望者）",
    ],
    hours: "9:30〜12:30 / 15:00〜19:00（相談可）",
    holiday: "日曜・祝日定休（シフト制）",
  },
]

export default function RecruitPage() {
  useSEO({
    title: "採用情報（歯科衛生士・歯科助手募集）| 今泉歯科医院",
    description: "桐生市の今泉歯科医院では歯科衛生士・歯科助手を募集しています。未経験OK・パート・アルバイト・正社員（衛生士）。一緒に働きませんか？",
    canonicalPath: "/recruit",
  })

  return (
    <div className="min-h-screen font-sans bg-white">
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <div className="bg-[#f0f8fc] py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-1 text-sm text-[#7eb4d2]">
              <Link href="/" className="hover:underline">ホーム</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-[#4a4a4a]">採用情報</span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#e8f4f9] to-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <span className="inline-block bg-[#f5a623] text-white text-xs px-3 py-1 rounded-full mb-4">
                スタッフ募集中
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-[#3d5f7a] mb-4">
                一緒に働きませんか？
              </h1>
              <p className="text-[#7eb4d2] text-lg font-medium mb-4">
                地域の笑顔を、チームで守る仕事です
              </p>
              <p className="text-[#4a4a4a] leading-relaxed">
                今泉歯科医院では、歯科衛生士・歯科助手を募集しています。<br />
                未経験の方も丁寧にサポートしますので、安心してご応募ください。
              </p>
            </div>
          </div>
        </section>

        {/* 院長メッセージ */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-xs font-semibold text-[#7eb4d2] tracking-widest uppercase mb-2">MESSAGE</p>
            <h2 className="text-2xl font-bold text-[#3d5f7a] mb-8">院長より</h2>
            <div className="bg-[#f0f8fc] rounded-2xl p-6 md:p-8 border-l-4 border-[#7eb4d2]">
              <p className="text-[#4a4a4a] leading-relaxed mb-4">
                当院は桐生市で長年、地域の皆さまのお口の健康を支えてきた小さな歯科医院です。
                スタッフ同士の距離が近く、アットホームな雰囲気の中で働けることが一番の特徴だと思っています。
              </p>
              <p className="text-[#4a4a4a] leading-relaxed mb-4">
                私たちが大切にしているのは、患者さん一人ひとりと丁寧に向き合うこと。
                スタッフにも同じように、一緒に成長できる環境を用意したいと思っています。
              </p>
              <p className="text-[#4a4a4a] leading-relaxed">
                歯科の仕事が初めての方も、ブランクがある方も、まずはお気軽にご連絡ください。
              </p>
              <p className="text-right text-[#3d5f7a] font-bold mt-6">今泉歯科医院 院長　今泉 淳</p>
            </div>
          </div>
        </section>

        {/* 求める人物像 */}
        <section className="py-14 bg-[#f8fbfc]">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-xs font-semibold text-[#7eb4d2] tracking-widest uppercase mb-2">WANTED</p>
            <h2 className="text-2xl font-bold text-[#3d5f7a] mb-8">こんな方を求めています</h2>
            <div className="space-y-3">
              {values.map((v, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm">
                  <Heart className="h-4 w-4 text-[#f5a623] shrink-0" />
                  <span className="text-[#4a4a4a]">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 働く特徴 */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-xs font-semibold text-[#7eb4d2] tracking-widest uppercase mb-2 text-center">FEATURES</p>
            <h2 className="text-2xl font-bold text-[#3d5f7a] mb-10 text-center">当院で働く3つの特徴</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div key={i} className="bg-[#f0f8fc] rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-[#7eb4d2] rounded-full flex items-center justify-center mx-auto mb-4">
                    <f.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-[#3d5f7a] font-bold mb-3">{f.title}</h3>
                  <p className="text-[#4a4a4a] text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 募集要項 */}
        <section className="py-14 bg-[#f8fbfc]">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-xs font-semibold text-[#7eb4d2] tracking-widest uppercase mb-2 text-center">JOBS</p>
            <h2 className="text-2xl font-bold text-[#3d5f7a] mb-10 text-center">募集要項</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {jobs.map((job) => (
                <div key={job.role} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                  <div className={`${job.color} px-6 py-4`}>
                    <p className="text-white/80 text-xs mb-1">{job.tag}</p>
                    <h3 className="text-white text-2xl font-bold">{job.role}</h3>
                    <p className="text-white font-bold mt-1">{job.wage}</p>
                    <p className="text-white/80 text-xs">{job.wageNote}</p>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex flex-wrap gap-2 items-center">
                      <div className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                        {job.experience}
                      </div>
                      {job.role === "歯科助手" && (
                        <div className="inline-block bg-orange-50 text-orange-600 text-xs font-bold px-3 py-1 rounded-full border border-orange-200">
                          ✨ 高校生・大学生スタッフ活躍中！
                        </div>
                      )}
                    </div>

                    <div>
                      <p className="text-xs text-[#7eb4d2] font-semibold mb-1">雇用形態</p>
                      <div className="flex flex-wrap gap-2">
                        {job.employment.map((e) => (
                          <span key={e} className="bg-[#e8f4f9] text-[#3d5f7a] text-xs px-2 py-1 rounded-full">{e}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-[#7eb4d2] font-semibold mb-1">主な仕事内容</p>
                      <ul className="space-y-1">
                        {job.duties.map((d, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#4a4a4a]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] mt-1.5 shrink-0"></span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-xs text-[#7eb4d2] font-semibold mb-1">勤務時間</p>
                      <p className="text-sm text-[#4a4a4a]">{job.hours}</p>
                    </div>

                    <div>
                      <p className="text-xs text-[#7eb4d2] font-semibold mb-1">休日</p>
                      <p className="text-sm text-[#4a4a4a]">{job.holiday}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-[#6b7280] mt-6">※ 詳細はお問い合わせ時にご確認ください。</p>
          </div>
        </section>

        {/* 応募方法 */}
        <section className="py-14 bg-[#3d5f7a]">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <Users className="h-10 w-10 text-white/50 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">まずはお気軽にご連絡ください</h2>
            <p className="text-white/70 text-sm mb-8">
              「話を聞いてみたい」だけでも大歓迎です。<br />
              お電話またはメール（お問い合わせフォーム）にてお気軽にどうぞ。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0277549893"
                className="flex items-center justify-center gap-2 bg-[#f5a623] text-white font-bold py-4 px-8 rounded-full hover:opacity-90 transition-opacity text-lg"
              >
                <Phone className="h-5 w-5" />
                0277-54-9893
              </a>
              <a
                href={`mailto:pocjcom@yahoo.co.jp?subject=${encodeURIComponent('採用お問い合わせ（今泉歯科医院）')}&body=${encodeURIComponent('【採用応募フォーム】\n\n① 氏名：\n\n② 電話番号：\n\n③ 希望職種（歯科助手／歯科衛生士）：\n\n④ 勤務可能曜日・時間帯\n（例：平日17:00〜20:00、土曜終日 など）：\n\n⑤ 面接可能日時（第3希望まで）\n（例：\n・4/1 17:00以降\n・4/2 終日\n・4/5 18:00以降）：\n')}`}
                className="flex items-center justify-center gap-2 bg-white text-[#3d5f7a] font-bold py-4 px-8 rounded-full hover:opacity-90 transition-opacity"
              >
                <Mail className="h-5 w-5" />
                メールで応募する
              </a>
            </div>
            <p className="text-white/50 text-xs mt-6">受付時間：月〜金 9:30〜19:00（木午前除く）、土 9:30〜12:30 / 14:00〜16:00</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
