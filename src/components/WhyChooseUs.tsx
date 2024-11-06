import img from "../images/why2.jpg";
import MobileLayout from "./MobileLayout";
const WhyChooseUs = () => {
  return (
    <section id="why">
      <img
        src={img}
        alt="our services"
        className="xl:h-[493.233px] xl:w-full xl:object-top xl:object-cover"
      />
      <div className="xl:mb-10 max-w-[1150px] mx-auto">
        <div className="xl:mb-10">
          <div className="">
            <h2 className="hidden xl:block text-7xl mt-8 mb-8 font-bold">
              Why Choose Us?
            </h2>
            <h3 className="hidden xl:block text-xl font-bold mb-5">
              CARING FOR YOUR PREMISES
            </h3>
            <p className="font-semibold text-xl mb-10 hidden xl:block">
              Having a clean building is about making a great impression,
              creating an endearing environment for visitors and clients, and
              maintaining a productive environment for your staff.
            </p>

            <hr className="bg-red-500 h-[3px] hidden xl:block" />
          </div>
        </div>
        <div className="hidden xl:grid grid-cols-2 gap-x-10 ">
          <div>
            <p>
              We genuinely care about the buildings we work in. The way your
              space is presented speaks volume, and the responsibility for this
              will always start and end with us. Above all, we want to help you
              to free up your time so that you can do what you do best.
            </p>
            <br />
            <p>
              Customers continue to patronize us because of our impeccable
              reputation, and solid work ethic. If you are on the fence
              considering hiring a cleaning service, please consider the
              following about our company:{" "}
            </p>
            <br />
            <ul className="list-disc list-inside pl-8">
              <li>We offer a professional yet very personable approach</li>
              <li>We have high standards and a great attention to detail</li>
              <li>
                We understand the responsibility we have for the work we do
              </li>
              <li>
                Our team is made up of experienced and specialist personnel
              </li>
              <li>
                {" "}
                We are trusted exclusively by dozens of businesses and homes,
                with references available.
              </li>
              <li>
                We are experienced, with the majority of our employees having
                been with us for many years.
              </li>
              <li>
                We are knowledgeable and equipped; we know what cleaning
                solutions should be used per scenario, and what the dangers they
                can impose if not used correctly.
              </li>
              <li>
                Our cleaning process is supported by proactive managers who
                uphold the highest quality assurance standards.
              </li>
              <li>
                We are undisputedly the most detailed cleaning company in the
                industry, Period!
              </li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase text-red-500 font-bold text-lg">
              Our Core Values
            </h3>
            <ul className="list-disc list-inside pl-8">
              <li>Integrity</li>
              <li>Professionalism</li>
              <li>Innovation</li>
              <li>Responsibility</li>
              <li>Excellence</li>
              <li>High level of productivity</li>
              <li>Team work</li>
            </ul>
          </div>
        </div>
      </div>
      {/* ========================== */}
      {/* ===== Mobile Content ===== */}
      <MobileLayout
        title="Why Choose Us?"
        desc="We genuinely care about the buildings we work in. The way your
              space is presented speaks volume, and the responsibility for this
              will always start and end with us. Above all, we want to help you
              to free up your time so that you can do what you do best."
      />
    </section>
  );
};

export default WhyChooseUs;
