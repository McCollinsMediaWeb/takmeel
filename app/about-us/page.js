import ContactForm from "@/components/ContactForm/ContactForm";
import PageHeader from "@/components/PageHeader/PageHeader";
import AboutSlider from "@/components/AboutSlider/AboutSlider";
import AboutVisionMission from "@/components/AboutVisionMission/AboutVisionMission";

export default function AboutUs() {
    return (
      <div>
        <PageHeader/>
        <AboutSlider/>
        <AboutVisionMission/>
        <ContactForm/>
      </div>
    );
  }
  