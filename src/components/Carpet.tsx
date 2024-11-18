import img from "../images/carpet.jpeg";
import imgMobile from "../images/carpet-mobile.jpeg";
import MobileLayout from "./MobileLayout";
function Carpet() {
  return (
    <section className="mb-10" id="carpet">
      <div>
        <img
          src={img}
          alt="services img"
          className="hidden lg:block w-full object-top object-cover"
        />
        <img
          src={imgMobile}
          alt="services img"
          className="lg:hidden w-full object-top object-cover"
        />
      </div>
      <div className="hidden xl:block max-w-[1150px] mx-auto xl:py-10">
        <div className="py-6">
          <h2 className="text-7xl mt-8 mb-8 font-bold">
            Carpet And Upholstery
          </h2>

          <p className="font-semibold text-xl mb-10">
            Carpets and upholstery are significant investments that endure daily
            wear and tear. While routine vacuuming is essential, it must be
            complemented by specialized periodic cleaning programs designed to
            both preserve and protect these surfaces. This ensures that your
            carpets and upholstery not only maintain a pristine appearance but
            also contribute to a healthier environment, creating the right
            visual impression for your space.
          </p>

          <hr className="bg-red-500 h-[3px]" />
        </div>
        <div className="py-6">
          <p className="mb-6">
            A clean and hygienic office boosts staff productivity and creates a
            more welcoming environment for clients. We offer high-quality,
            cost-effective office cleaning solutions and are proud to partner
            with a variety of businesses, helping them maintain a professional
            and spotless workplace.{" "}
          </p>
          <h3 className="uppercase mb-6 font-bold text-xl text-red-600">
            CARPETS & RUGS
          </h3>
          <p className="mb-6">
            At Reds Cleaning Services Limited, we use the latest equipment and
            eco-friendly cleaning solutions for all our carpet and rug cleaning
            services. We offer a range of advanced methods, including hot water
            extraction, dry powder, and bonnet cleaning, to effectively remove
            stains, dirt, bacteria, and allergens. Our cleaning techniques not
            only restore the appearance of your carpets but also help extend
            their lifespan, ensuring that your investment remains protected.
          </p>
          <h3 className="uppercase mb-6 font-bold text-xl text-red-600">
            UPHOLSTERY & LEATHER CLEANING
          </h3>
          <p className="mb-6">
            Sofas and chairs are significant investments, and regular
            professional cleaning is essential to prolong their life and
            maintain their appearance. For upholstery cleaning, we use hot water
            extraction, one of the most effective methods for deep cleaning
            fabric furniture.
          </p>
          <p className="mb-6">
            Leather cleaning is a specialized process, and we take great care
            with it. Our team cleans leather upholstery by hand using Prochem
            leather cleaner, followed by the application of the appropriate
            conditioning cream to help preserve and protect the leather.
          </p>
          <p>
            Our operatives are fully trained to identify different fabrics and,
            when necessary, will conduct a colorfast test and pile test before
            starting any cleaning, ensuring the safest and most effective
            treatment for your furniture.{" "}
          </p>
        </div>
      </div>

      {/* =============== Mobile Content ================== */}
      <MobileLayout
        title="Carpet And Upholstery"
        desc="Carpets and upholstery are significant investments that endure daily
            wear and tear. While routine vacuuming is essential, it must be
            complemented by specialized periodic cleaning programs designed to
            both preserve and protect these surfaces. This ensures that your
            carpets and upholstery not only maintain a pristine appearance but
            also contribute to a healthier environment, creating the right
            visual impression for your space."
        url="/carpet-upholstery"
      />
    </section>
  );
}

export default Carpet;
