import { useState, useMemo, useEffect } from "react"
import { Link } from "wouter"
import {
  TEMPLATES,
  getTemplate,
  type AnnouncementDraft,
  type TemplateInputs,
} from "@/lib/announcementTemplates"

const PW_KEY = "imaizumi_staff_pw"

type Status = "idle" | "sending" | "done" | "error"

export default function StaffPost() {
  // 検索エンジンに載らないようにする（スタッフ専用ページ）
  useEffect(() => {
    const meta = document.createElement("meta")
    meta.name = "robots"
    meta.content = "noindex,nofollow"
    document.head.appendChild(meta)
    document.title = "スタッフ用 お知らせ投稿 | 今泉歯科医院"
    return () => {
      document.head.removeChild(meta)
    }
  }, [])

  const [password, setPassword] = useState<string>(
    () => sessionStorage.getItem(PW_KEY) ?? "",
  )
  const [templateId, setTemplateId] = useState<string>(TEMPLATES[0].id)
  const [inputs, setInputs] = useState<TemplateInputs>({})
  const [status, setStatus] = useState<Status>("idle")
  const [message, setMessage] = useState<string>("")

  const template = getTemplate(templateId)

  const draft: AnnouncementDraft | null = useMemo(() => {
    for (const f of template.fields) {
      if (f.required && !inputs[f.key]) return null
    }
    try {
      return template.build(inputs)
    } catch {
      return null
    }
  }, [template, inputs])

  function setField(key: keyof TemplateInputs, value: string) {
    setInputs((prev) => ({ ...prev, [key]: value }))
  }

  function selectTemplate(id: string) {
    setTemplateId(id)
    setInputs({})
    setStatus("idle")
    setMessage("")
  }

  async function submit() {
    if (!draft) return
    if (!password) {
      setStatus("error")
      setMessage("パスワードを入力してください")
      return
    }
    setStatus("sending")
    setMessage("")
    try {
      const res = await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, draft }),
      })
      const data = (await res.json().catch(() => ({}))) as {
        error?: string
        ok?: boolean
      }
      if (!res.ok) {
        setStatus("error")
        setMessage(data.error ?? `送信に失敗しました (${res.status})`)
        return
      }
      sessionStorage.setItem(PW_KEY, password)
      setStatus("done")
      setMessage("お知らせを公開しました！サイトに反映されます。")
      setInputs({})
    } catch {
      setStatus("error")
      setMessage("通信エラーが発生しました。電波状況を確認して再度お試しください。")
    }
  }

  const labelCls = "block text-sm font-medium text-[#4a4a4a] mb-1"
  const fieldCls =
    "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[#7eb4d2] focus:outline-none focus:ring-1 focus:ring-[#7eb4d2]"

  return (
    <div className="min-h-screen bg-[#f8fbfc] py-8 px-4">
      <div className="max-w-xl mx-auto">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-[#7eb4d2]">お知らせ投稿（スタッフ用）</h1>
          <p className="text-xs text-[#888] mt-1">
            テンプレートを選んで、日付などを入れて送信するだけ
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-6">
          {/* パスワード */}
          <div>
            <label className={labelCls}>合言葉（パスワード）</label>
            <input
              type="password"
              className={fieldCls}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="スタッフ用パスワード"
              autoComplete="off"
            />
          </div>

          {/* テンプレ選択 */}
          <div>
            <label className={labelCls}>種類を選ぶ</label>
            <div className="grid grid-cols-2 gap-2">
              {TEMPLATES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => selectTemplate(t.id)}
                  className={`text-left rounded-lg border px-3 py-2 transition-colors ${
                    t.id === templateId
                      ? "border-[#7eb4d2] bg-[#eef6fb]"
                      : "border-gray-200 hover:border-[#7eb4d2]/50"
                  }`}
                >
                  <span className="block text-sm font-semibold text-[#4a4a4a]">{t.label}</span>
                  <span className="block text-[11px] text-[#999] leading-tight mt-0.5">
                    {t.description}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 入力欄（テンプレごとに変化） */}
          <div className="space-y-4">
            {template.fields.map((f) => (
              <div key={f.key}>
                <label className={labelCls}>
                  {f.label}
                  {f.required && <span className="text-red-400 ml-1">*</span>}
                </label>
                {f.type === "textarea" ? (
                  <textarea
                    className={`${fieldCls} min-h-[120px] leading-relaxed`}
                    value={inputs[f.key] ?? ""}
                    placeholder={f.placeholder}
                    onChange={(e) => setField(f.key, e.target.value)}
                  />
                ) : f.type === "select" ? (
                  <select
                    className={fieldCls}
                    value={inputs[f.key] ?? ""}
                    onChange={(e) => setField(f.key, e.target.value)}
                  >
                    <option value="">選択してください</option>
                    {f.options?.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={f.type}
                    className={fieldCls}
                    value={inputs[f.key] ?? ""}
                    placeholder={f.placeholder}
                    onChange={(e) => setField(f.key, e.target.value)}
                  />
                )}
              </div>
            ))}
          </div>

          {/* プレビュー */}
          <div>
            <label className={labelCls}>プレビュー（このまま掲載されます）</label>
            {draft ? (
              <div className="rounded-lg border border-[#7eb4d2]/30 bg-[#f8fbfd] p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#f5a623] text-white">
                    {draft.category[0]}
                  </span>
                </div>
                <p className="font-bold text-[#4a4a4a] mb-2">{draft.title}</p>
                <p className="text-sm text-[#555] whitespace-pre-line leading-relaxed">
                  {draft.body}
                </p>
              </div>
            ) : (
              <div className="rounded-lg border border-dashed border-gray-300 p-4 text-sm text-[#999]">
                必須項目（<span className="text-red-400">*</span>）を入力するとここにプレビューが出ます
              </div>
            )}
          </div>

          {/* メッセージ */}
          {message && (
            <p
              className={`text-sm rounded-lg px-3 py-2 ${
                status === "error"
                  ? "bg-red-50 text-red-600"
                  : "bg-green-50 text-green-700"
              }`}
            >
              {message}
            </p>
          )}

          {/* 送信 */}
          <button
            type="button"
            onClick={submit}
            disabled={!draft || status === "sending"}
            className="w-full rounded-full bg-[#7eb4d2] text-white py-3 font-semibold transition-colors hover:bg-[#6aa3c4] disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "送信中..." : "この内容で公開する"}
          </button>

          {status === "done" && (
            <div className="text-center text-sm">
              <Link href="/news" className="text-[#7eb4d2] hover:underline">
                お知らせ一覧を確認する →
              </Link>
            </div>
          )}
        </div>

        <p className="text-center text-[11px] text-[#aaa] mt-6">
          間違えて投稿した場合は、microCMSの管理画面から修正・削除できます。
        </p>
      </div>
    </div>
  )
}
