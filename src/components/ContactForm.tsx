import { FormEvent, useRef } from "react";
import emailjs, { sendForm } from '@emailjs/browser';
import toast from "react-hot-toast";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);


  const sendEmail = async() => {
    if (form.current) {
      try {
        await toast.promise(
          emailjs.sendForm('service_redscleaning', 'redscleaning', form.current, {
            publicKey: 'iP3NKffm5l64-YJgS',
          }),
          {
            loading: "Sending Message.....",
            success: "Your Message Was Sent Successfully",
            error: "Failed to send the message. Please try again!",
          }
        );

        form.current.reset()
      } catch (error) {
        // Optional: Handle additional error behavior if needed
        console.error("Error sending email:", error);
      }
    }
    
  }

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    sendEmail()
  }

  return (
    <section className="bg-red-600 text-white min-h-[90vh] py-20 flex items-center">
      <div className="px-5 py-10 xl:p-0 xl:grid grid-cols-2 items-center gap-x-20 max-w-[1100px] mx-auto">
        <div>
          <p className="text-xl mb-10 xl:mb-0 xl:text-3xl xl:w-[85%]">
            We look forward to working with you. SAY HELLO, IT'S THE FIRST STEP
            TO A STRONG PARTNERSHIP.
          </p>
        </div>
        <form ref={form} onSubmit={submitForm}>
          <div className="mb-5">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              name="first_name"
              placeholder="Enter Your First Name"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              name="last_name"
              placeholder="Enter Your last Name"
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
          <button className="bg-white text-red-600 mt-8 h-[40px] rounded-sm w-[150px]">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
