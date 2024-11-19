import About from "../components/About";
import Carousel from "../components/Carousel";
import Carpet from "../components/Carpet";
import Contact from "../components/Contact";
import ContactForm from "../components/ContactForm";
import Marble from "../components/Marble";
import Nav from "../components/Nav";
import OtherServices from "../components/OtherServices";
import OurServices from "../components/OurServices";
import PestControl from "../components/PestControl";
import WhyChooseUs from "../components/WhyChooseUs";

const HomeMobile = () => {
  return (
    <>
      <Carousel />
      <Nav />
      <About />
      <WhyChooseUs />
      <OurServices />
      <Carpet />
      <Marble />
      <OtherServices />
      <PestControl />
      <Contact />
      <ContactForm />
    </>
  );
};

export default HomeMobile;
