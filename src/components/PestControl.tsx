import img from "../images/bugpro.jpg";
const PestControl = () => {
  return (
    <section id="pest-control">
      <div>
        <img
          src={img}
          alt="bug pro"
          className="xl:h-auto w-full object-center object-contain xl:object-cover"
        />
      </div>
      <div className="max-w-[1150px] mx-auto p-5 xl:p-0 xl:py-16">
        <h2 className="text-3xl xl:text-8xl mb-6 font-bold">
          PEST CONTROL <br />
          (FUMIGATION)
        </h2>
        <hr className="bg-red-600 h-[7px] w-[80px] xl:hidden" />
        <p className="text-xl font-bold my-6 xl:my-10">
          Click here to {/* eslint-disable-next-line */}
          <a href="#" className="text-blue-700">
            visit
          </a>{" "}
          our pest control services website.{" "}
        </p>
        <hr className="bg-red-600 h-[3px] hidden xl:block" />
      </div>
    </section>
  );
};

export default PestControl;
