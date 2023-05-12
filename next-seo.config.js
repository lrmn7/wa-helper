/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  defaultTitle: "WA Helper",
  description: "Send Whastapp message without saving the contact first.",
  canonical: "https://wa.is-a.fun",
  openGraph: {
    url: "https://wa.is-a.fun",
    title: "WA Helper",
    description: "Send Whastapp message without saving the contact first.",
    type: "website",
    images: [
      {
        url: "https://cdn.discordapp.com/attachments/1091192083852828744/1106473470499504219/og.png",
        alt: "wa.is-a.fun whatsapp-helper",
        width: 800,
        height: 600,
      },
    ],
    site_name: "wa.is-a.fun",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "https://cdn-icons-png.flaticon.com/512/408/408708.png?w=740",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
  ],
};

export default defaultSEOConfig;
