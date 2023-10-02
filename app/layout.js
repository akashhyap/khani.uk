import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import "./globals.css";
import { Roboto } from "next/font/google";
import StoryblokProvider from "@/components/StoryblokProvider";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

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
        <body className={roboto.className}>
          {children}
        </body>
      </html>
    </StoryblokProvider>
  );
}
