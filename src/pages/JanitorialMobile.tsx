import Carousel from "../components/Carousel";

const JanitorialMobile = () => {
  return (
    <>
      <Carousel />
      <div className="px-5 py-10">
        <div className="py-6">
          <div className="mb-5">
            <h2 className="text-3xl uppercase mb-2 font-bold xl:hidden">
              Janitorial/Office Cleaning
            </h2>
            <hr className="bg-red-600 h-[7px] w-[80px] xl:hidden" />
          </div>

          <p className="mb-10">
            No matter your business, organization, or sector, we tailor our
            cleaning services to meet your specific needs. We’ll take the time
            to understand your requirements, create a customized cleaning plan,
            and provide the highest quality service, all while adhering to the
            best hygiene and safety practices.
          </p>

          <hr className="bg-red-500 h-[3px]" />
        </div>
        <div className="py-6">
          <p className="mb-6">
            A clean and hygienic office not only boosts staff productivity but
            also creates a more welcoming environment for clients. We offer
            high-quality, cost-effective office cleaning solutions, and are
            proud to serve a diverse range of businesses, helping them maintain
            pristine, professional spaces.
          </p>
          <h3 className="uppercase mb-6 font-bold text-xl text-red-600">
            Our janitorial cleaning plan
          </h3>
          <p className="mb-6">
            We’ll create a customized cleaning plan tailored to your specific
            needs and work around the schedules that are most convenient for you
            and your team. Your dedicated Account Manager will oversee all
            cleaning activities at your offices, conducting regular site visits
            to audit the quality of our janitorial work. They’ll also be
            available at any time to address your concerns and will meet with
            you regularly to ensure our services are always meeting your
            expectations.
          </p>
          <p>Our janitorial service includes:</p>
          <br />

          <ul className="list-disc list-inside pl-2 grid gap-y-1">
            <li>
              <strong>Uniformed and experienced cleaning staff:</strong> Our
              janitors are well-trained, fully vetted, and equipped with the
              proper uniforms and tools.
            </li>
            <li>
              <strong>Backup janitors on standby:</strong> We ensure continuity
              of service with backup staff ready at all times.
            </li>
            <li>
              <strong>Personalized management system:</strong> We provide a
              tailored approach to meet your specific needs.
            </li>
            <li>
              <strong>All-inclusive service:</strong> We supply all necessary
              equipment and consumables, with no additional charges.
            </li>
            <li>
              <strong>Health & Safety commitment:</strong> We take a responsible
              approach to ensure safe working practices are followed at all
              times.
            </li>
            <li>
              <strong>Eco-friendly practices:</strong> Our environmentally aware
              cleaning methods help reduce the environmental impact of our
              services
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default JanitorialMobile;
