import img from "../images/so-kleen-clients.jpg";

const Clients = () => {
  return (
    <section
      id="our-clients"
      className="xl:grid grid-cols-2 items-center xl:min-h-[80vh] gap-x-20 max-w-[1150px] mx-auto"
    >
      <div>
        <div className="hidden xl:block">
          <h2 className="text-7xl mt-8 mb-8 font-bold">Our Clients</h2>

          <p className="font-semibold text-xl mb-10">
            Reds Cleaning Services has the capability to cater for a wide
            variety of clientele ranging from small to large businesses to
            government agencies. We solely focus on satisfying our clients by
            providing them with the specific cleaning services they require.
          </p>
          <p className="font-semibold text-xl mb-10">
            Through innovation, new ideas and always focusing on ‘best practice
            principles’ we strive for even greater synergy with our Clients
            enabling us to continue to retain and grow our customer base.
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
