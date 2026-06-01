import { useQuery } from "@tanstack/react-query"
import { newsItems as localNews, type NewsItem } from "@/data/newsData"
import { fetchNews } from "@/lib/microcms"

// お知らせの取得元を一元化するフック。
// - 取得成功（/api/news → microCMS）: その結果を表示（空配列ならそのまま空）
// - 取得前/失敗（裏方が未設定など）: ローカル（newsData.ts）を暫定表示
export function useNews(): { items: NewsItem[]; isLoading: boolean } {
  const query = useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  })

  return {
    items: query.isSuccess ? query.data : localNews,
    isLoading: query.isLoading,
  }
}
