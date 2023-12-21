import dynamic from "next/dynamic";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import "./globals.css";
import { Roboto } from "next/font/google";
import StoryblokProvider from "@/components/StoryblokProvider";
import { getStory } from "../utils/storyblok";
import Config from "@/components/Config";
import { GoogleTagManager } from '@next/third-parties/google'

const DynamicFooter = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  cache: {
    clear: "auto",
    type: "memory",
  },
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Khani",
  description: "Khani",
};

async function fetchData() {
  const story = await getStory("config");
  return {
    story: story ?? false,
  };
}

export default async function RootLayout({ children }) {
  const { story } = await fetchData();
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className={roboto.className}>
          <Config blok={story?.content} />
          {children}
          <DynamicFooter blok={story?.content} />
        </body>
        <GoogleTagManager gtmId="G-ML4X1FMSZE" dataLayerName="dataLayer" />
      </html>
    </StoryblokProvider>
  );
}
