const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Weibang Bai",
    image: "bwb.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Assistant Professor, Researcher, Ph.D. Supervisor",
    bio: "Dr. Weibang Bai is an Assistant Professor at ShanghaiTech University whose research centers on medical robotics, dexterous manipulation, and AI-driven hybrid bionic systems.",
    email: "wbbai@shanghaitech.edu.cn",
    linkedin: "https://www.linkedin.com/in/weibang-bai-358660125/?originalSubdomain=uk",
    github: "",
    instagram: "",
  },
  projects: [
    {
      name: `MAYBERoboLab`,
      href: "https://sist.shanghaitech.edu.cn/baiwb/main.htm",
    },
  ],
  // blog setting (required)
  blog: {
    title: "MAYBERoboLab",
    description: "Welcome to my website!",
    scheme: "system", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://www.mayberobolab.xyz/",
  since: 2025, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
