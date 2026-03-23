import { motion } from "framer-motion";
import { 
  CalendarDays, 
  ChevronRight, 
  HeartHandshake, 
  MessageCircleHeart, 
  ShieldPlus, 
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Placeholder } from "@/components/ui/placeholder";

const BOOKING_URL = "https://functional-prototype.replit.app/book/imaizumi-dental";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="text-center mb-12">
    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
      {title}
    </h2>
    <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase block">
      {subtitle}
    </span>
    <div className="h-[2px] w-12 bg-primary mx-auto mt-6" />
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-white">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative w-full aspect-[16/9] md:aspect-[16/5] bg-gray-200">
          <Placeholder text="メインビジュアル写真 準備中" className="absolute inset-0 w-full h-full" />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white tracking-wider mb-6 drop-shadow-lg"
            >
              あなたの笑顔を、<br />
              一生のお付き合いで守ります
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/90 text-sm md:text-lg max-w-2xl font-medium tracking-wide drop-shadow-md"
            >
              地域に根ざした丁寧な歯科診療。<br className="md:hidden" />痛みに配慮し、安心して通えるクリニックを目指しています。
            </motion.p>
          </div>
        </section>

        {/* NEWS SECTION */}
        <section id="news" className="py-12 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="flex flex-col md:flex-row border border-border">
              <div className="bg-primary/10 px-6 py-4 md:py-8 flex items-center justify-center md:w-40 border-b md:border-b-0 md:border-r border-border">
                <h3 className="font-display font-bold text-lg text-primary tracking-widest md:[writing-mode:vertical-rl] md:rotate-180">
                  お知らせ
                </h3>
              </div>
              <ul className="flex-1 p-6 flex flex-col">
                {[
                  { date: "2024.04.01", text: "ホームページを公開しました" },
                  { date: "2024.03.15", text: "開院に向けて準備を進めています" },
                  { date: "2024.03.01", text: "オープニングスタッフを募集しています" },
                ].map((news, i) => (
                  <li key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-3 border-b border-border/50 last:border-0 last:pb-0 first:pt-0 group cursor-pointer">
                    <span className="text-muted-foreground font-mono text-sm shrink-0">{news.date}</span>
                    <span className="text-foreground group-hover:text-primary transition-colors flex-1">{news.text}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* CONCEPT SECTION */}
        <section id="concept" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="ごあいさつ" subtitle="Message" />
            
            <FadeIn>
              <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start">
                <div className="flex-1 space-y-6 text-foreground/80 leading-loose">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                    気軽にご相談いただける<br />
                    地域のパートナーとして
                  </h3>
                  <p>
                    皆様、はじめまして。今泉歯科医院 院長の今泉です。
                  </p>
                  <p>
                    私たちは群馬県桐生市にて、地域の皆様のお口の健康を守るパートナーとして、日々の診療にあたっています。「歯医者さんは怖い」というイメージを払拭し、気軽に相談できる温かいクリニックを目指しています。
                  </p>
                  <p>
                    当院では患者さんの気持ちを理解した診療をモットーとし、健康という側面から一生涯自分の歯で生活出来るようにインフォームドコンセントを大切にし、予防歯科に力を入れて治療しております。
                  </p>
                  <p>
                    患者様一人ひとりのライフスタイルやご希望に合わせた、最適な治療プランをご提案いたします。生涯自分の歯で美味しく食事ができるよう、一緒にサポートさせてください。
                  </p>
                  <div className="pt-6">
                    <p className="font-bold text-foreground">院長　今泉 ○○</p>
                  </div>
                </div>
                <div className="w-full md:w-[400px] shrink-0">
                   <Placeholder className="w-full aspect-[4/3] bg-gray-100 border-none" text="院長写真 準備中" />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features" className="py-20 bg-gray-50 border-y border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="当院の特徴" subtitle="Features" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: MessageCircleHeart, title: "丁寧なカウンセリング", desc: "インフォームドコンセントを大切にし、患者様が納得された上で治療をスタートします。" },
                { icon: ShieldPlus, title: "最新設備と衛生管理", desc: "精密な診断と安全な治療のために最新の医療機器を導入し、衛生管理を徹底しています。" },
                { icon: HeartHandshake, title: "痛みの少ない治療", desc: "表面麻酔や極細の針を使用し、できる限り痛みを感じさせない治療を心がけています。" },
              ].map((feature, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white p-8 border border-border h-full flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary/10 flex items-center justify-center text-primary mb-6">
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-lg mb-4 text-foreground">{feature.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* TREATMENTS SECTION */}
        <section id="treatments" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="診療内容" subtitle="Treatments" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "一般歯科", desc: "虫歯や歯周病の治療" },
                { title: "予防歯科", desc: "定期検診やクリーニング" },
                { title: "小児歯科", desc: "お子様のペースに合わせた治療" },
                { title: "矯正歯科", desc: "歯並びと噛み合わせの改善" },
                { title: "インプラント", desc: "失った歯の機能回復" },
                { title: "審美歯科", desc: "白く美しい歯へ" },
              ].map((treatment, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="group relative overflow-hidden bg-gray-100 border border-border cursor-pointer">
                    <div className="aspect-[4/3] w-full">
                      <Placeholder text="診療イメージ" className="w-full h-full border-none rounded-none" />
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-bold tracking-wider flex items-center gap-2">
                        詳細を見る <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                    <div className="bg-white p-4 text-center border-t border-border z-10 relative">
                      <h3 className="font-bold text-lg text-foreground mb-1">{treatment.title}</h3>
                      <p className="text-xs text-foreground/60">{treatment.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="py-20 bg-gray-50 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="自費診療 料金表" subtitle="Pricing" />
            
            <FadeIn>
              <div className="bg-white border border-border">
                <div className="p-6 border-b border-border bg-gray-50/50">
                  <p className="text-center text-foreground/70 text-sm">
                    ※ 料金はすべて税込の目安です。お口の状態により変動する場合がございます。<br/>
                  </p>
                </div>
                
                <div className="p-6 md:p-8 space-y-10">
                  
                  {/* Category */}
                  <div>
                    <h4 className="font-bold text-lg text-foreground flex items-center gap-2 mb-4 border-l-4 border-primary pl-3 bg-gray-50 py-2">
                      <Sparkles className="w-5 h-5 text-primary" /> ホワイトニング
                    </h4>
                    <ul className="divide-y divide-border">
                      <li className="py-3 flex justify-between items-center gap-4 px-2">
                        <span className="font-medium text-sm md:text-base">ホームホワイトニング</span>
                        <span className="font-bold font-mono text-lg text-foreground shrink-0">20,000円〜</span>
                      </li>
                      <li className="py-3 flex justify-between items-center gap-4 px-2">
                        <span className="font-medium text-sm md:text-base">オフィスホワイトニング</span>
                        <span className="font-bold font-mono text-lg text-foreground shrink-0">30,000円〜</span>
                      </li>
                    </ul>
                  </div>

                  {/* Category */}
                  <div>
                    <h4 className="font-bold text-lg text-foreground flex items-center gap-2 mb-4 border-l-4 border-primary pl-3 bg-gray-50 py-2">
                      <ShieldCheck className="w-5 h-5 text-primary" /> 審美歯科（被せ物）
                    </h4>
                    <ul className="divide-y divide-border">
                      <li className="py-3 flex justify-between items-center gap-4 px-2">
                        <span className="font-medium text-sm md:text-base">セラミッククラウン（全セラミック）</span>
                        <span className="font-bold font-mono text-lg text-foreground shrink-0">75,000円〜</span>
                      </li>
                      <li className="py-3 flex justify-between items-center gap-4 px-2">
                        <span className="font-medium text-sm md:text-base">セラミッククラウン（ジルコニア）</span>
                        <span className="font-bold font-mono text-lg text-foreground shrink-0">80,000円〜</span>
                      </li>
                    </ul>
                  </div>

                  {/* Category */}
                  <div>
                    <h4 className="font-bold text-lg text-foreground flex items-center gap-2 mb-4 border-l-4 border-primary pl-3 bg-gray-50 py-2">
                      <ShieldPlus className="w-5 h-5 text-primary" /> インプラント・矯正
                    </h4>
                    <ul className="divide-y divide-border">
                      <li className="py-3 flex justify-between items-center gap-4 px-2">
                        <span className="font-medium text-sm md:text-base">インプラント（1本）</span>
                        <span className="font-bold font-mono text-lg text-foreground shrink-0">300,000円〜</span>
                      </li>
                      <li className="py-3 flex justify-between items-center gap-4 px-2">
                        <span className="font-medium text-sm md:text-base">矯正（ワイヤー矯正・全顎）</span>
                        <span className="font-bold font-mono text-lg text-foreground shrink-0">680,000円〜</span>
                      </li>
                      <li className="py-3 flex justify-between items-center gap-4 px-2">
                        <span className="font-medium text-sm md:text-base">矯正（マウスピース矯正）</span>
                        <span className="font-bold font-mono text-lg text-foreground shrink-0">780,000円〜</span>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ACCESS SECTION */}
        <section id="access" className="py-20 bg-white border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="アクセス・診療時間" subtitle="Access" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <FadeIn>
                <div className="bg-white border border-border p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6 text-foreground font-bold text-lg border-b border-border pb-4">
                    <Clock className="w-6 h-6 text-primary" />
                    診療スケジュール
                  </div>
                  <table className="w-full text-center border-collapse bg-white">
                    <thead>
                      <tr className="bg-gray-50 border-y border-border">
                        <th className="py-3 px-2 font-medium text-sm border-r border-border">診療時間</th>
                        <th className="py-3 px-2 font-medium text-sm border-r border-border">月</th>
                        <th className="py-3 px-2 font-medium text-sm border-r border-border">火</th>
                        <th className="py-3 px-2 font-medium text-sm border-r border-border">水</th>
                        <th className="py-3 px-2 font-medium text-sm border-r border-border">木</th>
                        <th className="py-3 px-2 font-medium text-sm border-r border-border">金</th>
                        <th className="py-3 px-2 font-medium text-sm border-r border-border text-primary">土</th>
                        <th className="py-3 px-2 font-medium text-sm text-accent">日祝</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-4 text-sm font-mono text-foreground/70 border-r border-border whitespace-nowrap">
                          9:00 - 13:00
                        </td>
                        <td className="py-4 font-bold text-lg text-foreground border-r border-border">〇</td>
                        <td className="py-4 font-bold text-lg text-foreground border-r border-border">〇</td>
                        <td className="py-4 font-bold text-lg text-foreground border-r border-border">〇</td>
                        <td className="py-4 font-bold text-lg text-foreground border-r border-border">〇</td>
                        <td className="py-4 font-bold text-lg text-foreground border-r border-border">〇</td>
                        <td className="py-4 font-bold text-lg text-primary border-r border-border">〇</td>
                        <td className="py-4 font-bold text-lg text-accent">休</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-4 text-sm font-mono text-foreground/70 border-r border-border whitespace-nowrap">
                          14:00 - 18:00
                        </td>
                        <td className="py-4 font-bold text-lg text-foreground border-r border-border">〇</td>
                        <td className="py-4 font-bold text-lg text-foreground border-r border-border">〇</td>
                        <td className="py-4 font-bold text-lg text-foreground border-r border-border">〇</td>
                        <td className="py-4 font-bold text-lg text-foreground/30 border-r border-border">休</td>
                        <td className="py-4 font-bold text-lg text-foreground border-r border-border">〇</td>
                        <td className="py-4 font-bold text-lg text-foreground/30 border-r border-border">休</td>
                        <td className="py-4 font-bold text-lg text-accent">休</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-sm text-foreground/60 mt-4">
                    ※休診日：木曜午後・土曜午後・日曜・祝日<br />
                    ※都合により早く終了している場合がございますのでお電話にてご確認ください。
                  </p>

                  <div className="mt-8 pt-6 border-t border-border flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">群馬県桐生市</h4>
                        <p className="text-foreground/70 text-sm">※詳細な住所は近日公開いたします</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} className="h-full">
                <div className="h-full min-h-[300px] border border-border">
                  <Placeholder text="Google Maps 準備中" className="w-full h-full border-none bg-gray-100" />
                </div>
              </FadeIn>
            </div>
            
            <div className="mt-12 text-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-accent text-accent-foreground font-bold text-lg hover:bg-accent/90 transition-colors shadow-md"
              >
                <CalendarDays className="w-6 h-6" />
                24時間WEB予約はこちら
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
