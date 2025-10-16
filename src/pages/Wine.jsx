import { useState } from "react";
import Slider from "../components/slider/slider";
import FeaturesSection from "../components/features-section/featuresSection";
import List from "../wine-components/list/list";
import SommelierSection from "../components/sommelier-section/sommelierSection";
import AboutSommelier from "../components/sommelier-section/aboutSommelier";

export default function Wine() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
    <Slider />
    <FeaturesSection />
    <List searchTerm={searchTerm} />
    <SommelierSection />
    <AboutSommelier />
    </>
  );
}
