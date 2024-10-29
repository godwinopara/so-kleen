import img from "../images/bugpro.jpg";
const PestControl = () => {
  return (
    <section id="pest-control">
      <div>
        <img src={img} alt="bug pro" />
      </div>
      <div className="max-w-[1150px] mx-auto py-16">
        <h2 className="text-8xl mb-6">
          PEST CONTROL <br />
          (FUMIGATION)
        </h2>
        <p className="text-xl font-bold my-10">
          Click here to{" "}
          <a href="#" className="text-blue-700">
            visit
          </a>{" "}
          our pest control services website.{" "}
        </p>
        <hr className="bg-red-600 h-[3px]" />
      </div>
    </section>
  );
};

export default PestControl;
