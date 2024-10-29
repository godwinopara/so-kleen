import img1 from "../images/hero-bg.jpg";

function About() {
  return (
    <section
      className="flex items-center xl:min-h-[90vh] max-w-[1150px] mx-auto"
      id="about"
    >
      <div>
        <div className="xl:flex items-center justify-between mb-8">
          <div className=" xl:w-[55%]">
            <div className="px-6 py-4 xl:py-0 xl:px-0 mb-8">
              <h2 className=" hidden xl:block text-3xl xl:text-7xl mb-6 font-bold">
                About So-Kleen
              </h2>
              {/* Heading for mobile */}
              <div className="mb-5">
                <h2 className="text-4xl uppercase mb-2 font-bold xl:hidden">
                  About Us
                </h2>
                <hr className="bg-red-600 h-[7px] w-[80px]" />
              </div>
              {/* ====================== */}
              <div className="xl:text-xl">
                <p className="mb-3 font-semibold">
                  So-kleen limited is a professional cleaning and space
                  brightening company.
                </p>
                <p className="hidden xl:block font-semibold">
                  Founded in 2005, we quickly built a reputation as a leading
                  provider of commercial and residential cleaning solution in
                  the industry. Our solutions are designed to solve the mild to
                  heavy dirt management problems that individuals, families and
                  corporate organizations face.
                </p>
              </div>

              {/* Mobile Button */}
              <button className="bg-red-600 uppercase font-bold text-white rounded-sm  h-[40px] w-[150px] px-4 mt-5">
                Read More
              </button>
              {/* ========== */}
            </div>
            <hr className="hidden xl:block bg-red-500 h-[3px]" />
          </div>
          <div className="hidden xl:block xl:w-[40%]">
            <img src={img1} alt="" />
          </div>
        </div>
        <p className="hidden xl:block">
          As an A-rated professional cleaning firm, we also know that a cleaner
          environment supports a healthier, more productive and profitable
          lifestyle; that is why our thorough cleaning service is made to leave
          you happier and more satisfied.
          <br />
          <br />
          Our hands-on approach, coupled with our experience, our attention to
          details and the professionalism exhibited by management, employees and
          our commitment to customer satisfaction, sets us apart.
          <br />
          <br />
          Our continuous pursuit of service perfection has resulted in
          consistent growth each year.
        </p>
      </div>
    </section>
  );
}

export default About;
