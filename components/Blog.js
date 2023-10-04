import ArticleHeader from "./ArticleHeader";
import ArticleBody from "./ArticleBody";

const Blog = ({blok,full_slug}) => {
  // console.log("ArticleHeader",blok);
  return (
    <>
      <ArticleHeader blok={blok} full_slug={full_slug} />
      <ArticleBody blok={blok} />
    </>
  );
};
export default Blog;
