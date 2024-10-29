const ContactForm = () => {
  return (
    <section className="bg-red-600 text-white min-h-[90vh] flex items-center">
      <div className="grid grid-cols-2 items-center gap-x-20 max-w-[1150px] mx-auto">
        <div>
          <p className="text-3xl w-[85%]">
            We look forward to working with you. SAY HELLO, IT'S THE FIRST STEP
            TO A STRONG PARTNERSHIP.
          </p>
        </div>
        <form>
          <div className="mb-5">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              name="fullname"
              placeholder="Enter Your Full Name"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              name="mobile"
              id="mobile"
              placeholder="Enter Your Phone Number"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows={6}
              placeholder="Enter A Message"
            ></textarea>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
