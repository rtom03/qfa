import HeroContent from "../components/HeroContent";
import { useDocumentTitle } from "../components/UseDocument";

const Esg = () => {
  useDocumentTitle("Esg");
  return (
    <div>
      <HeroContent
        header="ESG"
        content="QFA is a multi-brand dining and delivery company, operating a
          portfolio of delicious food brands, including international icons and
          our own home-grown favourites."
      />
    </div>
  );
};

export default Esg;
