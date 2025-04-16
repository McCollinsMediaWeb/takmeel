import ContactForm from "@/components/ContactForm/ContactForm";
import PageHeader from "@/components/PageHeader/PageHeader";
import AboutSlider from "@/components/AboutSlider/AboutSlider";
import AboutVisionMission from "@/components/AboutVisionMission/AboutVisionMission";
import Founders from "@/components/Founders/Founders";

export default function AboutUs() {
    return (
      <div>
        <PageHeader/>
        <AboutSlider/>
        <AboutVisionMission/>
        <Founders/>
        <ContactForm/>
        
      </div>
    );
  }
  