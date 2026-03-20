import { Metadata } from "next";

export const SITE_CONFIG = {
  name: "Roost and Roast",
  description:
    "Experience the finest charcoal chicken and gourmet roasts in West Gosford. Fresh, flavorful, and fantastic.",
  url: "https://www.roostnroast.com.au",
  ogImage: "https://www.roostnroast.com.au/logos/logo-rounded.svg", // Fallback to logo if no OG image
  links: {
    facebook: "https://www.facebook.com/people/Roost-and-Roast/61586264004334/",
    instagram: "https://www.instagram.com/roost_roast/",
  },
};

export const constructMetadata = ({
  title = SITE_CONFIG.name,
  description = SITE_CONFIG.description,
  image = SITE_CONFIG.ogImage,
  icons = "/logos/logo-rounded.svg",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata => {
  return {
    title: {
      default: title,
      template: `%s | ${SITE_CONFIG.name}`,
    },
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      locale: "en_AU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@roost_roast",
    },
    icons,
    metadataBase: new URL(SITE_CONFIG.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
};
