type Portfolio = {
  id: string;
  title: string;
  image: string;
  projectLink: string;
  githubLink: string;
  date: string;
  technologies: string[];
  description: string;
  chDescription: string;
};

export const portfolios: Record<string, Portfolio> = {
  'my-journey': {
    id: 'my-journey',
    title: "Irene Lee's Journey",
    image: './public/portfolios/my-journey.png',
    projectLink: 'https://my-journey-n9i6.vercel.app/',
    githubLink: 'https://github.com/IreneLee18/my-journey',
    date: 'October 2025',
    technologies: [
      'React',
      'React Router',
      'TypeScript',
      'Shadcn UI',
      'Tailwind CSS',
      'dnd kit',
      'zustand',
      'TanStack Query',
      'TipTap',
      'Supabase',
      'Prisma',
    ],
    description:
      "Irene Lee's Journey is a modern full-stack personal life documentation platform for sharing and recording daily moments. The website offers a complete article management system featuring a rich text editor, image upload with drag-and-drop sorting, and responsive design. It supports multi-language switching (English/Chinese) and includes authentication with an admin dashboard. The platform is optimized for mobile devices with an intelligent image compression system specifically designed for iPhone high-resolution photos. It automatically compresses files over 2MB to under 500KB, reducing both file size and upload time by an average of 75-80%, significantly enhancing user experience.",
    chDescription:
      "Irene Lee's Journey 是一個使用現代化技術打造的全端個人生活記錄平台，用於分享與紀錄日常生活點滴。網站提供完整的文章管理系統，包含富文本編輯器、圖片上傳與拖放排序、響應式設計等功能。平台支援多語言切換（中英文），並整合身份驗證與後台管理系統。特別針對行動裝置優化了圖片上傳體驗，實作智能壓縮系統專門處理 iPhone 高解析度照片，將 2MB 以上的檔案自動壓縮至 500KB 以下，平均減少 75-80% 的檔案大小與上傳時間，大幅提升使用者體驗。專案已部署於 Vercel，提供穩定的線上服務。",
  },
  portfolio: {
    id: 'portfolio',
    title: 'Portfolio',
    image: './public/portfolios/portfolio-website.png',
    projectLink: 'https://portfolio-website-n9i6.vercel.app/',
    githubLink: 'https://github.com/IreneLee18/portfolio',
    date: 'October 2025',
    technologies: [
      'React',
      'React Router',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn UI',
    ],
    description:
      "This is a portfolio website for Irene Lee. It is a simple website that displays Irene Lee's projects and skills.",
    chDescription:
      '這是一個 Irene Lee 的個人作品集網站。它是一個簡單的網站，用於展示 Irene Lee 的作品和技能。',
  },
};
