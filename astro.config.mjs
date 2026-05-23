// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Repo được GitHub Pages phục vụ tại subpath /phanmyhang/ (project site),
// nên cần đặt base tương ứng. Mọi đường dẫn tài nguyên dùng import.meta.env.BASE_URL.
export default defineConfig({
  site: 'https://phanmyhang.github.io',
  base: '/phanmyhang',
});
