
import Footer from "@/components/Global/Footer";
import DualImage from "@/components/Home/DualImage";
import Hero from "@/components/Home/Hero";
import ManyDivs from "@/components/Home/ManyDivs";
import SectioonLast from "@/components/Home/SectioonLast";
import SplitImageLayout from "@/components/Home/SplitImageLayout";
import Testimonial from "@/components/Home/Testimonial";
import ThreeBox from "@/components/Home/ThreeBox";
import Video from "@/components/Home/Video";
import VideoText from "@/components/Home/VideoText";
import VideoText2 from "@/components/Home/VideoText2";

export default function Home() {
  return (
    <div>
  <Hero />
  <ThreeBox/>
<Video/>

  <Testimonial/>
  <VideoText/>
  <SplitImageLayout/>
<DualImage/>
  <ManyDivs/>
    <VideoText2/>
  <SectioonLast/>

    </div>
  );
}
