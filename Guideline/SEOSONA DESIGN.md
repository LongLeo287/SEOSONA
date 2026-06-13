# SEOSONA BRAND DESIGN SYSTEM
> **Tagline:** SHARE TO BE SHARED MORE  
> **Brand Direction:** Hiện Đại · Tin Cậy · Đột Phá  
> **Platform:** Next.js — Dark Mode Glassmorphism First

---

## LOGO IDENTITY

### Primary Logo
```
[Icon Mark] + [Wordmark: "Seosona"]
```

**Icon Mark** — Spiral S + Eye Motif:
- Hình dạng: Chữ "S" cách điệu từ 2 vòng cung chồng nhau, tạo thành con mắt trừu tượng.
- Màu icon: `#003566` (Dark Navy) — phần vòng cung chính.
- Điểm nhấn: Hình tròn nhỏ màu `#46FF00` (Neon Green) — tượng trưng tầm nhìn, sự tăng trưởng.
- Stroke: Dày, dứt khoát, không có fill — đường nét kỹ thuật hiện đại.

**Wordmark:**
- Font: `Poppins Bold`
- Màu: `#003566`
- Viết hoa chữ cái đầu: "Seosona" (không phải SEOSONA)

### Logo Variants
| Variant | Mô tả | Sử dụng |
|---|---|---|
| Primary (Stacked) | Icon phía trên, wordmark phía dưới | Mọi mặc định |
| Horizontal | Icon bên trái, wordmark bên phải | Header, banner ngang |
| Icon Only | Chỉ icon mark | Favicon, app icon, thumbnail nhỏ |
| Reversed (White) | Logo trắng trên nền navy | Dark background |

### Logo Clear Space
- Min clear space mỗi phía = chiều cao chữ "S" × 0.5
- Min size: 32px (icon only), 120px (full logo)

### Logo DON'Ts
- ❌ Không dùng màu ngoài bảng màu brand
- ❌ Không kéo dài, bóp méo tỉ lệ
- ❌ Không đặt lên nền loang lổ, ảnh rối
- ❌ Không thêm shadow tuỳ tiện, drop shadow quá nặng
- ❌ Không dùng font khác thay Poppins cho wordmark

---

## 01. COLOR SYSTEM

### Primary Palette
| Token | Hex | Tên | Vai trò |
|---|---|---|---|
| `--color-brand-dark-1` | `#003566` | Dark Blue | Logo, nền section, nút Primary |
| `--color-brand-dark-2` | `#003366` | Dark Blue 2 | Tin tưởng, bản liền (subtle variation) |
| `--color-brand-green` | `#46FF00` | Neon Green | Accent, Glow, Badges, CTA glow effect |
| `--color-brand-green-bright` | `#00FF00` | Bright Green | Highlight state, hover glow |
| `--color-brand-magenta` | `#C8005A` | Magenta | Emotion, urgent highlight (dùng hạn chế) |

### Gradient Palette
| Tên | Giá trị | Dùng ở |
|---|---|---|
| Goon Gradient | `#400207E → #0077CE` | Hero background sweep |
| Dex Brehent | `#00407C → #7651SF` | Card hover overlay |
| Brcon Gradient | `#003399 → #58C4C7` | Progress bar, accent strip |
| Accent Gradient | `#0055FF → #90F4FF` | Shine effect (rất hạn chế) |

### Neutral Palette
| Token | Hex | Tên | Vai trò |
|---|---|---|---|
| `--color-neutral-charcoal` | `#091338` | Charcoal | Màu chữ tối nhất (thay #000) |
| `--color-neutral-sam` | `#200446` | Sam (Deep Indigo) | Background layer tối thứ 2 |
| `--color-neutral-grey` | `#6B7280` | Grey | Muted text, placeholder |
| `--color-neutral-off-white` | `#F4F6F8` | Off White | Light section background |
| `--color-neutral-white` | `#FFFFFF` | White | Card surface, pure background |

### Brand Visual Effects
| Effect | Spec | Áp dụng |
|---|---|---|
| **Shadow** | `5px 5px 10px rgba(3, 256, 0, 0.90)` | Card brand signature |
| **Glow Green** | `0 0 15px rgba(70,255,0,0.4)` | Icon hover, badge glow |
| **Glow Blue** | `0 0 140px rgba(0,53,102,0.30)` | Hero background ambient |
| **Texture** | Subtle hex wave, 4% opacity | Dark section overlay |
| **Reflection** | Soft saturation 30–35% opacity | Glass card effect |
| **Depth** | Multi-layer shadow stacking | Premium card elevation |

---

## 02. TYPOGRAPHY

### Heading Font — Poppins
| Level | Size | Weight | Line Height | Vai trò |
|---|---|---|---|---|
| H1 | 48–70px | Bold 700 | 1.1 | Hero headline, page title |
| H2 | 34–44px | SemiBold 600 | 1.2 | Section title |
| H3 | 24–30px | SemiBold 600 | 1.3 | Card title, sub-section |

*Poppins tạo cảm giác mạnh mẽ, hiện đại, dứt khoát — phù hợp brand Tech Agency.*

### Body Font — Inter
| Level | Size | Weight | Line Height | Vai trò |
|---|---|---|---|---|
| Body | 16–18px | Regular 400 | 1.6 | Paragraph, description |
| Small | 13–14px | Regular 400 | 1.5 | Caption, helper text |
| Label | 11–12px | Bold 700 | 1.2 | Tag, badge text |

*Inter: neutral, rõ ràng, dễ đọc — hoàn hảo cho digital & print.*

### Typography Rules
- **Heading luôn dùng Poppins**, không ngoại lệ.
- **Body/Description luôn dùng Inter**.
- Màu heading trên dark bg: `#FFFFFF`; trên light bg: `#091338`.
- Màu body trên dark bg: `#CBD5E1` (slate-300); trên light bg: `#475569`.
- **Không dùng font-size nhỏ hơn 12px** cho production content.

---

## 03. LOGO & IDENTITY SYSTEM

*(Xem phần LOGO IDENTITY đầu tài liệu — chi tiết về icon mark, wordmark, variants, clear space, DON'Ts)*

### Pattern & Motif
| Pattern | Mô tả | Áp dụng |
|---|---|---|
| **Logo Motif (S-spiral)** | Vòng cung S thu nhỏ, dùng làm watermark | Section background, packaging |
| **Line Pattern** | Đường kẻ song song mỏng, 10–15% opacity | Dark bg texture |
| **Grid Pattern** | Lưới dot 8px, 8% opacity | Tech/data visual background |

### Logo Motif Application
Logo icon được dùng ở 3 trạng thái biến thể:
1. **Full icon** (solid navy) — mọi use case chính thức
2. **Outline only** (stroke navy, no fill) — watermark, background texture
3. **Green dot focus** (chỉ neon green dot) — micro-animation, loading state

---

## 04. UI SYSTEM

### Buttons
| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| **Primary** | `#003566` | White | None | Bg Navy surface + Border Neon Green + Glow |
| **Secondary** | Transparent | `#003566` | `1.5px #003566` | Bg Navy + Text Neon Green + Border Neon Green |
| **Accent (Ghost)** | `rgba(70,255,0,0.08)` | `#46FF00` | `1px rgba(70,255,0,0.35)` | Fill Neon Green + Text Charcoal (`#091338`) + Strong glow |
| **Icon Button** | Transparent | Inherit | None | Bg tint |

- Border radius: `9999px` (pill) — mọi button
- Padding: `14px 32px` (primary/secondary); `10px 20px` (small)
- Font: `Poppins Bold 700`, 15px

### Cards
| Variant | Background | Border | Sử dụng |
|---|---|---|---|
| **Light Card** | `#FFFFFF` | `rgba(0,0,0,0.06)` | Light section content |
| **Dark Card** | `rgba(255,255,255,0.05)` + `backdrop-blur` | `rgba(255,255,255,0.10)` | Dark section, glassmorphism |
| **Dark Card Hover** | `rgba(255,255,255,0.10)` | `rgba(70,255,0,0.30)` | Hover state |
| **3D Flip Card** | Container `perspective` | `preserve-3d` | Thẻ tính năng kép (Click lật mặt) |

### Micro-interactions & Animations (Tech-Vibe)
- **Click-to-flip**: Các thẻ chức năng kép (như Dashboard -> Ecosystem) dùng css `rotateY(180deg)` khi click, kết hợp hover để nổi lên (zoom 1.02x) và tăng bóng đổ ánh sáng Neon. Tách biệt rõ ràng hành vi xem trước (Hover) và hành vi chọn (Click).
- **Tech Ambient**: Sử dụng CSS keyframes nhúng trực tiếp (`float-dynamic`, `scanline-anim`, `bg-grid-anim`) để tạo cảm giác các khối UI lơ lửng trong không gian 3D, quét laser kỹ thuật số mà không làm nặng trang.
- **Focus Glow & Contrast Rule**: Khi hover, nút CTA Accent sẽ đảo màu thành Nền Neon (`bg-[#46FF00]`). Lúc này, **chữ bắt buộc phải đổi sang màu tối nhất** là Charcoal (`#091338`) hoặc Dark Navy. Tuyệt đối KHÔNG dùng chữ màu trắng trên nền Neon Green vì sẽ gây lóa và mất tương phản (Contrast fail).

### Border Radius Scale
| Token | Value | Dùng ở |
|---|---|---|
| `--radius-none` | `0px` | Dividers |
| `--radius-xs` | `4px` | Tags nhỏ |
| `--radius-s` | `8px` | Input, small badge |
| `--radius-m` | `12px` | Tooltip, small card |
| `--radius-l` | `16px` | Standard card |
| `--radius-xl` | `25px` | Hero wrapper, large card |
| `--radius-pill` | `9999px` | Button, badge |

### Spacing Scale (Base 8px)
`8 · 16 · 24 · 32 · 44 · 64 · 96 · 128 · 168px`

---

## 05. SAFE SPACING & RESPONSIVE LAYOUT SYSTEM

Toàn bộ nền tảng phải đảm bảo tuân thủ chuẩn Safe Spacing (Không gian an toàn) để đảm bảo UI không bị vỡ trên mọi thiết bị và luôn có đủ khoảng "thở" (White space).

### 5.1. Section Spacing (Khoảng cách giữa các Section - Trục Y)
| Màn hình | Breakpoint | Tailwind Class | Giá trị thực |
|---|---|---|---|
| **Mobile** | `< 640px` | `py-12` | 48px |
| **Tablet** | `sm:` (≥ 640px) | `sm:py-16` | 64px |
| **Desktop** | `lg:` (≥ 1024px) | `lg:py-20` | 80px |

*Luôn dùng chuỗi class này cho thẻ `<section>`: `py-12 sm:py-16 lg:py-20`.*
*Ngoại lệ: Với các Hero Section (Top đầu trang), dùng `py-16 sm:py-20 lg:py-24` để có thêm không gian nổi bật.*

### 5.2. Container Safe Spacing (Giới hạn khung đọc - Trục X)
Tâm trang web phải luôn cân bằng, content không bao giờ được chạm sát viền màn hình (Edge-to-edge) trừ hình nền.
- **Chuẩn Container:** `container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`
- **Max Width:** Khoá cứng ở `max-w-7xl` (1280px). Không dùng `max-w-full` để text không bị kéo dài dàn trải trên màn hình 4K.
- **Padding 2 bên:** 
  - Mobile: `px-4` (16px)
  - Tablet: `px-6` (24px)
  - Desktop: `px-8` (32px)

### 5.3. Box & Card Padding (Không gian trong thẻ)
| Loại Thẻ | Mobile (`p-` default) | Tablet/Desktop (`sm:`/`lg:`/`xl:`) | Use case |
|---|---|---|---|
| Thẻ Nhỏ / Tag | `p-4` (16px) | `sm:p-5` (20px) | Feature card nhỏ |
| Thẻ Dịch Vụ / Process | `p-6` (24px) | `sm:p-8` hoặc `xl:p-8` (32px) | Service card, Process card |
| Thẻ Đặc Biệt (Featured) | `p-6` (24px) | `sm:p-10` (40px) | Featured Service, Hero Card |

### 5.4. Text & Element Gap (Khoảng cách thành phần)
- Khoảng cách từ Tagline đến Tiêu đề (H2): `mt-4` đến `mt-6` (16px - 24px)
- Khoảng cách từ Tiêu đề (H2) đến Mô tả (p): `mt-4` đến `mt-6` (16px - 24px)
- Khoảng cách từ Tiêu đề Card (H3) đến Mô tả Card (p): `mt-2` đến `mt-3` (8px - 12px)
- Gap trong Grid/Flex: `gap-4` (mobile), `gap-6` hoặc `gap-8` (tablet/desktop)

### 5.5. Responsive Grid Rules
Cấu trúc Grid phải tự động dàn trang (Reflow) mềm mại:
- **Default (Mobile):** `grid-cols-1` (1 cột, trải dọc)
- **Tablet (`sm:`/`md:`):** `sm:grid-cols-2` (2 cột)
- **Desktop (`lg:`/`xl:`):** `lg:grid-cols-3` hoặc `lg:grid-cols-4` tuỳ vào lượng nội dung.

---

## 06. ICON SYSTEM

**Style:** Line Icons — clean, minimal, 1.5–2px stroke  
**Size grid:** 16px / 20px / 24px / 32px  
**Color:** Inherit từ parent (dùng `currentColor`) — dễ đổi màu theo context

### Core Icon Categories
| Category | Icons |
|---|---|
| Analytics & Data | BarChart, TrendingUp, LineChart, PieChart |
| Navigation & UI | ArrowRight, ChevronDown, Menu, Search, X |
| Communication | Mail, Phone, MessageSquare, Bell |
| Content | File, FileText, Image, Video |
| Action | Download, Upload, Share, Copy, Edit |
| Status | CheckCircle, AlertCircle, Info, Shield |
| Business | Users, Target, Building, Globe, Location |

**Icon + Text rule:** Gap = 6–8px. Icon size = 16–20px khi inline với text.

---

## 07. IMAGERY STYLE

### Photography Direction
| Thuộc tính | Mô tả |
|---|---|
| **Chủ đề** | Đội ngũ chuyên nghiệp, màn hình dữ liệu, growth chart, kỹ thuật số |
| **Tone màu** | Cool tones — xanh navy, xanh dương, trắng sáng. Tránh warm yellows |
| **Ánh sáng** | Sáng tự nhiên, studio soft light — tránh ảnh tối tăm, lỗi thời |
| **Phong cách** | Hiện đại, tương lai, dữ liệu, cấp bậc chuyên nghiệp |

### Overlay Treatment
Ảnh trong dark sections luôn có overlay:
- `linear-gradient(rgba(0,53,102,0.7), rgba(0,26,51,0.85))`  
- Giữ brand color tone nhất quán, tránh "ảnh nổi" mất kết nối.

### Glass & Gradient Surfaces
- **Âm vang:** `rgba(0,53,102,0.6)` + `backdrop-blur(20px)` — card glass
- **Bằng nhau:** Cyan/Navy gradient — chart, icon glow background
- **Chú hèo:** `Glass, Shiny, Gradient` — decorative badge, chip

---

## 08. APPLICATIONS

### Website Hero
- Headline: **"Share. Search. Connect."** — (Chữ "Search" có hiệu ứng text-shimmer gradient 7 màu ánh sáng).
- Sub-headline: benefit-focused, max 2 lines
- CTA Primary: "Nhận tư vấn chiến lược"
- CTA Secondary: "Xem Case Study"
- Background: Dark navy gradient `#003566 → #001833` kết hợp lưới tọa độ chuyển động `bg-grid-anim`.
- Visual Elements:
  - Background: Hào quang Neon tinh tế, không quá gắt (`opacity: 10%`, `blur: 30px`).
  - Floating UI: Các Card Công nghệ (Network, AI Bot, Chart) trôi nổi 3D lệch nhịp xung quanh màn hình.
  - Interactive Dashboard: Nằm bên phải. Hover để sáng viền và zoom lên, Click để lật thẻ (3D Flip) hé lộ quảng cáo Hệ sinh thái Sonatools.io mặt sau.

### Mobile UI & Responsive UX
- **Navigation:** Bottom tab hoặc hamburger slide-in
- **Typography Scale:** Giảm H1 = 32px, H2 = 24px, body = 15px.
- **Dynamic Scale:** Tagline/Badge hạ xuống `text-xs` trên Mobile để không vỡ layout.
- **Touch target:** Min `44px × 44px`
- **Visual Clutter Control:** BẮT BUỘC ẩn (`hidden md:block`) toàn bộ các icon lơ lửng, vật thể trang trí background 3D trên màn hình Mobile để dọn dẹp không gian.
- **Grid Layout (Metrics):** Cấu trúc Grid 3 ô số liệu chuyển thành 2 cột trên Mobile (ô lẻ cuối cùng dàn ngang `col-span-2`), và trở về 3 cột trên `sm:`.

### Safe Area & Container Constraint
- Container chuẩn: `container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`
- Mục đích: Khoá cứng chiều rộng khung đọc tối đa ở 1280px (`max-w-7xl`) để UI không bị dàn trải, bẹp ngang trên màn hình Ultrawide 4K. Tâm trang luôn cân bằng (`mx-auto`).

### Social Post (2 mẫu chuẩn)
| Loại | Format | Nội dung |
|---|---|---|
| Topic Post | 1:1 (1080×1080) | "Topic: 1 Share. 1 Share, Together" — navy bg, neon accent |
| Growth Post | 4:5 (1080×1350) | Số liệu nổi bật, brand color block |

### Business Card
- Front: Logo (white) + tên + chức vụ — nền `#003566`
- Back: Contact info trên `#F4F6F8` hoặc navy + neon green line accent
- Size: 90mm × 55mm

### Billboard / OOH
- Headline max 5 từ: **"Share & Grow with Seosona"**
- Logo top-left hoặc bottom-right
- Nền navy đậm, chữ trắng, green accent line

---

## 09. BRAND ESSENCE

### Mission
> *"Nâng tầm chia sẻ, lan toả giá trị."*  
> Hỗ trợ doanh nghiệp tăng trưởng bền vững từ Google — bằng dữ liệu, chiến lược chuyên sâu và hệ thống thực thi rõ ràng.

### Values (3 Core)
| Giá trị | Mô tả |
|---|---|
| **Minh bạch** | Báo cáo rõ ràng, dữ liệu thật, không cam kết ảo |
| **Tăng trưởng bền vững** | Tập trung lead chất lượng, không chạy số ảo |
| **Hợp tác chân thực** | Hiểu business client, đề xuất phù hợp nguồn lực |

### Vision
> *Trở thành Tech-Agency SEO hàng đầu Việt Nam — nơi dữ liệu và sáng tạo tạo ra tăng trưởng thật sự.*

### Brand Voice & Tone
| Ngữ cảnh | Tone |
|---|---|
| Tư vấn / Sales | Chuyên gia, tự tin, không áp đặt |
| Content / Blog | Rõ ràng, thực chiến, có ví dụ cụ thể |
| Social Media | Chia sẻ kiến thức, gần gũi nhưng vẫn professional |
| Error / Alert | Ngắn gọn, hướng dẫn giải pháp ngay |

### Brand Personality
Nếu SEOSONA là người: **Chuyên gia dữ liệu trẻ trung, thẳng thắn, luôn mang kết quả thực tế và giải thích được mọi quyết định bằng số liệu.**

---

## 10. IMPLEMENTATION RULES

### CSS Variables Bắt buộc
```css
:root {
  /* Brand Colors */
  --color-brand-dark-1: #003566;
  --color-brand-dark-2: #003366;
  --color-brand-green: #46FF00;
  --color-brand-green-bright: #00FF00;
  --color-brand-magenta: #C8005A;

  /* Neutrals */
  --color-neutral-charcoal: #091338;
  --color-neutral-sam: #200446;
  --color-neutral-grey: #6B7280;
  --color-neutral-off-white: #F4F6F8;
  --color-neutral-white: #FFFFFF;

  /* Semantic */
  --background: #F4F6F8;
  --foreground: #091338;
  --primary: #003566;
  --primary-surface: #003366;
  --accent: #46FF00;
  --border: rgba(0, 0, 0, 0.06);

  /* Effects */
  --glow-green: 0px 0px 15px rgba(70, 255, 0, 0.4);
  --glow-green-strong: 0px 0px 25px rgba(70, 255, 0, 0.7);
  --glow-blue: 0px 0px 140px rgba(0, 53, 102, 0.30);
  --shadow-brand: 5px 5px 10px rgba(3, 256, 0, 0.90);
  --shadow-card: 0px 10px 30px rgba(0, 53, 102, 0.08);

  /* Radius */
  --radius-none: 0px;
  --radius-xs: 4px;
  --radius-s: 8px;
  --radius-m: 12px;
  --radius-l: 16px;
  --radius-xl: 25px;
  --radius-pill: 9999px;
}
```

### 10 Quy tắc Vàng
1. **Primary Button = Dark Navy `#003566`** — KHÔNG dùng Neon Green làm màu nền mặc định, nhưng BẮT BUỘC có viền Xanh Neon và Glow khi Hover.
2. **Neon Green `#46FF00` = Accent Only** — badge, glow, icon accent, CTA underline, Hover focus.
3. **Không dùng `#000000` thuần** — dùng `#091338` (Charcoal) cho text tối.
4. **Heading = Poppins**, Body = Inter — không ngoại lệ.
5. **Spacing phải là bội số của 8px** — 8, 16, 24, 32, 44...
6. **Dark section background tối thiểu `#001833`** — không dùng black thuần.
7. **Glassmorphism cards**: `bg-white/5 + backdrop-blur-xl + border-white/10`. Áp dụng thêm Micro-interactions (Hover to Zoom, Click to Flip) cho các Card chiến lược.
8. **Logo không được kéo dài, bóp méo** — giữ nguyên tỉ lệ gốc.
9. **Ảnh trong dark section phải có navy overlay** — không để ảnh "nổi" mất brand tone.
10. **Border radius button = pill (9999px)** — không dùng rectangular button.

---

*Tài liệu này là nguồn sự thật duy nhất (Single Source of Truth) cho thiết kế SEOSONA.*  
*Cập nhật lần cuối: 2026-06-04 · Phiên bản: 2.0*