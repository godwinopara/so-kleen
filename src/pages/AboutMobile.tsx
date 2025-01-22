import Carousel from "../components/Carousel";

const AboutMobile = () => {
  return (
    <>
      <Carousel />
      <div className="px-5 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="mb-8">
              <div className="mb-5">
                <h2 className="text-3xl uppercase mb-2 font-bold xl:hidden">
                  About Reds Cleaning Services
                </h2>
                <hr className="bg-red-600 h-[7px] w-[80px] xl:hidden" />
              </div>
              <div>
                <p className="mb-3 font-semibold">
                  Reds Cleaning Services is a professional cleaning company
                  dedicated to brightening spaces and providing top-notch
                  cleaning solutions.
                </p>
                <p className="font-semibold">
                  Founded in 2024, we’ve established ourselves as a trusted
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
    </>
  );
};

export default AboutMobile;
