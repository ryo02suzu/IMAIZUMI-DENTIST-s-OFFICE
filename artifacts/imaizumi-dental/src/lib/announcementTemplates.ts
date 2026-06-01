// スタッフ投稿ページで使うお知らせテンプレート。
// 「日付を選ぶ → 整った文章を自動生成」する仕組みの中核。
// 同じロジックを画面のプレビューと送信データの両方で使う（表示と投稿の文面が一致する）。

export type Category = "診療案内" | "休診案内" | "お知らせ"

export interface AnnouncementDraft {
  title: string
  date: string // ISO 8601（+09:00）。microCMS の date フィールドに渡す
  category: Category[] // microCMS のセレクトは配列
  excerpt: string
  body: string
}

const WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"]
const TEL = "0277-54-9893"

// "2026-06-05" → 曜日・表記ゆれを吸収して整形（UTC基準で曜日ズレを防ぐ）
function parseDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number)
  const obj = new Date(Date.UTC(y, m - 1, d))
  const w = WEEKDAYS[obj.getUTCDay()]
  return {
    iso: `${dateStr}T00:00:00+09:00`,
    short: `${m}/${d}(${w})`,
    long: `${m}月${d}日(${w})`,
  }
}

export type FieldType = "date" | "text" | "textarea" | "select"

export interface TemplateField {
  key: "date" | "note" | "title" | "body" | "category"
  label: string
  type: FieldType
  required?: boolean
  placeholder?: string
  options?: string[]
}

export type TemplateInputs = Partial<
  Record<"date" | "note" | "title" | "body" | "category", string>
>

export interface TemplateDef {
  id: string
  label: string
  description: string
  fields: TemplateField[]
  build: (inputs: TemplateInputs) => AnnouncementDraft
}

export const TEMPLATES: TemplateDef[] = [
  {
    id: "full-closure",
    label: "終日休診",
    description: "1日まるごとお休みにする",
    fields: [
      { key: "date", label: "休診日", type: "date", required: true },
      { key: "note", label: "理由・補足（任意）", type: "text", placeholder: "例：研修のため" },
    ],
    build: ({ date, note }) => {
      const d = parseDate(date!)
      const reason = note ? `${note}のため、` : ""
      const body =
        `${reason}${d.long}は終日休診させていただきます。\n\n` +
        `ご迷惑をおかけして誠に申し訳ございません。\n\n` +
        `ご予約・お問い合わせはお電話（${TEL}）にてお気軽にご連絡ください。`
      return {
        title: `${d.short} 休診のお知らせ`,
        date: d.iso,
        category: ["休診案内"],
        excerpt: `${d.long}は終日休診させていただきます。ご迷惑をおかけして申し訳ございません。`,
        body,
      }
    },
  },
  {
    id: "afternoon-closure",
    label: "午後休診",
    description: "午後だけお休み（午前は通常診療）",
    fields: [
      { key: "date", label: "休診日", type: "date", required: true },
      { key: "note", label: "理由・補足（任意）", type: "text", placeholder: "例：学会参加のため" },
    ],
    build: ({ date, note }) => {
      const d = parseDate(date!)
      const reason = note ? `${note}のため、` : ""
      const body =
        `${reason}${d.long}は午後の診療を休診させていただきます。\n\n` +
        `午前の診療（9:30〜12:30）は通常通り行っております。\n\n` +
        `ご迷惑をおかけして誠に申し訳ございません。\n\n` +
        `ご予約・お問い合わせはお電話（${TEL}）にてお気軽にご連絡ください。`
      return {
        title: `${d.short} 午後休診のお知らせ`,
        date: d.iso,
        category: ["休診案内"],
        excerpt: `${d.long}は午後の診療を休診させていただきます。午前（9:30〜12:30）は通常通りです。`,
        body,
      }
    },
  },
  {
    id: "morning-closure",
    label: "午前休診",
    description: "午前だけお休み（午後は通常診療）",
    fields: [
      { key: "date", label: "休診日", type: "date", required: true },
      { key: "note", label: "理由・補足（任意）", type: "text", placeholder: "例：研修のため" },
    ],
    build: ({ date, note }) => {
      const d = parseDate(date!)
      const reason = note ? `${note}のため、` : ""
      const body =
        `${reason}${d.long}は午前の診療を休診させていただきます。\n\n` +
        `午後の診療（15:00〜19:00）は通常通り行っております。\n\n` +
        `ご迷惑をおかけして誠に申し訳ございません。\n\n` +
        `ご予約・お問い合わせはお電話（${TEL}）にてお気軽にご連絡ください。`
      return {
        title: `${d.short} 午前休診のお知らせ`,
        date: d.iso,
        category: ["休診案内"],
        excerpt: `${d.long}は午前の診療を休診させていただきます。午後（15:00〜19:00）は通常通りです。`,
        body,
      }
    },
  },
  {
    id: "temp-closure",
    label: "臨時休診",
    description: "急なお休み",
    fields: [
      { key: "date", label: "休診日", type: "date", required: true },
      { key: "note", label: "理由・補足（任意）", type: "text" },
    ],
    build: ({ date, note }) => {
      const d = parseDate(date!)
      const reason = note ? `${note}のため、` : ""
      const body =
        `${reason}${d.long}は臨時休診とさせていただきます。\n\n` +
        `ご迷惑をおかけして誠に申し訳ございません。\n\n` +
        `ご予約の変更等はお電話（${TEL}）にてご連絡ください。`
      return {
        title: `${d.short} 臨時休診のお知らせ`,
        date: d.iso,
        category: ["休診案内"],
        excerpt: `${d.long}は臨時休診とさせていただきます。ご迷惑をおかけして申し訳ございません。`,
        body,
      }
    },
  },
  {
    id: "free",
    label: "自由入力",
    description: "テンプレに無いお知らせを自分で書く",
    fields: [
      { key: "title", label: "タイトル", type: "text", required: true, placeholder: "例：診療時間変更のお知らせ" },
      { key: "date", label: "日付", type: "date", required: true },
      { key: "category", label: "カテゴリ", type: "select", required: true, options: ["診療案内", "休診案内", "お知らせ"] },
      { key: "body", label: "本文", type: "textarea", required: true, placeholder: "本文を入力してください" },
    ],
    build: ({ title, date, category, body }) => {
      const d = parseDate(date!)
      const text = (body ?? "").trim()
      return {
        title: (title ?? "").trim(),
        date: d.iso,
        category: [(category ?? "お知らせ") as Category],
        excerpt: text.replace(/\n+/g, " ").slice(0, 100),
        body: text,
      }
    },
  },
]

export function getTemplate(id: string): TemplateDef {
  return TEMPLATES.find((t) => t.id === id) ?? TEMPLATES[0]
}
