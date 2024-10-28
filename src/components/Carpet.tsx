import img from "../images/carpet.jpg";
function Carpet() {
  return (
    <section id="our-services">
      <img src={img} alt="services img" />
      <div className="max-w-[1150px] mx-auto">
        <div className="py-6">
          <h2 className="text-7xl mt-8 mb-8 font-bold">
            Carpet And Upholstery
          </h2>

          <p className="font-semibold text-xl mb-10">
            Carpets and upholsteries are an expensive investment and are
            constantly receiving high wear on a daily basis. Therefore routine
            vacuuming needs to be supported by specialist periodical programmes
            designed to both maintain and protect carpets and upholsteries in
            order to create the correct visual impression along with maintaining
            a healthy environment.
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
          <h3 className="uppercase mb-6 font-bold text-xl text-red-600">
            CARPETS & RUGS
          </h3>
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
          <h3 className="uppercase mb-6 font-bold text-xl text-red-600">
            UPHOLSTERY & LEATHER CLEANING
          </h3>
          <p className="mb-6">
            Sofas and chairs are expensive household items and regular
            professional cleaning will help to extend their life. Our chosen
            method is to use hot water extraction. It’s certainly one of the
            best proven methods for deep upholstery cleaning. Leather cleaning
            is not an easy task, we clean leather upholstery by hand with
            prochem leather cleaner before applying the appropriate conditioning
            cream. This helps preserve the leather.
          </p>
          <p>
            Our operatives are fully trained to recognize the different fabrics
            and, if necessary, they will do a colour fast test and pile test
            before they begin cleaning.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Carpet;
