// import Footer from "@/components/layout/Footer";
// import Navbar from "@/components/layout/Navbar";
import IconStar from "@/components/sections/IconStar";
import MatchSchedule from "@/components/sections/MatchSchedule";
import Partners from "@/components/sections/Partners";
import Slider from "@/components/sections/Slider";
import ThunderGallery from "@/components/sections/ThunderGallery";
import Welcome from "@/components/sections/Welcome";
import WhatUs from "@/components/sections/WhatUs";


export default function Home() {
  return (
    <>
    <Slider/>
    <Welcome/>
    <WhatUs/>
    <IconStar/>
    <MatchSchedule/>
    <ThunderGallery/>
    <Partners/>
    </>
  );
}


