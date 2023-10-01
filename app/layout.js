import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import "./globals.css";
import { Inter } from "next/font/google";
import StoryblokProvider from "@/components/StoryblokProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khani",
  description: "Khani",
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  cache: {
    clear: "auto",
    type: "memory",
  },
});

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </StoryblokProvider>
  );
}
