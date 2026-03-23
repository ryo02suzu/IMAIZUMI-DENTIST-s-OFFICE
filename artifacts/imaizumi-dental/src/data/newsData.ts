export type NewsItem = {
  date: string
  category: string
  content: string
}

export const newsItems: NewsItem[] = [
  { date: "2026.03.09", category: "診療案内", content: "土曜日の診療時間変更のお知らせ" },
  { date: "2026.03.04", category: "休診案内", content: "2026.3.4(水)臨時休診のお知らせ" },
  { date: "2025.06.24", category: "診療案内", content: "診療時間についてのお知らせ" },
]
