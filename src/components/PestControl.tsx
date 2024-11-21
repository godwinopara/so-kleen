import img from "../images/bugpro.jpg";
const PestControl = () => {
  return (
    <section id="pest-control">
      <div>
        <img
          src={img}
          alt="bug pro"
          className="object-center object-contain  w-full"
        />
      </div>
      <div className="max-w-[1100px] mx-auto p-5 xl:p-0 xl:py-16">
        <h2 className="text-3xl xl:text-6xl mb-6 font-bold">
          PEST CONTROL <br />
          (FUMIGATION)
        </h2>
        <hr className="bg-red-600 h-[7px] w-[80px] xl:hidden" />
        <p className="mb-3">
          Keep your home or business pest-free with our professional pest control solutions. We specialize in eliminating common pests like rodents, insects, termites, and more, ensuring a safe and hygienic environment for you and your loved ones. Our team uses eco-friendly and effective methods tailored to your needs, offering both one-time treatments and ongoing maintenance plans.
        </p>
        <p className="my-6 xl:my-10">For more information or to schedule a service, email us at <a className="text-red-600 font-semibold underline" href="mailto:info@redscleaning.org">info@redscleaning.org.</a> </p>
        <hr className="bg-red-600 h-[3px] hidden xl:block" />
      </div>
    </section>
  );
};

export default PestControl;
