import Brand from "../components/Brand";
import Cta from "../components/Cta";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import News from "../components/News";
import Stats from "../components/Stats";
import type { HmPropsTp } from "../constants/_index";

const Home = ({ statsRef, counters }: HmPropsTp) => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      {/* Stats Section */}
      <Stats statsRef={statsRef} counters={counters} />

      {/* Mission Section */}
      <Mission />

      {/* Brands Section */}
      <Brand />

      {/* News Section */}
      <News />

      {/* CTA Section */}
      <Cta />
    </div>
  );
};

export default Home;
