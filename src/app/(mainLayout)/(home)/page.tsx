import Bannar from "@/components/modules/home/bannar/Bannar";
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
      <div className="px-4 md:px-10">
        <HeroBanner />
      </div>
      <div className="px-4 md:px-10">
        <RentPropertySlider />
      </div>
      <div className="px-4 md:px-10">
        <PopularLocations />
      </div>

      <div className="">
        <RulesSection />
      </div>
      <div className="px-4 md:px-10">
        <TestimonialSection />
      </div>
      <div className=""></div>
    </div>
  );
};

export default page;
