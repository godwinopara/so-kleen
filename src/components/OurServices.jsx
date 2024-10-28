import img from "../images/office.jpg";

function OurServices() {
  return (
    <section id="our-services">
      <img src={img} alt="services img" />
      <div className="max-w-[1150px] mx-auto mb-10">
        <div className="py-6">
          <h2 className="text-7xl mt-8 mb-8 font-bold">
            Janitorial/Office Cleaning
          </h2>

          <p className="font-semibold text-xl mb-10">
            Whatever your business, organization or sector, we'll adapt our
            cleaning services to match your needs. We will discuss your
            requirements, design the perfect office cleaning specification and
            deliver the very best service in tune with best hygiene practices.
          </p>

          <hr className="bg-red-500 h-[3px]" />
        </div>
        <div className="py-6">
          <p className="mb-6">
            A clean and hygienic office is a more productive place for your
            staff to work and a more pleasant place for your clients to visit.
            We provide high quality, cost-effective office cleaning solutions,
            and currently work with a number of companies across Lagos.{" "}
          </p>
          <h3 className="uppercase mb-6 font-bold text-xl text-red-600">Our janitorial cleaning plan</h3>
          <p className="mb-6">
            We will draw up a plan to cater for your specific requirements and
            will work at a time that is most convenient for you and your staff.
            Your Account Manager will take personal responsibility for the
            cleaning work at your offices, and will make regular site visits in
            order to audit the work of our janitors. Your Account Manager will
            also be contactable by you at any time, and will be keen to meet
            with you on a regular basis to discuss our work. Our janitorial
            service includes:
          </p>
          <ul className="list-disc list-inside pl-6">
            <li>
              Uniformed and experienced cleaning staff/ uniformed, trained and
              vetted (well kitted)janitors
            </li>
            <li>Backup janitors always on standby</li>
            <li>Our Personal Management System</li>
            <li>
              Provision of all equipment/consumables included in the price
            </li>
            <li>A responsible approach to Health & Safety</li>
            <li>Environmentally aware working practices</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
