import Carousel from "../components/Carousel";

const WhyChooseUsMobile = () => {
  return (
    <>
      <Carousel />
      <div className="px-5 py-10">
        <div className="xl:mb-10">
          <div className="">
            <div className="mb-5">
              <h2 className="text-3xl uppercase mb-2 font-bold xl:hidden">
                CARING FOR YOUR PREMISES
              </h2>
              <hr className="bg-red-600 h-[7px] w-[80px] xl:hidden" />
            </div>
            <h3 className="font-bold mb-5">CARING FOR YOUR PREMISES</h3>
            <p className="mb-10">
              At Reds Cleaning Services, we take pride in treating your space
              with the utmost care and respect. Whether it’s a home, office, or
              commercial property, we understand that every environment is
              unique and requires personalized attention. Our team is committed
              to delivering cleaning solutions that not only maintain but
              enhance the beauty and functionality of your premises.
            </p>

            <hr className="bg-red-500 h-[3px]" />
          </div>
        </div>
        <div className="my-6">
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
            <ul className="list-disc list-inside pl-2 grid gap-y-3">
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
          <div className="my-6">
            <h3 className="uppercase text-red-500 font-bold text-lg mb-2">
              Our Core Values
            </h3>
            <ul className="list-disc list-inside pl-4">
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
    </>
  );
};

export default WhyChooseUsMobile;
