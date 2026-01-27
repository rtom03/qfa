import HeroContent from "../components/HeroContent";
import { useDocumentTitle } from "../components/UseDocument";

const JoinUs = () => {
  useDocumentTitle("Join Us");
  return (
    <div>
      <HeroContent
        header="Join Us"
        content="Our people are most important asset. Whether front of house, spreading smiles and serving some of Nigeria’s finest food or in our kitchens, preparing scrumptious delights, we invest and grow our talent."
      />
    </div>
  );
};

export default JoinUs;
