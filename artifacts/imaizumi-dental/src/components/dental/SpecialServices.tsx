import { Link } from "wouter"
import { ArrowRight, Sparkles } from "lucide-react"

export function SpecialServices() {
  return (
    <section className="py-16 bg-[#fff7ed]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Left: Headline */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-[#f5a623] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-5">
              <Sparkles className="h-3.5 w-3.5" />
              NOW HIRING
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d5f7a] mb-3 leading-tight">
              一緒に<span className="text-[#f5a623]">働きませんか</span>？
            </h2>
            <p className="text-[#6b7280] mb-6 leading-relaxed">
              桐生市の歯科医院で<br className="hidden md:block" />
              やりがいのある仕事をはじめよう。<br className="hidden md:block" />
              未経験・ブランクOK！
            </p>
            <Link
              href="/recruit"
              className="inline-flex items-center gap-2 bg-[#f5a623] text-white font-bold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              採用情報を見る
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right: Role Cards */}
          <div className="flex-1 w-full space-y-4">

            {/* 歯科助手カード */}
            <div className="relative bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden h-28">
              {/* 背景イラスト（右側） */}
              <img
                src={`${import.meta.env.BASE_URL}recruit-assistant.jpeg`}
                alt=""
                aria-hidden="true"
                className="absolute right-0 top-0 h-full w-1/2 object-cover object-left"
              />
              {/* グラデーションオーバーレイ */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
              {/* テキスト */}
              <div className="relative z-10 flex flex-col justify-center h-full px-5">
                <p className="text-xs text-[#f5a623] font-semibold mb-1">バイト・パート</p>
                <p className="text-[#3d5f7a] text-xl font-bold">歯科助手</p>
                <p className="text-[#6b7280] text-sm">時給 ¥1,050〜 ／ 高校生から応募OK</p>
              </div>
            </div>

            {/* 歯科衛生士カード */}
            <div className="relative bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden h-28">
              {/* 背景イラスト（右側） */}
              <img
                src={`${import.meta.env.BASE_URL}recruit-hygienist.jpeg`}
                alt=""
                aria-hidden="true"
                className="absolute right-0 top-0 h-full w-1/2 object-cover object-left"
              />
              {/* グラデーションオーバーレイ */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
              {/* テキスト */}
              <div className="relative z-10 flex flex-col justify-center h-full px-5">
                <p className="text-xs text-[#f5a623] font-semibold mb-1">バイト・パート・正社員</p>
                <p className="text-[#3d5f7a] text-xl font-bold">歯科衛生士</p>
                <p className="text-[#6b7280] text-sm">時給 ¥1,300〜 ／ 新卒・未経験OK</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
