import { MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-16 border-t-[6px] border-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary flex items-center justify-center text-white">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                <span className="text-[10px] text-primary font-bold tracking-widest uppercase">
                  IMAIZUMI DENTAL CLINIC
                </span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-sm">
              群馬県桐生市にて、地域の皆様の生涯の歯の健康をサポートいたします。お口のことでお悩みがあれば、お気軽にご相談ください。
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-white/90">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-bold">群馬県桐生市<br/><span className="text-xs font-normal opacity-80 mt-1 block">（詳細住所は近日公開）</span></span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-lg font-bold tracking-wider">近日公開</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-6 border-b-2 border-primary pb-2 inline-block">診療時間</h3>
            <div className="bg-white/5 border border-white/10 p-5">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-white/70">
                    <th className="pb-2 font-normal">診療時間</th>
                    <th className="pb-2 font-normal text-center">月</th>
                    <th className="pb-2 font-normal text-center">火</th>
                    <th className="pb-2 font-normal text-center">水</th>
                    <th className="pb-2 font-normal text-center">木</th>
                    <th className="pb-2 font-normal text-center">金</th>
                    <th className="pb-2 font-normal text-center text-primary">土</th>
                    <th className="pb-2 font-normal text-center text-accent">日</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  <tr className="border-b border-white/10">
                    <td className="py-2 text-white/70 text-xs">9:00 - 13:00</td>
                    <td className="py-2 text-center">〇</td>
                    <td className="py-2 text-center">〇</td>
                    <td className="py-2 text-center">〇</td>
                    <td className="py-2 text-center">〇</td>
                    <td className="py-2 text-center">〇</td>
                    <td className="py-2 text-center text-primary">〇</td>
                    <td className="py-2 text-center text-accent">休</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-white/70 text-xs">14:00 - 18:00</td>
                    <td className="py-2 text-center">〇</td>
                    <td className="py-2 text-center">〇</td>
                    <td className="py-2 text-center">〇</td>
                    <td className="py-2 text-center text-white/40">休</td>
                    <td className="py-2 text-center">〇</td>
                    <td className="py-2 text-center text-white/40">休</td>
                    <td className="py-2 text-center text-accent">休</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-white/60 mt-4 leading-relaxed">※休診日：木曜午後・土曜午後・日曜・祝日</p>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-6 border-b-2 border-primary pb-2 inline-block">リンク</h3>
            <ul className="flex flex-col gap-3">
              {["お知らせ", "ごあいさつ", "当院の特徴", "診療内容", "料金表", "アクセス"].map((item) => (
                <li key={item}>
                  <a href={`#${item === "お知らせ" ? "news" : item === "ごあいさつ" ? "concept" : item === "当院の特徴" ? "features" : item === "診療内容" ? "treatments" : item === "料金表" ? "pricing" : "access"}`} className="text-white/80 hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/50 text-sm font-mono tracking-wider">
            &copy; {new Date().getFullYear()} Imaizumi Dental Clinic. All Rights Reserved.
          </p>
          <a
            href="https://functional-prototype.replit.app/book/imaizumi-dental"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors text-sm font-bold"
          >
            WEB予約はこちら
          </a>
        </div>
      </div>
    </footer>
  );
}
