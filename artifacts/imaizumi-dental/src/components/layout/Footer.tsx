import { MapPin, Phone, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/50 pt-16 pb-6 border-t-[4px] border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & Address */}
          <div>
            <div className="flex flex-col mb-6">
              <span className="font-display font-bold text-2xl text-primary mb-1">
                今泉歯科医院
              </span>
              <span className="text-xs text-foreground/60 tracking-widest uppercase font-bold">
                Imaizumi Dental Clinic
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-foreground/80 text-sm font-medium">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>
                  〒376-0000<br/>
                  群馬県桐生市<br/>
                  <span className="text-xs opacity-70 mt-1 block font-normal">※詳細住所は近日公開</span>
                </span>
              </div>
              <div className="flex items-center gap-3 text-foreground/80 font-mono">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-lg font-bold">近日公開</span>
              </div>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold text-primary mb-6 border-b border-primary/20 pb-2">メニュー</h4>
            <ul className="space-y-3">
              {[
                { name: "ホーム", href: "#" },
                { name: "当院について", href: "#about" },
                { name: "特徴", href: "#features" },
                { name: "お知らせ", href: "#news" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-primary/50" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold text-primary mb-6 border-b border-primary/20 pb-2">診療内容</h4>
            <ul className="space-y-3">
              {[
                "一般歯科", "小児歯科", "予防歯科", "矯正歯科",
                "インプラント", "審美歯科", "ホワイトニング", "口腔外科"
              ].map((treatment) => (
                <li key={treatment}>
                  <a href="#treatments" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-primary/50" />
                    {treatment}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Timetable */}
          <div>
            <h4 className="font-bold text-primary mb-6 border-b border-primary/20 pb-2">診療時間</h4>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-white">
              <table className="w-full text-center text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="font-normal text-foreground/70 pb-2 text-left">診療時間</th>
                    <th className="font-normal text-foreground/70 pb-2">月</th>
                    <th className="font-normal text-foreground/70 pb-2">火</th>
                    <th className="font-normal text-foreground/70 pb-2">水</th>
                    <th className="font-normal text-foreground/70 pb-2">木</th>
                    <th className="font-normal text-foreground/70 pb-2">金</th>
                    <th className="font-normal text-primary pb-2">土</th>
                    <th className="font-normal text-accent pb-2">日</th>
                  </tr>
                </thead>
                <tbody className="text-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-2 text-left text-xs text-foreground/70">9:00 - 13:00</td>
                    <td className="py-2 font-bold">●</td>
                    <td className="py-2 font-bold">●</td>
                    <td className="py-2 font-bold">●</td>
                    <td className="py-2 font-bold">●</td>
                    <td className="py-2 font-bold">●</td>
                    <td className="py-2 font-bold text-primary">△</td>
                    <td className="py-2 font-bold text-foreground/30">–</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-left text-xs text-foreground/70">14:00 - 18:00</td>
                    <td className="py-2 font-bold">●</td>
                    <td className="py-2 font-bold">●</td>
                    <td className="py-2 font-bold">●</td>
                    <td className="py-2 font-bold text-foreground/30">–</td>
                    <td className="py-2 font-bold">●</td>
                    <td className="py-2 font-bold text-foreground/30">–</td>
                    <td className="py-2 font-bold text-foreground/30">–</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-3 text-[10px] text-foreground/60 leading-relaxed font-medium">
                △ = 土曜午前のみ<br />
                ※休診日：木曜午後・土曜午後・日曜・祝日
              </div>
            </div>
          </div>

        </div>

        <div className="text-center pt-8 border-t border-primary/20">
          <p className="text-xs text-foreground/50 font-mono">
            &copy; {new Date().getFullYear()} Imaizumi Dental Clinic. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
