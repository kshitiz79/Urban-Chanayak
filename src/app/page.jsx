import DualImage from "@/components/Home/DualImage";
import Hero from "@/components/Home/Hero";
import ManyDivs from "@/components/Home/ManyDivs";
import SectioonLast from "@/components/Home/SectioonLast";
import SplitImageLayout from "@/components/Home/SplitImageLayout";
import Testimonial from "@/components/Home/Testimonial";
import ThreeBox from "@/components/Home/ThreeBox";
import Video from "@/components/Home/Video";
import VideoText from "@/components/Home/VideoText";

import VideoText3 from "@/components/Home/VideoText3";

export default function Home() {
  return (
    <div>
      <Hero />
      <ThreeBox />
      <Video />
      <Testimonial />
      <VideoText />
      <SplitImageLayout />
      <VideoText3 />
      <DualImage />
      <ManyDivs />
      <SectioonLast />
    </div>
  );
}
