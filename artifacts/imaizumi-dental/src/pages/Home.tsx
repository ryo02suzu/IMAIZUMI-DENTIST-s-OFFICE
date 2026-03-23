import { motion } from "framer-motion";
import { 
  CalendarDays, 
  ChevronRight, 
  HeartHandshake, 
  MessageCircleHeart, 
  ShieldPlus, 
  Users,
  Stethoscope,
  Sparkles,
  Smile,
  ShieldCheck,
  MapPin,
  Clock
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Placeholder } from "@/components/ui/placeholder";

const BOOKING_URL = "https://functional-prototype.replit.app/book/imaizumi-dental";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="text-center mb-16">
    <motion.span 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="text-primary font-bold tracking-widest text-sm uppercase mb-3 block"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-display text-3xl md:text-4xl font-bold text-foreground"
    >
      {title}
    </motion.h2>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 60 }}
      viewport={{ once: true }}
      className="h-1 bg-primary mx-auto mt-6 rounded-full"
    />
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-mesh">
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 text-center lg:text-left"
              >
                <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 border border-primary/20">
                  群馬県桐生市の歯科医院
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 text-foreground">
                  あなたの笑顔を、<br />
                  <span className="text-primary">一生のお付き合い</span>で<br className="hidden md:block"/>守ります
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0">
                  地域に根ざした丁寧な歯科診療。痛みに配慮し、お子様からご高齢の方まで安心して通えるクリニックを目指しています。
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-accent text-accent-foreground font-bold text-lg shadow-xl shadow-accent/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <CalendarDays className="w-6 h-6" />
                    24時間WEB予約
                  </a>
                  <a
                    href="#treatments"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-foreground font-bold text-lg shadow-md border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    診療内容を見る
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="flex-1 w-full max-w-lg lg:max-w-none"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50 aspect-[4/3] bg-white">
                   <Placeholder text="院内・診療風景の写真準備中" className="w-full h-full" />
                   
                   {/* Floating Badge */}
                   <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 hidden md:flex border border-border/50">
                     <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                       <ShieldCheck className="w-6 h-6" />
                     </div>
                     <div>
                       <p className="text-sm font-bold text-foreground">徹底した衛生管理</p>
                       <p className="text-xs text-muted-foreground">安心・安全な治療環境</p>
                     </div>
                   </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* NEWS SECTION */}
        <section id="news" className="py-16 bg-white border-b border-border/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="bg-secondary/30 rounded-2xl p-6 md:p-8 border border-secondary flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="shrink-0 w-24">
                <h3 className="font-display font-bold text-xl text-primary border-b-2 border-primary pb-2 inline-block">お知らせ</h3>
              </div>
              <ul className="flex-1 flex flex-col gap-4 w-full">
                {[
                  { date: "2024.04.01", text: "ホームページをリニューアルしました", isNew: true },
                  { date: "2024.03.15", text: "新しいホワイトニング設備を導入しました" },
                  { date: "2023.12.01", text: "年末年始の休診日について" },
                ].map((news, i) => (
                  <li key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 group cursor-pointer pb-4 border-b border-border/50 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3 shrink-0 text-sm">
                      <span className="text-muted-foreground font-mono">{news.date}</span>
                      {news.isNew && <span className="bg-accent text-white text-[10px] font-bold px-2 py-0.5 rounded-sm">NEW</span>}
                    </div>
                    <span className="text-foreground group-hover:text-primary transition-colors flex-1">{news.text}</span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all hidden sm:block" />
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features" className="py-24 bg-mesh relative">
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionTitle title="当院の4つの特徴" subtitle="Features" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: HeartHandshake, title: "痛みの少ない治療", desc: "表面麻酔や極細の針を使用し、できる限り痛みを感じさせない治療を心がけています。" },
                { icon: MessageCircleHeart, title: "丁寧なカウンセリング", desc: "治療前にしっかりとお話を伺い、患者様が納得された上で治療をスタートします。" },
                { icon: ShieldPlus, title: "最新の設備と衛生管理", desc: "精密な診断と安全な治療のために、最新の医療機器を導入し、衛生管理を徹底しています。" },
                { icon: Users, title: "ご家族で通える", desc: "キッズスペース完備。小さなお子様からご高齢の方まで、皆様のお口の健康をお守りします。" },
              ].map((feature, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white p-8 rounded-3xl shadow-lg shadow-primary/5 border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-display font-bold text-xl mb-4 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* TREATMENTS SECTION */}
        <section id="treatments" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="診療内容" subtitle="Treatments" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                { icon: Stethoscope, title: "一般歯科", desc: "虫歯や歯周病の治療。できるだけ削らない・抜かない治療を基本としています。" },
                { icon: ShieldCheck, title: "予防歯科", desc: "定期検診やクリーニング（PMTC）で、虫歯や歯周病を未然に防ぎます。" },
                { icon: Smile, title: "小児歯科", desc: "歯医者さんが苦手にならないよう、優しくペースに合わせた治療を行います。" },
                { icon: Sparkles, title: "矯正歯科", desc: "見た目の美しさだけでなく、噛み合わせの機能も重視した矯正治療。" },
                { icon: ShieldPlus, title: "インプラント", desc: "失った歯の機能を回復。自分の歯のようにしっかり噛める喜びを取り戻します。" },
                { icon: Sparkles, title: "審美・ホワイトニング", desc: "白く美しい歯へ。セラミック治療や各種ホワイトニングメニューをご用意。" },
              ].map((treatment, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="group flex flex-col items-center text-center p-8 rounded-3xl bg-secondary/20 hover:bg-white border border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                    <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                      <treatment.icon className="w-10 h-10" />
                    </div>
                    <h3 className="font-display font-bold text-xl mb-3">{treatment.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {treatment.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="py-24 bg-secondary/30 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionTitle title="自費診療 料金表" subtitle="Pricing" />
            
            <FadeIn>
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-border/50">
                <div className="p-6 md:p-8 bg-primary/5 border-b border-border/50">
                  <p className="text-center text-muted-foreground text-sm">
                    ※ 料金はすべて税込の目安です。患者様のお口の状態により変動する場合がございます。<br/>
                    桐生市周辺の適正価格に合わせ、安心して受けていただける料金設定としています。
                  </p>
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="space-y-8">
                    
                    {/* Category */}
                    <div>
                      <h4 className="font-bold text-lg text-primary flex items-center gap-2 mb-4 border-l-4 border-primary pl-3">
                        <Sparkles className="w-5 h-5" /> ホワイトニング
                      </h4>
                      <ul className="divide-y divide-border/50 border-t border-border/50">
                        <li className="py-4 flex justify-between items-center gap-4">
                          <span className="font-medium">ホームホワイトニング</span>
                          <span className="font-bold font-mono text-lg text-foreground shrink-0">20,000円〜</span>
                        </li>
                        <li className="py-4 flex justify-between items-center gap-4">
                          <span className="font-medium">オフィスホワイトニング</span>
                          <span className="font-bold font-mono text-lg text-foreground shrink-0">30,000円〜</span>
                        </li>
                      </ul>
                    </div>

                    {/* Category */}
                    <div>
                      <h4 className="font-bold text-lg text-primary flex items-center gap-2 mb-4 border-l-4 border-primary pl-3">
                        <ShieldCheck className="w-5 h-5" /> 審美歯科（被せ物）
                      </h4>
                      <ul className="divide-y divide-border/50 border-t border-border/50">
                        <li className="py-4 flex justify-between items-center gap-4">
                          <span className="font-medium">セラミッククラウン（全セラミック）</span>
                          <span className="font-bold font-mono text-lg text-foreground shrink-0">75,000円〜</span>
                        </li>
                        <li className="py-4 flex justify-between items-center gap-4">
                          <span className="font-medium">セラミッククラウン（ジルコニア）</span>
                          <span className="font-bold font-mono text-lg text-foreground shrink-0">80,000円〜</span>
                        </li>
                      </ul>
                    </div>

                    {/* Category */}
                    <div>
                      <h4 className="font-bold text-lg text-primary flex items-center gap-2 mb-4 border-l-4 border-primary pl-3">
                        <ShieldPlus className="w-5 h-5" /> インプラント・矯正
                      </h4>
                      <ul className="divide-y divide-border/50 border-t border-border/50">
                        <li className="py-4 flex justify-between items-center gap-4">
                          <span className="font-medium">インプラント（1本）</span>
                          <span className="font-bold font-mono text-lg text-foreground shrink-0">300,000円〜</span>
                        </li>
                        <li className="py-4 flex justify-between items-center gap-4">
                          <span className="font-medium">矯正（ワイヤー矯正・全顎）</span>
                          <span className="font-bold font-mono text-lg text-foreground shrink-0">680,000円〜</span>
                        </li>
                        <li className="py-4 flex justify-between items-center gap-4">
                          <span className="font-medium">矯正（マウスピース矯正）</span>
                          <span className="font-bold font-mono text-lg text-foreground shrink-0">780,000円〜</span>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* STAFF SECTION */}
        <section id="staff" className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="院長・スタッフ紹介" subtitle="Doctor & Staff" />
            
            <FadeIn>
              <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-center md:items-start bg-mesh p-8 md:p-12 rounded-3xl">
                <div className="w-64 shrink-0 rounded-2xl overflow-hidden shadow-xl bg-white border border-white">
                   <Placeholder className="w-full aspect-[3/4]" text="院長写真 準備中" />
                </div>
                <div className="flex-1">
                  <span className="text-primary font-bold tracking-widest text-sm mb-2 block">院長</span>
                  <h3 className="font-display text-3xl font-bold mb-6 text-foreground">今泉 ○○ <span className="text-lg font-normal text-muted-foreground ml-2">先生</span></h3>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      皆様、はじめまして。今泉歯科医院 院長の今泉です。
                    </p>
                    <p>
                      私たちは群馬県桐生市にて、地域の皆様のお口の健康を守るパートナーとして、日々の診療にあたっています。「歯医者さんは怖い」というイメージを払拭し、気軽に相談できる温かいクリニックを目指しています。
                    </p>
                    <p>
                      患者様一人ひとりのライフスタイルやご希望に合わせた、最適な治療プランをご提案いたします。生涯自分の歯で美味しく食事ができるよう、一緒にサポートさせてください。
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-border/50">
                    <h4 className="font-bold mb-3 text-foreground">略歴</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex gap-4"><span className="w-20 shrink-0 font-mono">20XX年</span>〇〇大学 歯学部 卒業</li>
                      <li className="flex gap-4"><span className="w-20 shrink-0 font-mono">20XX年</span>都内・県内歯科医院にて勤務</li>
                      <li className="flex gap-4"><span className="w-20 shrink-0 font-mono">20XX年</span>今泉歯科医院 開院</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ACCESS & CTA SECTION */}
        <section id="access" className="py-24 bg-white border-t border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              <FadeIn>
                <h2 className="font-display text-3xl font-bold mb-8">アクセス・診療時間</h2>
                
                <div className="space-y-8">
                  <div className="bg-secondary/30 rounded-2xl p-6 border border-secondary">
                    <div className="flex items-center gap-3 mb-4 text-primary font-bold">
                      <Clock className="w-6 h-6" />
                      診療スケジュール
                    </div>
                    <table className="w-full text-center border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                      <thead>
                        <tr className="bg-primary/5 border-b border-border/50">
                          <th className="py-3 px-2 font-medium text-sm">診療時間</th>
                          <th className="py-3 px-2 font-medium text-sm">月</th>
                          <th className="py-3 px-2 font-medium text-sm">火</th>
                          <th className="py-3 px-2 font-medium text-sm">水</th>
                          <th className="py-3 px-2 font-medium text-sm">木</th>
                          <th className="py-3 px-2 font-medium text-sm">金</th>
                          <th className="py-3 px-2 font-medium text-sm text-primary">土</th>
                          <th className="py-3 px-2 font-medium text-sm text-accent">日祝</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/50">
                        <tr>
                          <td className="py-4 text-sm font-mono text-muted-foreground">9:00<br/>|<br/>13:00</td>
                          <td className="py-4 font-bold text-lg text-foreground">〇</td>
                          <td className="py-4 font-bold text-lg text-foreground">〇</td>
                          <td className="py-4 font-bold text-lg text-foreground">〇</td>
                          <td className="py-4 font-bold text-lg text-foreground">〇</td>
                          <td className="py-4 font-bold text-lg text-foreground">〇</td>
                          <td className="py-4 font-bold text-lg text-primary">〇</td>
                          <td className="py-4 font-bold text-lg text-accent">休</td>
                        </tr>
                        <tr>
                          <td className="py-4 text-sm font-mono text-muted-foreground">14:00<br/>|<br/>18:00</td>
                          <td className="py-4 font-bold text-lg text-foreground">〇</td>
                          <td className="py-4 font-bold text-lg text-foreground">〇</td>
                          <td className="py-4 font-bold text-lg text-foreground">〇</td>
                          <td className="py-4 font-bold text-lg text-muted-foreground/30">休</td>
                          <td className="py-4 font-bold text-lg text-foreground">〇</td>
                          <td className="py-4 font-bold text-lg text-muted-foreground/30">休</td>
                          <td className="py-4 font-bold text-lg text-accent">休</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="text-sm text-muted-foreground mt-4 text-right">※休診日：木曜午後・土曜午後・日曜・祝日</p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">所在地</h4>
                        <p className="text-muted-foreground">群馬県桐生市<br/><span className="text-sm">※詳細な住所は近日公開いたします</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} className="h-full">
                <div className="h-full bg-mesh rounded-3xl p-8 lg:p-12 flex flex-col items-center justify-center text-center shadow-xl border border-white/50">
                  <h3 className="font-display text-2xl font-bold mb-4">初めての方も<br/>お気軽にご予約ください</h3>
                  <p className="text-muted-foreground mb-8">
                    スマートフォンから24時間いつでも予約が可能です。<br/>
                    痛みがある等、お急ぎの場合はお電話でご相談ください。
                  </p>
                  
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-sm flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-accent text-accent-foreground font-bold text-xl shadow-lg shadow-accent/25 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <CalendarDays className="w-6 h-6" />
                    WEBで予約する
                  </a>
                  
                  <div className="mt-8 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white w-full max-w-sm">
                    <p className="text-sm font-bold text-primary mb-1">お電話でのご予約・ご相談</p>
                    <p className="text-2xl font-display font-bold text-foreground">近日公開</p>
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
