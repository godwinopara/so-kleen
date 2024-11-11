import img from "../images/so-kleen-clients.jpg";

const Clients = () => {
  return (
    <section
      id="our-clients"
      className="xl:grid grid-cols-2 items-center xl:min-h-[100vh] gap-x-20 max-w-[1150px] mx-auto"
    >
      <div>
        <div className="hidden xl:block">
          <h2 className="text-7xl mt-8 mb-8 font-bold">Our Clients</h2>

          <p className="font-semibold text-xl mb-10">
            Reds Cleaning Services is equipped to serve a diverse range of
            clients, from small businesses to large corporations and government
            agencies. Our primary focus is on delivering tailored cleaning
            solutions that meet the unique needs of each client, ensuring their
            satisfaction with every service. We pride ourselves on providing the
            highest quality cleaning services, customized to fit your specific
            requirements.
          </p>
          <p className="font-semibold text-xl mb-10">
            Through innovation, fresh ideas, and a relentless focus on best
            practices, we strive to create greater synergy with our clients.
            This commitment allows us to consistently meet their evolving needs,
            helping us retain and expand our customer base over time.
          </p>

          <hr className="bg-red-500 h-[3px]" />
        </div>

        <div className="px-5">
          <div className="mb-5">
            <h2 className="text-3xl uppercase mb-2 font-bold xl:hidden">
              Our Clients
            </h2>
            <hr className="bg-red-600 h-[7px] w-[80px] xl:hidden" />
          </div>
        </div>
      </div>
      <div>
        <img src={img} alt="clients logo" />
      </div>
    </section>
  );
};

export default Clients;
