import img from "../images/phone.png";

const Contact = () => {
  return (
    <section className=" bg-neutral-200 p-8" id="contact">
      <div className="xl:grid grid-cols-2 items-center max-w-[1150px] mx-auto">
        <div>
          <h2 className="hidden xl:block text-7xl mb-8">Contact Us</h2>
          {/* Mobile Content */}
          <div className="mb-5">
            <h2 className="text-4xl uppercase mb-2 font-bold xl:hidden">
              Contact Us
            </h2>
            <hr className="bg-red-600 h-[7px] w-[80px] xl:hidden" />
          </div>
          {/* ================ */}
          <div className="mb-5">
            <h4 className="font-bold text-xl">Office:</h4>
            <p className="text-lg">
              16B Bashorun Okusanya Lekki Phase 1, Lagos
            </p>
          </div>
          <div className="mb-8 xl:mb-0">
            <h4 className="font-bold text-xl">Email:</h4>
            <p className="text-lg">office@so-kleen.com.ng</p>
          </div>
        </div>
        <div>
          <img src={img} alt="telephone" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
