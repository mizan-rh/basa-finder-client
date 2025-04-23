import Bannar from "@/components/modules/home/bannar/Bannar";
import Contact from "@/components/modules/home/Contact/Contact";
import HeroBanner from "@/components/modules/home/Herobanner/HeroBanner";
import RentPropertySlider from "@/components/modules/home/PropertySlider/PropertySlider";
import PopularLocations from "@/components/modules/home/PupolarLocation/PopularLocations";
import RulesSection from "@/components/modules/home/RulesSection/RulesSection";
import TestimonialSection from "@/components/modules/home/TestimonialSection/TestimonialSection";

const page = () => {
  return (
    <div>
      {/* add or create all home page info & content static  */}
      {/* Bannar dynamic */}
      <div className="">
        <Bannar />
      </div>
      <div className="">
        <RentPropertySlider />
      </div>
      <div className="">
        <HeroBanner />
      </div>
      <div className="">
        <PopularLocations />
      </div>
      <div className="">
        <RulesSection />
      </div>

      <div className="">
        <TestimonialSection />
      </div>
      <div className="">
        <Contact />
      </div>

      {/* populer items list dynamic */}
      <div className=""></div>
      {/* listing dynamic */}
      <div className=""></div>
      {/* add why couse us static  */}

      {/* home page sort slider static upcoming */}
      <div className=""></div>
      {/* clint review dynamic*/}
      <div className=""></div>
      {/* our partners static upcoming */}
    </div>
  );
};

export default page;
