import img from "../images/otherservices.jpeg";
import img2 from "../images/otherservices-mobile.jpeg";
import MobileLayout from "./MobileLayout";

const OtherServices = () => {
  return (
    <section id="other-services">
      <div>
        <img
          src={img}
          alt="our services"
          className=" w-full object-top object-cover hidden lg:block"
        />
        <img
          src={img2}
          alt="our services"
          className=" w-full object-top object-cover lg:hidden"
        />
      </div>
      <div className="hidden xl:block mb-10 max-w-[1100px] mx-auto xl:py-10">
        <div className="mb-10">
          <div className="">
            <h2 className="text-7xl mt-8 mb-8 font-bold">Other Services</h2>
            <p className="font-semibold text-xl mb-10">
              Whatever your cleaning needs, we’ll tailor our services to fit
              your specific requirements. We take the time to understand your
              needs, create a customized cleaning plan, and deliver the highest
              quality service, all while adhering to the best hygiene and safety
              practices. Your satisfaction is our priority, and we’ll ensure
              every detail is handled with care.
            </p>

            <hr className="bg-red-500 h-[3px]" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-10">
          <div>
            <h3 className="uppercase text-red-500 font-bold text-lg mb-5">
              Post -Construction/Renovation Cleaning
            </h3>
            <p>
              Reds Cleaning Services Ltd is proudly recognized as the most
              detailed post-construction cleaning company in Nigeria. We have
              the expertise, human resources, and equipment to provide
              efficient, top-quality cleaning services tailored to meet your
              needs.
            </p>
            <br />
            <p>
              Our Post-Construction Cleaning Services Include (But Not Limited
              To):
            </p>
            <br />

            <ul className="list-disc list-inside pl-8">
              <li>
                <strong>Washing all surfaces:</strong> Thorough cleaning of
                every surface to remove dust, dirt, and debris.
              </li>
              <li>
                <strong>High dust removal:</strong> We clean ceiling pipes,
                ductwork, vents, light fixtures, and more, eliminating built-up
                dust from every corner.
              </li>
              <li>
                <strong>
                  Stain removal, scrubbing, dusting, and vacuuming:
                </strong>
                We tackle stains and perform meticulous dusting and vacuuming of
                all surfaces.
              </li>
              <li>
                <strong>Cleaning insides of desks and file cabinets:</strong> We
                clean the interiors of desks, cabinets, and drawers to remove
                construction dust and debris.
              </li>
              <li>
                <strong>
                  Detailed kitchen and bathroom scrubbing and sanitizing:
                </strong>
                We make your kitchens and bathrooms sparkle, ensuring they're
                fully sanitized and ready for use.
              </li>
              <li>
                <strong>Floor scrubbing, polishing, and tile cleaning:</strong>{" "}
                We scrub floors, polish stainless steel, wipe walls, and tackle
                tile cleaning for a flawless finish.
              </li>
              <li>
                <strong>Floor waxing and buffing:</strong> We restore your
                floors with professional waxing and buffing services for a
                glossy, smooth appearance.
              </li>
              <li>
                <strong>Cleaning window sills and frames:</strong> We clean and
                sanitize window sills and frames, ensuring they look pristine.
              </li>
              <li>
                <strong>Window and glass cleaning: </strong>Our team removes
                streaks, stains, scraping marks, and etching, leaving your
                windows and glass sparkling clean.
              </li>
            </ul>
            <br />
            <div>
              <h3 className="uppercase text-red-500 font-bold text-lg mb-3">
                Window Cleaning
              </h3>
              <p>
                We offer a thorough, high-quality window cleaning service, using
                professional-grade cleaning materials and equipment. Our
                competitive prices and reliable service ensure that you’ll see a
                noticeable difference in the clarity and shine of your windows,
                whether at home or in the office. You can count on us for
                streak-free results that enhance the appearance of your space.
              </p>
            </div>
            <br />
            <div>
              <h3 className="uppercase text-red-500 font-bold text-lg mb-3">
                End Of Tenancy Cleaning
              </h3>
              <p>
                Moving houses? Our professional end-of-tenancy cleaning service
                provides a comprehensive deep clean of the entire property,
                ensuring it's in pristine condition for the start or end of a
                tenancy. With years of experience in this area, we have earned
                the trust of many satisfied customers who rely on us for a
                seamless, hassle-free cleaning experience. Let us take care of
                the details so you can focus on your move.
              </p>
            </div>
          </div>
          <div>
            <h3 className="uppercase text-red-500 font-bold text-lg">
              Floor Care And Maintenance
            </h3>
            <p>
              Hard surface flooring—such as tile, vinyl, terrazzo, granite, and
              marble—requires specialized knowledge for proper cleaning and
              maintenance. As a trusted janitorial services company, we
              continually train our technicians on the latest techniques and
              effective trends in floor care.
            </p>
            <br />
            <p>
              Keep your hardwood and tile floors looking pristine with our
              professional cleaning and maintenance services, designed to
              enhance their longevity and appearance. Whether it’s restoring
              shine, removing stains, or regular upkeep, we ensure your floors
              stay clean, beautiful, and well-maintained.
            </p>
            <ul className="list-disc list-inside pl-8 mb-5">
              <li>Strip, Seal And Polish Floors (Marble, Terrazzo, Ceramic)</li>
              <li>Scrub And Recoat Tile Floors</li>
              <li>Scrub And Buff Tile Floors</li>
              <li>High Speed Floor Burnishing </li>
              <li>Scrub Concrete, Ceramic And Quarry Tile Floors</li>
            </ul>
            <div className="mb-4">
              <h3 className="uppercase text-red-500 font-bold text-lg mb-3">
                Rest Room Cleaning
              </h3>
              <p>
                We Are Dedicated To Creating And Maintaining Washroom
                Environments That Are Not Only Clean And Hygienic But Also Safe,
                Pleasant And Welcoming. We're Confident That You'll Be Impressed
                With Our Standards For Quality And Attention To Detail.
              </p>
            </div>
            <h3 className="uppercase text-red-500 font-bold text-lg mb-4">
              Special Request Cleaning
            </h3>
            <h3 className="uppercase text-red-500 font-bold">
              Whatever Your Professional Cleaning Needs Are, We’re Confident
              We’ll Make You Smile Always.
            </h3>
          </div>
        </div>
      </div>
      <MobileLayout
        title="Other Services"
        desc="Whatever your cleaning needs, we’ll tailor our services to fit
              your specific requirements. We take the time to understand your
              needs, create a customized cleaning plan, and deliver the highest
              quality service, all while adhering to the best hygiene and safety
              practices. Your satisfaction is our priority, and we’ll ensure
              every detail is handled with care."
        url="/other-services"
      />
    </section>
  );
};

export default OtherServices;
