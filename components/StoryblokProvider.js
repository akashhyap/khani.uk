/** 1. Tag it as client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Import your components */
import Page from "./Page";
// import HtmlElements from "./HtmlElements";
import TitleH1 from "./TitleH1";
import Insights from "./Insights";
import InsightsCard from "./InsightsCard";
import Blog from "./Blog";
import FeaturedImage from "./FeaturedImage";
import BlogAuthorInfo from "./BlogAuthorInfo";
import BlogTeaser from "./BlogTeaser";
import UsefulGuides from "./UsefulGuides";
import FluidLayout from "./FluidLayout";
import Content from "./Content";
import TableOfContent from "./TableOfContent";
import ArticleLists from "./ArticleLists";
import Category from "./Category";
import ImageOverlayCard from "./ImageOverlayCard";
import CardItem from "./CardItem";
import RelatedArticles from "./RelatedArticles";
import Config from "./Config";
import MenuLink from "./MenuLink";
import FooterLink from "./FooterLink";
import SubmenuLink from "./SubmenuLink";

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    h1_title: TitleH1,
    insights: Insights,
    insightsCard: InsightsCard,
    blog: Blog,
    featuredImage: FeaturedImage,
    blogAuthorInfo: BlogAuthorInfo,
    blogTeaser: BlogTeaser,
    "useful-guides": UsefulGuides,
    fluidLayout: FluidLayout,
    content: Content,
    tableOfContent: TableOfContent,
    "article-lists": ArticleLists,
    category: Category,
    "image-overlay-card": ImageOverlayCard,
    "card-item": CardItem,
    "related-articles": RelatedArticles,
    config: Config,
    "menu_link": MenuLink,
    "submenu_link": SubmenuLink,
    "footer_link": FooterLink,
    // config: Config,
    // menu: Menu,
    // footer: Footer,
  },
});

export default function StoryblokProvider({ children }) {
  return children;
}
