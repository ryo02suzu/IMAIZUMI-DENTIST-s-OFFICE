/**
 * メンテナンス公開ビルド。
 *
 * 通常ビルド(build:site)の代わりにこれを実行すると、配信ディレクトリには
 * メンテナンス画面だけが出力される。アプリのJS/CSSやページ本文は一切含まれないため、
 * URLを直接叩いてもサイトの中身は取得できない。
 *
 * 解除するときは package.json の "build" を "build:site" の内容に戻すだけでよい
 * （このコミットを revert すれば元に戻る）。
 */
import { cp, mkdir, readdir, rm, stat } from "node:fs/promises"
import path from "node:path"

const appDir = path.resolve(import.meta.dirname, "..")
const srcDir = path.join(appDir, "maintenance")
const outDir = path.join(appDir, "dist", "public")

// 追加で持っていくファイル（ファビコン等、本文を含まないものだけ）
const extras = ["favicon.svg", "clinic-icon-square.png"]

await rm(outDir, { recursive: true, force: true })
await mkdir(outDir, { recursive: true })
await cp(srcDir, outDir, { recursive: true })

for (const name of extras) {
  const from = path.join(appDir, "public", name)
  try {
    await stat(from)
    await cp(from, path.join(outDir, name))
  } catch {
    // 無ければ黙って飛ばす（ファビコンが欠けても公開停止の目的には影響しない）
  }
}

const emitted = (await readdir(outDir)).sort()
console.log(`[maintenance] ${path.relative(appDir, outDir)} に ${emitted.length} 件を出力しました`)
console.log(`[maintenance] ${emitted.join(", ")}`)
