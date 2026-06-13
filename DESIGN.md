# SEOSONA Design System

## 1. Sidebar Navigation Pattern (`PostSidebarNav` Style)
This is the unified design pattern for vertical sidebar navigations across the SEOSONA website (Knowledge Hubs, Blog Posts, and Case Studies).

### Components

**1. Header Dropdown Box**
Used to indicate the current category or context.
- **Container**: `border border-[#E2E8F0] rounded-xl shadow-sm bg-white`
- **Hover State**: `hover:bg-[#F0F6FF] transition-all duration-200`
- **Icon Wrapper**: `w-6 h-6 rounded-md bg-[#F0F6FF] text-[#3BA6F1] flex items-center justify-center`
- **Text**: `text-[14px] font-bold !text-[#04091A]`

**2. Navigation Links / Accordion Items**
Used for listing articles or sub-categories.
- **Base State**: `text-[13px] !text-[#64748B] font-normal px-2.5 py-[6px] rounded-md transition-all duration-200`
- **Hover State**: `hover:bg-[#F8FAFC] hover:!text-[#3BA6F1] hover:translate-x-1`
- **Active State**: `bg-[#F0F6FF] !text-[#3BA6F1] font-semibold shadow-sm ring-1 ring-[#3BA6F1]/10`

### Rules
- **No Dark Boxes**: Do not use the dark theme (`#04091A` backgrounds) for sidebar containers. Always stick to the light, border-driven approach.
- **Animation**: Always use `translate-x-1` for link hovers to provide a subtle interactive feel.
- **Colors**: 
  - Primary Accent: `#3BA6F1` (Blue)
  - Light Hover Background: `#F0F6FF`
  - Text Active: `#3BA6F1`
  - Text Inactive: `#64748B`
  - Text Header: `#04091A`
