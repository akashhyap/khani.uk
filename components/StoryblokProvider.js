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
import DogBreeds from "./DogBreeds";
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
import ImageTextSplit from "./ImageTextSplit";
import ArticleContentArea from "./ArticleContentArea";
import Images from "./Images";
import ContactForm from "./Contact";
import SubscribeNewsletter from "./SubscribeNewsletter.js";
import Diet from "./Diet";
import Health from "./Health";
import SmallDogs from "./SmallDogs";
import BigDogs from "./BigDogs";
import Products from "./Products";
import Faq from "./Faq";
import FaqContent from "./FaqContent";

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
    "dog-breeds": DogBreeds,
    fluidLayout: FluidLayout,
    content: Content,
    tableOfContent: TableOfContent,
    "article-lists": ArticleLists,
    category: Category,
    "image-overlay-card": ImageOverlayCard,
    "card-item": CardItem,
    "related-articles": RelatedArticles,
    config: Config,
    menu_link: MenuLink,
    submenu_link: SubmenuLink,
    footer_link: FooterLink,
    "image-text-split": ImageTextSplit,
    "article-content-area": ArticleContentArea,
    images: Images,
    contact: ContactForm,
    subscribeNewsletter: SubscribeNewsletter,
    diet: Diet,
    health: Health,
    "small-dogs": SmallDogs,
    "big-dogs": BigDogs,
    products: Products,
    faq: Faq,
    faqContent: FaqContent,
    // config: Config,
    // menu: Menu,
    // footer: Footer,
  },
});

export default function StoryblokProvider({ children }) {
  return children;
}
