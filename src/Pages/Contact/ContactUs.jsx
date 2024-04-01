import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import Aos from "aos";

export const ContactUs = () => {
  const form = useRef();
  const { user } = useAuth();

  useEffect(() => {
    Aos.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v4nkhsb",
        "template_36lxbgr",
        form.current,
        "CuXFGhSg8ciyUNigF"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Email sent successfully!",
            text: "Your message has been sent to N.I..",
          });
          // Reset the form after successful email send
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="py-4 flex flex-col items-center justify-center">
      <div>
        <div className="flex justify-center pb-4">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal text-center border-b-4 rounded-lg text-white uppercase px-4 border-purple-700 gradient-text"
          >
            Contact Us
          </h1>
        </div>
        <div>
          <p className="gradient-text text-justify">
            Thank you for considering ArtistyCode Studio for your digital needs.
            We're excited to connect with you and explore how we can bring your
            vision to life. Here's how you can reach out to us:
          </p>
          <div className="py-2">
            <h2 className="gradient-text text-xl font-bold">Address:</h2>
            <p className="gradient-text">
              N.I. Nazmul's Home, A-1/9, Dainkini, Chandra, Kaliakair, Gazipur.
            </p>
          </div>
          <div className="py-2">
            <h2 className="gradient-text text-xl font-bold">Phone:</h2>
            <p className="gradient-text">+8801580845746.</p>
          </div>
          <div className="py-2">
            <h2 className="gradient-text text-xl font-bold">Email:</h2>
            <p className="gradient-text">artistycodestudio@gmail.com.</p>
          </div>
          <div className="py-2">
            <p className="gradient-text text-justify">
              Feel free to use the form below to send us a message directly.
              Whether you have a question about our services, want to discuss a
              potential project, or simply want to say hello, we're here to
              help. We strive to respond to all inquiries promptly.
            </p>
            <p className="gradient-text py-2">
              ArtistyCode Studio Team.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-4">
        <h1
          data-aos="fade-up"
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal text-center border-b-4 rounded-lg text-white uppercase px-4 border-purple-700"
        >
          Contact me via{" "}
          <span className="text-purple-700 gradient-text">E-mail</span>
        </h1>
      </div>
      <div className="" data-aos="fade-up">
        <div className="shadow-2xl border-2 p-1 border-purple-700 card_glow text-white rounded-xl md:w-[700px]">
          <form className="card-body" ref={form} onSubmit={sendEmail}>
            <div className="form-control">
              <label className="label">
                <span className="">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                defaultValue={user?.displayName}
                name="user_name"
                className="input input-bordered glass border-purple-700 border-2 input_glow"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                defaultValue={user?.email}
                name="user_email"
                className="input input-bordered glass border-purple-700 border-2 input_glow"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="">Your Message</span>
              </label>
              <textarea
                placeholder="Write your message..."
                name="message"
                className="textarea input-bordered glass border-purple-700 border-2 input_glow pt-6 pb-20"
                required
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <input
                className="neno-button font-bold shadow-xl hover:shadow-purple-800/50 border-2 hover:bg-purple-700 border-purple-700 rounded-lg py-4 px-8 uppercase relative overflow-hidden text-center"
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
