import img from "../images/why2.jpeg";
import img2 from "../images/why-mobile.jpeg";
import MobileLayout from "./MobileLayout";
const WhyChooseUs = () => {
  return (
    <section id="why">
      <div>
        <img
          src={img}
          alt="our services"
          className="w-full object-center object-cover hidden lg:block"
        />
        <img
          src={img2}
          alt="our services"
          className="w-full object-center object-cover lg:hidden"
        />
      </div>
      <div className="xl:mb-10 max-w-[1150px] mx-auto xl:py-10">
        <div className="xl:mb-10">
          <div className="">
            <h2 className="hidden xl:block text-7xl mt-8 mb-8 font-bold">
              Why Choose Us?
            </h2>
            <h3 className="hidden xl:block text-xl font-bold mb-5">
              CARING FOR YOUR PREMISES
            </h3>
            <p className="font-semibold text-xl mb-10 hidden xl:block">
              At Reds Cleaning Services, we take pride in treating your space
              with the utmost care and respect. Whether it’s a home, office, or
              commercial property, we understand that every environment is
              unique and requires personalized attention. Our team is committed
              to delivering cleaning solutions that not only maintain but
              enhance the beauty and functionality of your premises.
            </p>

            <hr className="bg-red-500 h-[3px] hidden xl:block" />
          </div>
        </div>
        <div className="hidden xl:grid grid-cols-2 gap-x-10 ">
          <div>
            <p>
              At Reds Cleaning Services, we take great pride in treating your
              space with the utmost care and respect. Whether it’s a home,
              office, or commercial property, we recognize that every
              environment is unique and deserves personalized attention. Our
              team is dedicated to providing cleaning solutions that not only
              preserve but also enhance the beauty, functionality, and longevity
              of your premises.
            </p>
            <br />
            <p>
              Customers continue to choose us for our impeccable reputation and
              strong work ethic. If you're still unsure about hiring a cleaning
              service, here are a few reasons why Reds Cleaning Services stands
              out:{" "}
            </p>
            <br />
            <ul className="list-disc list-inside pl-8 grid gap-y-3">
              <li>
                <strong>Professional yet personable approach:</strong> We pride
                ourselves on being approachable while maintaining the highest
                level of professionalism.
              </li>
              <li>
                <strong>High standards & attention to detail:</strong> Our
                commitment to excellence means no detail goes overlooked.
              </li>
              <li>
                <strong>Accountability:</strong> We fully understand the
                responsibility we have for the quality of our work.
              </li>
              <li>
                <strong>Experienced & specialized team:</strong> Our staff
                consists of skilled professionals with extensive expertise in
                cleaning.
              </li>
              <li>
                <strong>Trusted by businesses and homes:</strong> Dozens of
                satisfied clients trust us exclusively—references are available
                upon request.
              </li>
              <li>
                <strong>Long-term experience:</strong> Many of our team members
                have been with us for years, bringing consistency and expertise
                to every job.
              </li>
              <li>
                <strong>Knowledgeable & equipped:</strong> We know which
                cleaning solutions are best for each scenario and understand the
                risks of improper use.
              </li>
              <li>
                <strong>Quality assurance:</strong>Our cleaning process is
                overseen by proactive managers who ensure we meet the highest
                standards.
              </li>
              <li>
                <strong>Industry-leading attention to detail:</strong>We are,
                without a doubt, the most meticulous cleaning company in the
                business—period!
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
        desc="At Reds Cleaning Services, we take great pride in treating your
              space with the utmost care and respect. Whether it’s a home,
              office, or commercial property, we recognize that every
              environment is unique and deserves personalized attention. Our
              team is dedicated to providing cleaning solutions that not only
              preserve but also enhance the beauty, functionality, and longevity
              of your premises."
        url="/why-choose-us"
      />
    </section>
  );
};

export default WhyChooseUs;
