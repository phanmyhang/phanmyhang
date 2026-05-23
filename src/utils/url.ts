// Ghép base path (cấu hình trong astro.config.mjs) vào đường dẫn tài nguyên,
// để trang chạy đúng cả ở root ('/') lẫn subpath ('/phanmyhang').
const BASE = import.meta.env.BASE_URL; // ví dụ '/phanmyhang' hoặc '/'

export function withBase(path: string): string {
  const base = BASE.replace(/\/$/, ''); // bỏ '/' cuối
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}
