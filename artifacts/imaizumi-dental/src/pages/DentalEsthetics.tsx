import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Link } from "wouter"
import { ChevronRight, ArrowRight, Gift, Sparkles } from "lucide-react"
import { useSEO } from "@/hooks/useSEO"

const menus = [
  {
    href: "/treatment/whitening",
    tag: "歯を白くしたい",
    title: "ホワイトニング",
    subtitle: "薬剤の力で歯を白く明るく",
    body: "歯を削らずに専用薬剤で白くする方法です。ホームホワイトニングとオフィスホワイトニングの2種類をご用意。ご希望の白さに合わせてご提案します。",
    price: "ホーム上下 ¥27,500~ ／ オフィス上下 ¥27,500~",
  },
  {
    href: "/subscription",
    tag: "月額¥3,300〜",
    title: "クリーニング定期コース",
    subtitle: "お口のエステ ｜ いつでも解約OK",
    body: "PMTC・エアフロー・フッ素塗布など、保険診療では受けられない専門クリーニングを月額制でご提供。家族割引あり。むし歯・歯周病の予防にも最適です。",
    price: "ライト ¥3,300/月 ／ スタンダード ¥5,500/月 ／ プレミアム ¥8,800/月",
  },
  {
    href: "/breath-care",
    tag: "口臭が気になる",
    title: "口臭外来",
    subtitle: "専用測定器で原因を数値化",
    body: "気になるお口のニオイを科学的に解決します。専用測定器でニオイの原因物質を数値化し、歯周治療・舌クリーニングなど原因に合わせた処置をご提案します。",
    price: "精密口臭検査 ¥5,500~ ／ 専門クリーニング ¥16,500~",
  },
]

export default function DentalEsthetics() {
  useSEO({
    title: "桐生市のホワイトニング・歯のクリーニングなら今泉歯科医院",
    description: "桐生市の歯医者「今泉歯科医院」のお口のエステ。ホワイトニング・クリーニング定期コース（月額¥3,300〜）・口臭外来の3つのメニューで、清潔で白い歯と自信ある笑顔をサポートします。",
    canonicalPath: "/dental-esthetics",
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
              <span className="text-[#4a4a4a]">お口のエステ</span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#e8f4f9] to-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <span className="inline-block bg-[#f5a623] text-white text-xs px-3 py-1 rounded-full mb-4">
                キレイ・スッキリしたい
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-[#3d5f7a] mb-4">
                お口のエステ
              </h1>
              <p className="text-[#7eb4d2] text-lg font-medium mb-4">
                白く、清潔に、自信ある笑顔へ
              </p>
              <p className="text-[#4a4a4a] leading-relaxed">
                見た目のケアから口内環境の根本改善まで、3つのメニューをご用意しています。どれか1つからでも、組み合わせでも、ご希望に合わせてお選びください。
              </p>
            </div>
          </div>
        </section>

        {/* Menu Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <p className="text-xs font-semibold text-[#7eb4d2] tracking-widest uppercase mb-2 text-center">MENU</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#3d5f7a] mb-10 text-center">
              3つのメニュー
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              {menus.map((menu, i) => (
                <Link
                  key={i}
                  href={menu.href}
                  className="group block bg-white rounded-2xl border border-[#c8e2ee] hover:shadow-lg hover:border-[#7eb4d2] transition-all overflow-hidden"
                >
                  <div className="flex items-center justify-between px-6 py-4 bg-[#f0f8fc] border-b border-[#c8e2ee]">
                    <div className="flex items-center gap-3">
                      <span className="bg-[#7eb4d2] text-white text-[10px] px-2 py-0.5 rounded-full shrink-0">
                        {menu.tag}
                      </span>
                      <h3 className="font-bold text-[#3d5f7a] text-lg">{menu.title}</h3>
                    </div>
                    <ArrowRight className="h-5 w-5 text-[#7eb4d2] group-hover:translate-x-1 transition-transform shrink-0" />
                  </div>
                  <div className="px-6 py-5">
                    <p className="text-[#7eb4d2] text-sm font-medium mb-2">{menu.subtitle}</p>
                    <p className="text-[#4a4a4a] text-sm leading-relaxed mb-3">{menu.body}</p>
                    <p className="text-xs text-[#6b7280] bg-[#f8fbfd] rounded-lg px-3 py-2 inline-block">
                      💰 {menu.price}（税込）
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Set Discount */}
        <section className="py-16 bg-[#f8fbfd]">
          <div className="container mx-auto px-4">
            <p className="text-xs font-semibold text-[#f5a623] tracking-widest uppercase mb-2 text-center">SET PLAN</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#3d5f7a] mb-3 text-center">
              定期コースと組み合わせてお得に
            </h2>
            <p className="text-center text-sm text-[#6b7280] mb-10">
              クリーニング定期コースと一緒にお申し込みいただくと、定期コースの月額が無料になります
            </p>

            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Double Set */}
              <div className="bg-white rounded-2xl shadow-sm border border-[#c8e2ee] overflow-hidden">
                <div className="bg-[#7eb4d2] px-6 py-4 flex items-center gap-3">
                  <Gift className="h-5 w-5 text-white shrink-0" />
                  <div>
                    <p className="text-white/80 text-[10px] tracking-wider uppercase">Double Care</p>
                    <h3 className="text-white font-bold text-lg leading-tight">2つセット → 初月無料</h3>
                  </div>
                </div>
                <div className="px-6 py-5">
                  <div className="mb-4">
                    <p className="text-sm text-[#6b7280] mb-0.5">定期コース</p>
                    <p className="text-3xl font-bold text-[#f5a623]">初月 <span className="text-4xl">無料</span></p>
                  </div>
                  <p className="text-[#4a4a4a] text-sm leading-relaxed mb-4">
                    ホワイトニングまたは口臭外来と同時に定期コースをお申し込みいただいた方に、定期コース初月分を無料にいたします。
                  </p>
                  <div className="space-y-1.5 mb-5">
                    {[
                      "ホワイトニング × クリーニング定期コース",
                      "口臭外来 × クリーニング定期コース",
                    ].map((combo) => (
                      <div key={combo} className="flex items-center gap-2 text-xs text-[#3d5f7a]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7eb4d2] shrink-0" />
                        {combo}
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#f0f8fc] rounded-xl p-4 border border-[#c8e2ee]">
                    <p className="text-[10px] font-bold text-[#7eb4d2] uppercase tracking-wider mb-2">計算例</p>
                    <p className="text-xs text-[#4a4a4a] mb-3">
                      ホワイトニング上下（¥27,500）＋ 定期コース・スタンダード（¥5,500/月）を同時申込
                    </p>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between text-[#6b7280]">
                        <span>ホワイトニング上下</span>
                        <span>¥27,500</span>
                      </div>
                      <div className="flex justify-between text-[#6b7280]">
                        <span>定期コース・スタンダード（初月）</span>
                        <span className="line-through">¥5,500</span>
                      </div>
                      <div className="flex justify-between text-[#f5a623] font-bold">
                        <span>　→ 初月無料</span>
                        <span>¥0</span>
                      </div>
                      <div className="border-t border-[#c8e2ee] pt-1 mt-1 flex justify-between font-bold text-[#3d5f7a]">
                        <span>1ヶ月目のご負担</span>
                        <span>¥27,500</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-[#9ca3af] mt-2">通常 ¥33,000 → ¥5,500 お得</p>
                  </div>
                </div>
              </div>

              {/* Triple Set */}
              <div className="bg-white rounded-2xl shadow-md border-2 border-[#f5a623] overflow-hidden relative">
                <div className="absolute top-0 right-0 bg-[#f5a623] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  一番お得
                </div>
                <div className="bg-[#3d5f7a] px-6 py-4 flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-[#f5a623] shrink-0" />
                  <div>
                    <p className="text-white/70 text-[10px] tracking-wider uppercase">Triple Care</p>
                    <h3 className="text-white font-bold text-lg leading-tight">3つ全部 → 2ヶ月無料</h3>
                  </div>
                </div>
                <div className="px-6 py-5">
                  <div className="mb-4">
                    <p className="text-sm text-[#6b7280] mb-0.5">定期コース</p>
                    <p className="text-3xl font-bold text-[#f5a623]">2ヶ月間 <span className="text-4xl">無料</span></p>
                  </div>
                  <p className="text-[#4a4a4a] text-sm leading-relaxed mb-4">
                    3つ全てを同時にお申し込みの方に、定期コースの最初の2ヶ月分を無料にいたします。総合的なお口のケアをまとめてスタートできます。
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[#3d5f7a] mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] shrink-0" />
                    ホワイトニング × 口臭外来 × クリーニング定期コース
                  </div>
                  <div className="bg-[#fffbf0] rounded-xl p-4 border border-[#f5d56e]">
                    <p className="text-[10px] font-bold text-[#f5a623] uppercase tracking-wider mb-2">計算例</p>
                    <p className="text-xs text-[#4a4a4a] mb-3">
                      ホワイトニング上下（¥27,500）＋ 精密口臭検査（¥5,500）＋ 定期コース・スタンダード（¥5,500/月）を同時申込
                    </p>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between text-[#6b7280]">
                        <span>ホワイトニング上下</span>
                        <span>¥27,500</span>
                      </div>
                      <div className="flex justify-between text-[#6b7280]">
                        <span>精密口臭検査</span>
                        <span>¥5,500</span>
                      </div>
                      <div className="flex justify-between text-[#6b7280]">
                        <span>定期コース 1〜2ヶ月目（¥5,500×2）</span>
                        <span className="line-through">¥11,000</span>
                      </div>
                      <div className="flex justify-between text-[#f5a623] font-bold">
                        <span>　→ 2ヶ月間無料</span>
                        <span>¥0</span>
                      </div>
                      <div className="border-t border-[#f5d56e] pt-1 mt-1 flex justify-between font-bold text-[#3d5f7a]">
                        <span>1ヶ月目のご負担</span>
                        <span>¥33,000</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-[#9ca3af] mt-2">通常 ¥44,000 → ¥11,000 お得（2ヶ月分）</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-[#9ca3af] mt-6">
              ※ 割引はカウンセリング当日のお申し込みに限ります。他の割引との併用はできません。
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#3d5f7a] text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">まずはお気軽にご相談ください</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              どのメニューが合うかわからない場合も、診察時にゆっくりご説明します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://functional-prototype.replit.app/book/imaizumi-dental"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f5a623] text-white px-8 py-3 rounded-full font-bold hover:bg-[#e09520] transition-colors"
              >
                WEB予約はこちら
              </a>
              <a
                href="tel:0277549893"
                className="border border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                0277-54-9893
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
