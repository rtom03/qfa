import HeroContent from "../components/HeroContent";
import News from "../components/News";
import { useDocumentTitle } from "../components/UseDocument";

const NewsPage = () => {
  useDocumentTitle("News");
  return (
    <div>
      <HeroContent
        header="News"
        content="QFA is a multi-brand dining and delivery company, operating a
          portfolio of delicious food brands, including international icons and
          our own home-grown favourites."
      />
      <News />
    </div>
  );
};

export default NewsPage;
