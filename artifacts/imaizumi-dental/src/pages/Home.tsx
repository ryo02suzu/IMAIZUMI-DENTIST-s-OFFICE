import { motion } from "framer-motion";
import { 
  CalendarDays, 
  ChevronRight, 
  Phone,
  Stethoscope,
  Smile,
  ShieldCheck,
  Activity,
  Wrench,
  Sparkles,
  Sun,
  Scissors
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

const Timetable = ({ className = "" }: { className?: string }) => (
  <div className={`bg-white rounded-3xl shadow-xl p-8 border border-border/50 ${className}`}>
    <h3 className="text-center font-bold text-primary mb-4 text-lg border-b border-border pb-3">診療時間</h3>
    <table className="w-full text-center text-sm border-collapse">
      <thead>
        <tr>
          <th className="font-normal text-foreground/70 pb-3 text-left w-16"></th>
          <th className="font-bold pb-3">月</th>
          <th className="font-bold pb-3">火</th>
          <th className="font-bold pb-3">水</th>
          <th className="font-bold pb-3">木</th>
          <th className="font-bold pb-3">金</th>
          <th className="font-bold text-primary pb-3">土</th>
          <th className="font-bold text-accent pb-3">日</th>
        </tr>
      </thead>
      <tbody className="text-foreground">
        <tr className="border-b border-border/50">
          <td className="py-3 text-left text-xs text-foreground/70">9-13</td>
          <td className="py-3 font-bold text-lg text-primary">●</td>
          <td className="py-3 font-bold text-lg text-primary">●</td>
          <td className="py-3 font-bold text-lg text-primary">●</td>
          <td className="py-3 font-bold text-lg text-primary">●</td>
          <td className="py-3 font-bold text-lg text-primary">●</td>
          <td className="py-3 font-bold text-lg text-primary">△</td>
          <td className="py-3 font-bold text-foreground/30">–</td>
        </tr>
        <tr>
          <td className="py-3 text-left text-xs text-foreground/70">14-18</td>
          <td className="py-3 font-bold text-lg text-primary">●</td>
          <td className="py-3 font-bold text-lg text-primary">●</td>
          <td className="py-3 font-bold text-lg text-primary">●</td>
          <td className="py-3 font-bold text-foreground/30">–</td>
          <td className="py-3 font-bold text-lg text-primary">●</td>
          <td className="py-3 font-bold text-foreground/30">–</td>
          <td className="py-3 font-bold text-foreground/30">–</td>
        </tr>
      </tbody>
    </table>
    <div className="mt-5 text-xs text-foreground/60 text-center leading-relaxed">
      休診日：木曜午後・土曜午後・日曜・祝日<br />
      ※△は土曜午前のみ
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-white pt-[112px]">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative w-full h-[70vh] min-h-[500px] bg-gray-100 flex items-center overflow-hidden">
          <Placeholder text="ヒーロー背景写真" className="absolute inset-0 w-full h-full border-none" />
          
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent"></div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-12 lg:pb-24">
            <div className="flex flex-col lg:flex-row justify-between w-full gap-8 lg:items-end">
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-6"
              >
                <div className="space-y-3">
                  <p className="text-primary font-bold text-lg md:text-xl tracking-widest drop-shadow-sm">
                    あなたの笑顔、いつもきれいに
                  </p>
                  <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] drop-shadow-sm">
                    桐生の街の<br />歯医者さん
                  </h2>
                </div>
                
                <div className="flex flex-wrap gap-3 mt-4">
                  {["桐生駅 徒歩〇分", "土曜 診療あり", "駐車場 完備"].map((badge, i) => (
                    <span 
                      key={i} 
                      className="inline-flex items-center justify-center bg-accent text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-md"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden md:block w-full max-w-[360px]"
              >
                <Timetable />
              </motion.div>

            </div>
          </div>
        </section>

        {/* TREATMENT SECTION */}
        <section id="treatments" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-primary mb-3">TREATMENT</h2>
              <span className="text-foreground font-bold tracking-widest block text-sm">診療内容</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "一般歯科", label: "歯が痛い・しみる", icon: Stethoscope },
                { title: "小児歯科", label: "子供の歯を守りたい", icon: Smile },
                { title: "予防歯科", label: "虫歯を防ぎたい", icon: ShieldCheck },
                { title: "矯正歯科", label: "歯並びを治したい", icon: Activity },
                { title: "インプラント", label: "歯を失ってしまった", icon: Wrench },
                { title: "審美歯科", label: "銀歯を白くしたい", icon: Sparkles },
                { title: "ホワイトニング", label: "歯を白くしたい", icon: Sun },
                { title: "口腔外科", label: "親知らずが痛い", icon: Scissors },
              ].map((treatment, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-[#EAF5FA] rounded-3xl p-8 flex flex-col items-center text-center h-full hover:-translate-y-1 transition-transform duration-300 cursor-pointer group shadow-sm">
                    <div className="bg-white border-2 border-[#EAF5FA] text-primary text-xs font-bold px-5 py-2 rounded-full mb-8 whitespace-nowrap shadow-sm">
                      {treatment.label}
                    </div>
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-8 text-primary group-hover:scale-110 transition-transform duration-300">
                      <treatment.icon strokeWidth={1.5} className="w-10 h-10" />
                    </div>
                    <div className="mt-auto flex items-center gap-2 font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {treatment.title}
                      <ChevronRight className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="pt-24 pb-48 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <FadeIn className="w-full lg:w-1/2">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                  <Placeholder text="院長・スタッフ写真" className="w-full h-full border-none" />
                </div>
              </FadeIn>
              <FadeIn className="w-full lg:w-1/2" delay={0.2}>
                <div className="space-y-6">
                  <span className="text-primary font-bold tracking-widest text-xs border border-primary px-3 py-1 rounded-full">ABOUT US</span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-primary leading-tight">
                    今泉歯科医院について
                  </h2>
                  <div className="space-y-5 text-foreground/80 leading-loose pt-2">
                    <p>
                      私たちは群馬県桐生市にて、地域の皆様のお口の健康を守るパートナーとして、日々の診療にあたっています。「歯医者さんは怖い」というイメージを払拭し、気軽に相談できる温かいクリニックを目指しています。
                    </p>
                    <p>
                      当院では患者さんの気持ちを理解した診療をモットーとし、健康という側面から一生涯自分の歯で生活出来るようにインフォームドコンセントを大切にし、予防歯科に力を入れて治療しております。
                    </p>
                  </div>
                  <div className="pt-6">
                    <a href="#" className="inline-flex items-center gap-2 bg-accent text-white font-bold px-8 py-4 rounded-full hover:bg-accent/90 transition-colors shadow-md group">
                      詳細を見る
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
          
          {/* Wave divider at bottom */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,137.9,119.5,202.9,109.91,243.64,103.95,283.67,86.4,321.39,56.44Z" className="fill-secondary/50"></path>
            </svg>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features" className="py-24 bg-secondary/50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-primary mb-3">FEATURE</h2>
              <span className="text-foreground font-bold tracking-widest block text-sm">4つの特徴</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {[
                { title: "丁寧なカウンセリング", desc: "患者様が納得されるまで、しっかりとお話を伺い、わかりやすく説明いたします。" },
                { title: "痛みに配慮した治療", desc: "表面麻酔や極細の針を使用し、できる限り痛みを感じさせない治療を心がけています。" },
                { title: "徹底した衛生管理", desc: "最新の滅菌機器を導入し、院内感染予防に努めています。安心して通院いただけます。" },
                { title: "通いやすい環境", desc: "駐車場完備、土曜日も診療しております。お仕事や学校帰りにも通いやすい環境です。" },
              ].map((feature, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-[32px] overflow-hidden shadow-sm h-full flex flex-col group hover:shadow-md transition-shadow">
                    <div className="relative aspect-[4/3] sm:aspect-[16/9] w-full">
                      <Placeholder text={`特徴 ${i+1} イメージ`} className="w-full h-full border-none rounded-t-[32px]" />
                      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white text-primary font-bold font-display px-8 py-2 rounded-full shadow-md border-2 border-primary">
                        POINT 0{i+1}
                      </div>
                    </div>
                    <div className="p-10 pt-14 text-center flex flex-col flex-1">
                      <h3 className="font-bold text-xl mb-4 text-foreground">{feature.title}</h3>
                      <p className="text-foreground/70 leading-relaxed text-sm">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CHECK UP SECTION */}
        <section className="py-24 bg-[#EAF5FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <FadeIn className="w-full lg:w-1/2 space-y-6">
                <span className="text-primary font-bold tracking-widest text-xs border border-primary/30 bg-white px-4 py-1.5 rounded-full inline-block">CHECK UP</span>
                <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight text-foreground">
                  定期健診・メンテナンス
                </h2>
                <h3 className="text-xl font-bold text-accent">
                  予防こそが、最高の治療です
                </h3>
                <p className="text-foreground/80 leading-relaxed pt-2">
                  虫歯や歯周病は、自覚症状が出る前に進行していることが多くあります。痛くなってから通院するのではなく、痛くなる前に予防することが生涯ご自身の歯を健康に保つための秘訣です。当院ではプロフェッショナルケアを通じて、皆様のお口の健康をサポートいたします。
                </p>
              </FadeIn>
              <FadeIn className="w-full lg:w-1/2" delay={0.2}>
                <div className="aspect-[4/3] rounded-[32px] overflow-hidden shadow-xl bg-white p-2">
                  <Placeholder text="定期検診イメージ" className="w-full h-full rounded-[24px] border-none" />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* NEWS SECTION */}
        <section id="news" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16">
              <FadeIn className="w-full lg:w-1/3">
                <div className="space-y-4">
                  <span className="text-primary font-bold tracking-widest text-xs">NEWS & TOPICS</span>
                  <h2 className="font-display text-4xl font-bold text-foreground">
                    お知らせ
                  </h2>
                  <div className="pt-6">
                    <a href="#" className="inline-flex items-center gap-2 bg-white border border-accent text-accent font-bold px-8 py-3.5 rounded-full hover:bg-accent hover:text-white transition-colors shadow-sm group">
                      もっと見る
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn className="w-full lg:w-2/3" delay={0.2}>
                <ul className="border-t border-border">
                  {[
                    { date: "2024.04.01", text: "ホームページをリニューアルしました。" },
                    { date: "2024.03.15", text: "ゴールデンウィークの診療について" },
                    { date: "2024.03.01", text: "新しいホワイトニングシステムを導入しました。" },
                  ].map((news, i) => (
                    <li key={i} className="group border-b border-border">
                      <a href="#" className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-8 px-2 hover:bg-primary/5 transition-colors">
                        <span className="text-primary font-mono text-sm font-bold shrink-0 w-28">{news.date}</span>
                        <span className="text-foreground group-hover:text-primary transition-colors flex-1 font-medium">{news.text}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CONTACT & ACCESS SECTION */}
        <section id="contact" className="py-24 bg-white border-t border-border/50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-primary mb-3">CONTACT</h2>
              <span className="text-foreground font-bold tracking-widest block text-sm">ご予約・アクセス</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
              {/* Left Column: Contact info & Timetable */}
              <FadeIn className="w-full lg:w-1/2 flex flex-col gap-8">
                
                <div className="bg-[#EAF5FA] rounded-[32px] p-8 md:p-12 text-center space-y-8">
                  <div>
                    <p className="font-bold text-foreground mb-4">お電話でのご予約・お問い合わせ</p>
                    <div className="flex items-center justify-center gap-3 text-primary">
                      <Phone className="w-8 h-8" />
                      <span className="text-4xl md:text-5xl font-display font-bold tracking-wider">近日公開</span>
                    </div>
                  </div>
                  
                  <div className="pt-8 border-t border-white">
                    <p className="font-bold text-foreground mb-6">24時間受付中</p>
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-accent text-white text-lg font-bold px-10 py-5 rounded-full hover:bg-accent/90 transition-colors shadow-lg group"
                    >
                      <CalendarDays className="w-6 h-6" />
                      WEB予約はこちら
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-[32px] shadow-sm border border-border p-8 md:p-10">
                  <table className="w-full text-center text-sm border-collapse">
                    <thead>
                      <tr>
                        <th className="font-normal text-foreground/70 pb-4 border-b border-border text-left w-20">診療時間</th>
                        <th className="font-bold pb-4 border-b border-border">月</th>
                        <th className="font-bold pb-4 border-b border-border">火</th>
                        <th className="font-bold pb-4 border-b border-border">水</th>
                        <th className="font-bold pb-4 border-b border-border">木</th>
                        <th className="font-bold pb-4 border-b border-border">金</th>
                        <th className="font-bold text-primary pb-4 border-b border-border">土</th>
                        <th className="font-bold text-accent pb-4 border-b border-border">日</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground">
                      <tr>
                        <td className="py-5 border-b border-border/50 text-left text-xs text-foreground/70">9:00<br/>|<br/>13:00</td>
                        <td className="py-5 border-b border-border/50 font-bold text-lg text-primary">●</td>
                        <td className="py-5 border-b border-border/50 font-bold text-lg text-primary">●</td>
                        <td className="py-5 border-b border-border/50 font-bold text-lg text-primary">●</td>
                        <td className="py-5 border-b border-border/50 font-bold text-lg text-primary">●</td>
                        <td className="py-5 border-b border-border/50 font-bold text-lg text-primary">●</td>
                        <td className="py-5 border-b border-border/50 font-bold text-lg text-primary">△</td>
                        <td className="py-5 border-b border-border/50 font-bold text-foreground/30">–</td>
                      </tr>
                      <tr>
                        <td className="py-5 text-left text-xs text-foreground/70">14:00<br/>|<br/>18:00</td>
                        <td className="py-5 font-bold text-lg text-primary">●</td>
                        <td className="py-5 font-bold text-lg text-primary">●</td>
                        <td className="py-5 font-bold text-lg text-primary">●</td>
                        <td className="py-5 font-bold text-foreground/30">–</td>
                        <td className="py-5 font-bold text-lg text-primary">●</td>
                        <td className="py-5 font-bold text-foreground/30">–</td>
                        <td className="py-5 font-bold text-foreground/30">–</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-foreground/60 mt-6 leading-relaxed font-medium">
                    △ = 土曜午前のみ<br />
                    ※休診日：木曜午後・土曜午後・日曜・祝日
                  </p>
                </div>
              </FadeIn>

              {/* Right Column: Access & Map */}
              <FadeIn className="w-full lg:w-1/2 flex flex-col gap-6" delay={0.2}>
                <div className="aspect-[4/3] lg:aspect-auto lg:h-[400px] rounded-[32px] overflow-hidden bg-gray-100 relative">
                  <Placeholder text="外観写真" className="w-full h-full border-none" />
                </div>
                <div className="bg-white p-8 rounded-[32px] border border-border">
                  <h3 className="font-bold text-xl mb-6 flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-primary rounded-full block"></span>
                    今泉歯科医院
                  </h3>
                  <p className="text-foreground/80 text-sm leading-loose mb-6 font-medium">
                    〒376-0000<br />
                    群馬県桐生市<br />
                    （詳細な住所は近日公開いたします）
                  </p>
                  <div className="flex gap-2">
                    <span className="bg-[#EAF5FA] text-primary text-xs font-bold px-4 py-2 rounded-full">駐車場完備</span>
                    <span className="bg-[#EAF5FA] text-primary text-xs font-bold px-4 py-2 rounded-full">桐生駅より〇分</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
