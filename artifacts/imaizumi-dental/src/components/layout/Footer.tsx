import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-16 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22C10.5 22 9 20 9 18C9 16 12 14 12 14C12 14 15 16 15 18C15 20 13.5 22 12 22Z" />
                  <path d="M12 2V8" />
                  <path d="M5.5 5.5L8.5 8.5" />
                  <path d="M18.5 5.5L15.5 8.5" />
                  <path d="M3 12H8" />
                  <path d="M16 12H21" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl leading-tight tracking-wide">
                  今泉歯科医院
                </span>
                <span className="text-[10px] text-primary font-medium tracking-widest">
                  IMAIZUMI DENTAL CLINIC
                </span>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed mb-6 max-w-sm">
              群馬県桐生市にて、地域の皆様の生涯の歯の健康をサポートいたします。お口のことでお悩みがあれば、お気軽にご相談ください。
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>群馬県桐生市<br/><span className="text-sm opacity-70">（詳細住所は近日公開）</span></span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>近日公開</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block">診療時間</h3>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="flex items-center gap-2 text-primary font-medium mb-3">
                <Clock className="w-4 h-4" />
                <span>診療スケジュール</span>
              </div>
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-white/60">
                    <th className="pb-2 font-normal">診療時間</th>
                    <th className="pb-2 font-normal text-center">月</th>
                    <th className="pb-2 font-normal text-center">火</th>
                    <th className="pb-2 font-normal text-center">水</th>
                    <th className="pb-2 font-normal text-center">木</th>
                    <th className="pb-2 font-normal text-center">金</th>
                    <th className="pb-2 font-normal text-center text-primary">土</th>
                    <th className="pb-2 font-normal text-center text-accent">日祝</th>
                  </tr>
                </thead>
                <tbody className="text-white/90">
                  <tr className="border-b border-white/5">
                    <td className="py-2 text-white/60 text-xs">9:00 - 13:00</td>
                    <td className="py-2 text-center">〇</td>
                    <td className="py-2 text-center">〇</td>
                    <td className="py-2 text-center">〇</td>
                    <td className="py-2 text-center">〇</td>
                    <td className="py-2 text-center">〇</td>
                    <td className="py-2 text-center text-primary">〇</td>
                    <td className="py-2 text-center text-accent">休</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-white/60 text-xs">14:00 - 18:00</td>
                    <td className="py-2 text-center">〇</td>
                    <td className="py-2 text-center">〇</td>
                    <td className="py-2 text-center">〇</td>
                    <td className="py-2 text-center">休</td>
                    <td className="py-2 text-center">〇</td>
                    <td className="py-2 text-center text-primary">休</td>
                    <td className="py-2 text-center text-accent">休</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-white/50 mt-3">※休診日：木曜午後・土曜午後・日曜・祝日</p>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block">リンク</h3>
            <ul className="flex flex-col gap-3">
              {["お知らせ", "当院の特徴", "診療内容", "料金表", "スタッフ", "アクセス"].map((item) => (
                <li key={item}>
                  <a href={`#${item === "お知らせ" ? "news" : item === "当院の特徴" ? "features" : item === "診療内容" ? "treatments" : item === "料金表" ? "pricing" : item === "スタッフ" ? "staff" : "access"}`} className="text-white/70 hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Imaizumi Dental Clinic. All Rights Reserved.
          </p>
          <a
            href="https://functional-prototype.replit.app/book/imaizumi-dental"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-white transition-colors text-sm font-medium"
          >
            WEB予約はこちら
          </a>
        </div>
      </div>
    </footer>
  );
}
