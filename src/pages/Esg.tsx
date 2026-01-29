import HeroContent from "../components/HeroContent";
import { useDocumentTitle } from "../components/UseDocument";

const Esg = () => {
  useDocumentTitle("Esg");
  return (
    <div>
      <HeroContent
        header="Environmental & Social Responsibility"
        content="We are a multi-brand dining and delivery company"
      />
    </div>
  );
};

export default Esg;
