# Mỹ Hằng Fit — Trang link tổng hợp

Trang web một-trang kiểu "link in bio" cho **Mỹ Hằng Fit** (PT 1:1 Online & Offline), xây dựng bằng [Astro](https://astro.build). Giao diện mô phỏng theme/màu sắc/nội dung của trang gốc, đã loại bỏ hoàn toàn mọi yếu tố thương hiệu Linktree.

## 🎨 Thiết kế

| Yếu tố | Giá trị |
|---|---|
| Font | Space Mono (Google Fonts) |
| Nền ngoài | `rgb(224, 209, 198)` (taupe) |
| Panel trong | `rgb(255, 238, 225)` (kem/peach) |
| Viền thẻ link | `rgb(204, 190, 180)`, bo góc 32px |

## 🚀 Lệnh

| Lệnh | Tác dụng |
|---|---|
| `npm install` | Cài dependencies |
| `npm run dev` | Chạy dev server tại `localhost:4321` |
| `npm run build` | Build trang tĩnh ra `./dist/` |
| `npm run preview` | Xem thử bản build |

## ✏️ Chỉnh sửa nội dung

Toàn bộ nội dung (tiêu đề, mô tả, social, các thẻ link) nằm trong một file duy nhất:

```
src/data/profile.ts
```

Ảnh đại diện và thumbnail nằm trong `public/images/`.

## 📁 Cấu trúc

```
public/images/        avatar + thumbnail các thẻ
src/data/profile.ts   dữ liệu hồ sơ (chỉnh ở đây)
src/components/        ProfileHeader, SocialIcons, LinkCard, ShareButton
src/layouts/           BaseLayout (head, font, biến màu toàn cục)
src/pages/index.astro  trang chính
```

## 🔗 Liên kết

- Instagram: [@coachhang.fit](https://www.instagram.com/coachhang.fit)
- TikTok: [@hangditapday](https://www.tiktok.com/@hangditapday)
- Facebook: [Mỹ Hằng Fit](https://www.facebook.com/share/18WacTbv38)
