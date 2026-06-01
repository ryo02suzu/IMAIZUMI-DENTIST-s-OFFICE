import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// ホスティング非依存の設定。
// - PORT      : dev/preview サーバーのポート（未指定なら 5173）
// - BASE_PATH : 公開時のベースパス（独自ドメイン直下なら "/"。未指定なら "/"）
// Replit 専用プラグインは Replit 環境（REPL_ID が存在）の開発時のみ読み込む。
const port = Number(process.env.PORT) || 5173;
const basePath = process.env.BASE_PATH || "/";
const isReplitDev =
  process.env.REPL_ID !== undefined && process.env.NODE_ENV !== "production";

export default defineConfig(async () => ({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    // 以下は Replit の開発環境専用。本番ビルドや他ホスティングでは読み込まれない。
    ...(isReplitDev
      ? [
          (await import("@replit/vite-plugin-runtime-error-modal")).default(),
          (
            await import("@replit/vite-plugin-cartographer")
          ).cartographer({
            root: path.resolve(import.meta.dirname, ".."),
          }),
          (await import("@replit/vite-plugin-dev-banner")).devBanner(),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
}));
