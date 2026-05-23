// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Đây là GitHub user site (repo trùng username) -> phục vụ tại gốc tên miền,
// nên site = https://phanmyhang.github.io và base = '/'.
export default defineConfig({
  site: 'https://phanmyhang.github.io',
  base: '/',
});
