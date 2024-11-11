import img1 from "../images/hero-bg.jpeg";
import MobileLayout from "./MobileLayout";

function About() {
  return (
    <section
      className="flex items-center xl:min-h-[90vh] max-w-[1150px] mx-auto xl:mb-20"
      id="about"
    >
      <div className="hidden xl:block">
        <div className="flex items-center justify-between mb-8">
          <div className="w-[55%]">
            <div className="mb-8">
              <h2 className="text-7xl mb-6 font-bold">
                About Reds Cleaning Services
              </h2>
              <div className="text-xl">
                <p className="mb-3 font-semibold">
                  Reds Cleaning Services is a professional cleaning company
                  dedicated to brightening spaces and providing top-notch
                  cleaning solutions.
                </p>
                <p className="font-semibold">
                  Founded in 2005, we’ve established ourselves as a trusted
                  leader in both commercial and residential cleaning. Our
                  services are tailored to address a wide range of cleaning
                  challenges, from light upkeep to more demanding dirt and grime
                  management, serving the needs of individuals, families, and
                  businesses alike.
                </p>
              </div>
            </div>
            <hr className="bg-red-500 h-[3px]" />
          </div>
          <div className="w-[40%]">
            <img src={img1} alt="" />
          </div>
        </div>
        <p>
          As an A-rated professional cleaning company, we understand that a
          clean environment is key to promoting a healthier, more productive,
          and profitable lifestyle. That's why our comprehensive cleaning
          services are designed not only to meet but exceed your expectations,
          leaving you happier and more satisfied with every visit.
          <br />
          <br />
          What sets us apart is our hands-on approach, combined with years of
          experience, meticulous attention to detail, and a commitment to
          excellence shared by our management team and staff. Our dedication to
          customer satisfaction is at the heart of everything we do.
          <br />
          <br />
          This unwavering focus on service perfection has driven our consistent
          growth year after year.
        </p>
      </div>
      <MobileLayout
        title="About Us"
        desc="Reds Cleaning Services is a professional cleaning company
                  dedicated to brightening spaces and providing top-notch
                  cleaning solutions."
      />
    </section>
  );
}

export default About;
