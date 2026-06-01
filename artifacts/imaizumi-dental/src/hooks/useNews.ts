import { useQuery } from "@tanstack/react-query"
import { newsItems as localNews, type NewsItem } from "@/data/newsData"
import { fetchNews, isMicroCMSConfigured } from "@/lib/microcms"

// お知らせの取得元を一元化するフック。
// - microCMS 未設定: ローカル（newsData.ts）のお知らせを返す（移行前と同じ）
// - microCMS 設定済み: microCMS から取得。取得中・失敗時は暫定でローカルを表示
export function useNews(): { items: NewsItem[]; isLoading: boolean } {
  const query = useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
    enabled: isMicroCMSConfigured,
    staleTime: 1000 * 60 * 5,
  })

  if (!isMicroCMSConfigured) {
    return { items: localNews, isLoading: false }
  }

  return {
    // 取得成功時は microCMS の結果（空配列ならそのまま空）。取得前/失敗時はローカル。
    items: query.isSuccess ? query.data : localNews,
    isLoading: query.isLoading,
  }
}
