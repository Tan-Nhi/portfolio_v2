# 🚀 Nguyen Tan Nhi | Portfolio

Portfolio cá nhân giới thiệu bản thân, kỹ năng, kinh nghiệm và các dự án của **Nguyễn Tấn Nhi** — Fullstack Web Developer. Giao diện hiện đại, responsive, hỗ trợ song ngữ (VI/EN) với hiệu ứng chuyển động mượt mà.

🔗 **Live Demo:** [portfolio-tannhi.xyz](https://www.portfolio-tannhi.xyz/)

---

## 📸 Giới thiệu

Đây là trang portfolio thế hệ mới (v2), được xây dựng lại với Next.js 16 và Tailwind CSS 4, tập trung vào hiệu năng, SEO và trải nghiệm người dùng.

## 🛠️ Công nghệ sử dụng

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Ngôn ngữ:** TypeScript
- **Triển khai:** Vercel

## ✨ Tính năng

- 🌐 Hỗ trợ đa ngôn ngữ (Tiếng Việt / English)
- 🎬 Hiệu ứng chuyển động mượt mà với Framer Motion
- 📱 Thiết kế responsive, tối ưu cho mọi thiết bị
- 🖼️ Tối ưu hình ảnh với Next/Image
- ⚡ Tối ưu hiệu năng và SEO chuẩn Next.js App Router

## 📄 Cấu trúc các trang

| Trang                  | Mô tả                                                               |
| ---------------------- | --------------------------------------------------------------------- |
| **Trang chủ**   | Giới thiệu tổng quan, ảnh đại diện, liên kết mạng xã hội  |
| **Giới thiệu** | Thông tin cá nhân, định hướng nghề nghiệp, tải CV           |
| **Hành trình** | Timeline kinh nghiệm & học vấn theo từng mốc thời gian          |
| **Kỹ năng**    | Danh sách công nghệ, ngôn ngữ lập trình, công cụ sử dụng   |
| **Dự án**      | Danh sách project fullstack/frontend/backend kèm demo & source code |
| **Đánh giá**  | Nhận xét từ đồng nghiệp/người hướng dẫn                    |
| **Liên hệ**    | Form liên hệ / thông tin liên lạc                                |

## 📦 Cài đặt

```bash
# Clone repository
git clone https://github.com/Tan-Nhi/portfolio_v2.git
cd portfolio_v2

# Cài đặt dependencies
npm install
```

## 🚀 Chạy dự án

```bash
# Chạy môi trường development
npm run dev

# Build production
npm run build

# Chạy production
npm run start
```

Sau khi chạy `npm run dev`, mở [http://localhost:3000](http://localhost:3000) để xem trên trình duyệt.

## 📁 Cấu trúc thư mục

```
personal-portfolio/
├── public/                      # Ảnh, icon kỹ năng, favicon...
├── src/
│   └── app/
│       ├── assets/
│       │   ├── hooks/           # Custom React hooks
│       │   └── index.js
│       ├── components/
│       │   ├── subs/            # Component con, tái sử dụng nội bộ
│       │   │   ├── Achievements.tsx
│       │   │   ├── Heading.tsx
│       │   │   ├── LanguageToggle.tsx
│       │   │   ├── Load.tsx
│       │   │   ├── project.tsx
│       │   │   └── Toggle.tsx
│       │   ├── About.tsx        # Section: Giới thiệu
│       │   ├── Contact.tsx      # Section: Liên hệ
│       │   ├── Experience.tsx   # Section: Kinh nghiệm & Học vấn
│       │   ├── Hero.tsx         # Section: Trang chủ
│       │   ├── Navbar.tsx       # Thanh điều hướng
│       │   ├── Projects.tsx     # Section: Dự án
│       │   ├── Reviews.tsx      # Section: Đánh giá
│       │   └── Skills.tsx       # Section: Kỹ năng
│       ├── context/
│       │   └── LanguageContext.tsx   # Context quản lý ngôn ngữ VI/EN
│       ├── i18n/
│       │   └── translations.ts       # Nội dung song ngữ
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
└── package.json
```

## 🌍 Triển khai

Dự án được triển khai trên **Vercel**. Mỗi lần push lên nhánh `master`, Vercel sẽ tự động build và deploy phiên bản mới.

## 📬 Liên hệ

- **GitHub:** [@Tan-Nhi](https://github.com/Tan-Nhi)
- **Website:** [portfolio-tannhi.xyz](https://www.portfolio-tannhi.xyz/)
- **Email:**  nguyentannhi2003bh@gmail.com
