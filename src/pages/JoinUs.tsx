import Cta from "../components/Cta";
import HeroContent from "../components/HeroContent";
import { useDocumentTitle } from "../components/UseDocument";

const JoinUs = () => {
  useDocumentTitle("Join Us");
  return (
    <div>
      <HeroContent
        header="Join Us"
        content="Our people are our most important asset. Whether front of house, spreading smiles and serving some of Nigeria’s finest food or in our kitchens, preparing scrumptious delights, we invest and grow our talent."
      />
      <Cta />
    </div>
  );
};

export default JoinUs;
