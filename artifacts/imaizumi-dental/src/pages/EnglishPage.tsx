import { useEffect } from "react"
import { Link } from "wouter"
import { Phone, Car, Train, Clock, MapPin, Globe, GraduationCap } from "lucide-react"

const SITE_URL = "https://imaizumi-dentist-office.com"
const BASE = import.meta.env.BASE_URL

// 英語ページ専用のメタ設定（useSEOは院名を後置するため、ここで直接設定する）
function useEnglishSEO() {
  useEffect(() => {
    const title = "English-Speaking Dentist in Kiryu | Imaizumi Dental Clinic"
    const description =
      "Imaizumi Dental Clinic in Kiryu, Gunma. Our director speaks English and is available during all clinic hours. General, pediatric, preventive and cosmetic dentistry. Saturday hours, free parking. Insurance and self-pay welcome."
    const prevTitle = document.title
    const prevLang = document.documentElement.lang
    document.title = title
    document.documentElement.lang = "en"

    const setMeta = (sel: string, attr: string, val: string) => {
      const el = document.querySelector(sel)
      const prev = el?.getAttribute(attr) ?? null
      el?.setAttribute(attr, val)
      return () => {
        if (el && prev !== null) el.setAttribute(attr, prev)
      }
    }
    const restores = [
      setMeta('meta[name="description"]', "content", description),
      setMeta('meta[property="og:title"]', "content", title),
      setMeta('meta[property="og:description"]', "content", description),
      setMeta('meta[property="og:url"]', "content", `${SITE_URL}/en`),
      setMeta('link[rel="canonical"]', "href", `${SITE_URL}/en`),
    ]
    return () => {
      document.title = prevTitle
      document.documentElement.lang = prevLang
      restores.forEach((r) => r())
    }
  }, [])
}

const schedule = [
  { time: "9:30 – 12:30", days: [true, true, true, "visit", true, true, false] },
  { time: "15:00 – 19:00", days: [true, true, true, true, true, "▲", false] },
]
const dayHeads = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const faqs = [
  {
    q: "Do I need an appointment?",
    a: "Appointments are recommended so we can see you smoothly. You can call us, or use our online booking (currently in Japanese). If you have a dental emergency, please call us.",
  },
  {
    q: "I don't have Japanese health insurance. Can I still come?",
    a: "Yes, of course. In that case treatment is provided on a self-pay basis. Please feel free to ask for an estimate before we begin.",
  },
  {
    q: "What languages do you speak?",
    a: "Our director, Dr. Imaizumi, speaks English. Reception and other staff mainly speak Japanese, so for detailed questions it helps to speak directly with Dr. Imaizumi during your visit.",
  },
  {
    q: "What should I bring?",
    a: "Your health insurance card (if you have Japanese health insurance), and — if you take any medication — the medicine itself or your medication notebook (おくすり手帳).",
  },
  {
    q: "Is there parking?",
    a: "Yes. We have free parking for 10 cars, and we are a 2-minute walk from the Showabashi bus stop.",
  },
]

export default function EnglishPage() {
  useEnglishSEO()

  return (
    <div className="min-h-screen font-sans bg-white text-[#4a4a4a]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="leading-tight">
            <p className="font-bold text-[#3d5f7a]">Imaizumi Dental Clinic</p>
            <p className="text-[10px] text-[#7eb4d2]">Kiryu, Gunma</p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-[#7eb4d2] hover:underline"
          >
            <Globe className="h-4 w-4" /> 日本語
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#e8f4f9] to-white py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#3d5f7a] mb-3">
            English-Speaking Dentist in Kiryu
          </h1>
          <p className="text-[#7eb4d2] text-lg font-medium mb-6">
            Imaizumi Dental Clinic — friendly, family-oriented care
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: Globe, text: "English OK" },
              { icon: Train, text: "2 min from Showabashi bus stop" },
              { icon: Car, text: "Free parking (10 cars)" },
            ].map((b, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 bg-white rounded-full px-4 py-2 text-sm shadow-sm border border-[#c8e2ee]"
              >
                <b.icon className="h-4 w-4 text-[#7eb4d2]" /> {b.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* English support */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-2xl border border-[#c8e2ee] bg-[#f8fbfd] p-6 md:p-8">
            <div className="flex items-center gap-2 text-[#7eb4d2] mb-3">
              <Globe className="h-5 w-5" />
              <h2 className="text-xl font-bold text-[#3d5f7a]">English Support</h2>
            </div>
            <p className="leading-relaxed mb-3">
              Our director, <strong>Dr. Atsushi Imaizumi</strong>, can communicate in
              English and is present during all clinic hours, so you can talk about your
              treatment in English during your visit.
            </p>
            <p className="text-sm text-[#666] leading-relaxed">
              Please note that our reception and other staff mainly speak Japanese. If you
              have any concerns, feel free to let Dr. Imaizumi know in English at your
              appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the dentist */}
      <section className="py-14 bg-[#f8fbfd]">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-xl font-bold text-[#3d5f7a] mb-6">Meet the Dentist</h2>
          <div className="grid md:grid-cols-[200px_1fr] gap-6 items-start">
            <img
              src={`${BASE}doctor.jpeg`}
              alt="Dr. Atsushi Imaizumi"
              loading="lazy"
              className="w-full max-w-[200px] mx-auto rounded-2xl object-cover object-top aspect-[3/4]"
            />
            <div>
              <p className="text-xl font-bold text-[#3d5f7a]">Dr. Atsushi Imaizumi</p>
              <p className="text-sm text-[#888] mb-3">Director</p>
              <div className="flex items-start gap-2 mb-4 text-sm">
                <GraduationCap className="h-4 w-4 text-[#7eb4d2] shrink-0 mt-0.5" />
                <span>Graduate of Nihon University School of Dentistry at Matsudo</span>
              </div>
              <div className="border-l-4 border-[#7eb4d2] pl-4 space-y-3 text-sm leading-relaxed">
                <p>
                  I grew up here in Kiryu, and I feel it is my mission to help protect the
                  oral health of people in our community.
                </p>
                <p>
                  Many people think of dental treatment as “scary” or “painful,” but at our
                  clinic we listen carefully to each patient and explain things in a way
                  that is easy to understand.
                </p>
                <p>
                  From children to seniors, I hope to be your family dentist for many years
                  to come. Please feel free to talk to me about anything — in English or
                  Japanese.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-2 text-[#7eb4d2] mb-4">
            <Clock className="h-5 w-5" />
            <h2 className="text-xl font-bold text-[#3d5f7a]">Clinic Hours</h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="py-3 px-3 text-left"></th>
                  {dayHeads.map((d) => (
                    <th key={d} className="py-3 px-2 text-center font-medium">{d}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 last:border-0">
                    <td className="py-3 px-3 whitespace-nowrap text-xs">{row.time}</td>
                    {row.days.map((d, j) => (
                      <td key={j} className="py-3 px-2 text-center">
                        {d === "visit" ? (
                          <span className="text-[10px] text-[#999]">home visit</span>
                        ) : d === "▲" ? (
                          <span className="text-[#f5a623]">▲</span>
                        ) : d ? (
                          <span className="text-[#7eb4d2]">●</span>
                        ) : (
                          "−"
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 text-xs text-[#666] space-y-1">
            <p>▲ Saturday afternoon: 14:00 – 16:00</p>
            <p>Thursday morning: home visits only (no in-clinic hours)</p>
            <p>Closed on Sundays. Hours may change; please call ahead to confirm.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-[#f8fbfd]">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-xl font-bold text-[#3d5f7a] mb-5">Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "General Dentistry",
              "Pediatric Dentistry",
              "Preventive Care",
              "Dentures",
              "Cosmetic Dentistry",
              "Oral Surgery",
              "Teeth Whitening",
              "Home-Visit Dentistry",
            ].map((s) => (
              <div
                key={s}
                className="rounded-lg border border-[#c8e2ee] bg-white px-3 py-3 text-sm text-center text-[#3d5f7a]"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & payment */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-xl font-bold text-[#3d5f7a] mb-4">Insurance &amp; Costs</h2>
          <ul className="space-y-3 text-sm leading-relaxed">
            <li>
              • <strong>With Japanese public health insurance:</strong> Please bring your
              insurance card. Most general treatments are covered, and you pay the standard
              co-payment (usually 30%).
            </li>
            <li>
              • <strong>Without Japanese health insurance:</strong> Treatment is provided on
              a self-pay basis. Please feel free to ask for an estimate before we begin.
            </li>
            <li>
              • Some treatments (such as whitening and cosmetic dentistry) are self-pay
              regardless of insurance.
            </li>
          </ul>
          <p className="text-xs text-[#888] mt-3">
            If you have any questions about costs, please ask us — we are happy to explain.
          </p>
        </div>
      </section>

      {/* First visit */}
      <section className="py-14 bg-[#f8fbfd]">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-xl font-bold text-[#3d5f7a] mb-4">Your First Visit</h2>
          <ol className="space-y-3 text-sm leading-relaxed list-none">
            {[
              "Book by phone or online (or visit us — appointments are recommended).",
              "At reception, please show your health insurance card if you have one.",
              "We check your concern, examine your mouth (X-ray if needed), and explain the plan.",
              "We begin treatment, keeping you comfortable and informed at each step.",
            ].map((t, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-[#7eb4d2] text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-xl font-bold text-[#3d5f7a] mb-5">
            FAQ for International Patients
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-xl border border-gray-200 p-5">
                <p className="font-bold text-[#3d5f7a] mb-1">Q. {f.q}</p>
                <p className="text-sm text-[#555] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access */}
      <section className="py-14 bg-[#f8fbfd]">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-2 text-[#7eb4d2] mb-4">
            <MapPin className="h-5 w-5" />
            <h2 className="text-xl font-bold text-[#3d5f7a]">Access</h2>
          </div>
          <img
            src={`${BASE}clinic-exterior.jpeg`}
            alt="Imaizumi Dental Clinic exterior"
            loading="lazy"
            className="w-full rounded-xl mb-4 object-cover aspect-[16/9]"
          />
          <p className="text-sm leading-relaxed mb-1">
            291-5 Manoshima, Hirosawacho, Kiryu, Gunma 376-0014
          </p>
          <p className="text-sm text-[#666] mb-4">
            2-minute walk from “Showabashi” bus stop · Free parking for 10 cars
          </p>
          <div className="w-full h-72 rounded-xl overflow-hidden border border-gray-200">
            <iframe
              src="https://maps.google.com/maps?q=今泉歯科医院+群馬県桐生市広沢町間ノ島291-5&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Imaizumi Dental Clinic map"
            />
          </div>
        </div>
      </section>

      {/* Contact / Booking */}
      <section className="py-16 bg-[#3d5f7a] text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-3">Appointments &amp; Contact</h2>
          <p className="text-white/80 mb-6 text-sm">
            To make an appointment, please call us or use our online booking. Dr. Imaizumi
            will speak with you in English at your visit.
          </p>
          <a
            href="tel:0277549893"
            className="inline-flex items-center gap-2 bg-white text-[#3d5f7a] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors mb-3"
          >
            <Phone className="h-5 w-5" /> 0277-54-9893
          </a>
          <p className="text-white/70 text-xs">
            (Online booking is currently available in Japanese only.)
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2c3e50] text-white/80 py-8">
        <div className="container mx-auto px-4 max-w-3xl text-sm space-y-1">
          <p className="font-bold text-white">Imaizumi Dental Clinic</p>
          <p>291-5 Manoshima, Hirosawacho, Kiryu, Gunma 376-0014</p>
          <p>Tel: 0277-54-9893</p>
          <Link href="/" className="inline-flex items-center gap-1 text-[#7eb4d2] hover:underline mt-2">
            <Globe className="h-4 w-4" /> 日本語サイトへ
          </Link>
        </div>
      </footer>
    </div>
  )
}
