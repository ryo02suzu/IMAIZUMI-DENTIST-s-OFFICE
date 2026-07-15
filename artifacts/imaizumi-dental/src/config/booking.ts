export const BOOKING_ENABLED = true
// 予約サーバー（Render・無料枠のためスリープ→初回起動待ちが発生）の実URL。
// booking.html（読み込み画面）からの最終遷移先としてのみ使用する。
export const BOOKING_URL = "https://dental-reservation-app.onrender.com/book/imaizumi-dental"
// サイト内の「WEB予約」ボタンのリンク先。Cloudflare上の軽量な読み込み画面。
// ここでRenderをウォームアップし、起動後に BOOKING_URL へ自動転送する。
export const BOOKING_PATH = "/booking"
