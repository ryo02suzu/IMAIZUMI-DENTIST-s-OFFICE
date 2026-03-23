export type NewsItem = {
  id: string
  date: string
  datetime: string
  category: string
  title: string
  excerpt: string
  body: string
}

export const newsItems: NewsItem[] = [
  {
    id: "saturday-hours-change",
    date: "2026.03.09",
    datetime: "2026-03-09",
    category: "診療案内",
    title: "土曜日の診療時間変更のお知らせ",
    excerpt: "2026年3月より、毎週土曜日の午後診療時間を14：00〜16：00に変更させていただきます。皆様にはご迷惑・ご不便をおかけしますがよろしくお願いいたします。",
    body: "2026年3月より、毎週土曜日の午後診療時間を14：00〜16：00に変更させていただきます。\n\n午前の診療時間（9：30〜12：30）は変わりません。\n\n皆様にはご迷惑・ご不便をおかけしますが、何卒よろしくお願いいたします。\n\nご不明な点はお電話（0277-54-9893）にてお気軽にお問い合わせください。",
  },
  {
    id: "temp-closure-march",
    date: "2026.03.04",
    datetime: "2026-03-04",
    category: "休診案内",
    title: "2026.3.4(水)臨時休診のお知らせ",
    excerpt: "本日2026.3.4(水)午後の診療は臨時休診させていただきます。明日3.5(木)が休診日のため3.6(金)より通常通り診療いたします。ご不便・ご迷惑をおかけして申し訳ございません。",
    body: "本日2026.3.4(水)午後の診療は臨時休診させていただきます。\n\n明日3.5(木)が休診日のため、3.6(金)より通常通り診療いたします。\n\nご不便・ご迷惑をおかけして誠に申し訳ございません。よろしくお願いいたします。\n\nご予約の変更につきましてはお電話（0277-54-9893）にてご連絡ください。",
  },
  {
    id: "hours-notice",
    date: "2025.06.24",
    datetime: "2025-06-24",
    category: "診療案内",
    title: "診療時間についてのお知らせ",
    excerpt: "予約状況やこれからの暑さにより診療時間が変更になることがあります。午後早めに終了する、9：30〜14：00で終了/通常お昼休みの時間も診療、等がございます。ご来院の際は事前にお電話にてご確認、ご予約をお願いいたします。",
    body: "予約状況やこれからの暑さにより診療時間が変更になることがあります。\n\n・午後早めに終了する場合（9：30〜14：00で終了）\n・通常お昼休みの時間も診療する場合\n\n等がございます。\n\nご来院の際は事前にお電話にてご確認、ご予約をお願いいたします。\n\nお電話：0277-54-9893\n\nご不便をおかけして申し訳ございませんが、よろしくお願いいたします。",
  },
]

export const categories = ["診療案内", "休診案内", "お知らせ"]

export const getArchiveMonths = () => {
  const months: { label: string; key: string }[] = []
  const seen = new Set<string>()
  newsItems.forEach((item) => {
    const d = new Date(item.datetime)
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`
    const label = `${d.getFullYear()}年${d.getMonth() + 1}月`
    if (!seen.has(key)) {
      seen.add(key)
      months.push({ label, key })
    }
  })
  return months
}
