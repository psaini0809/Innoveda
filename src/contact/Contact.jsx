import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dei0xhh",
        "tservice_dei0xhh",
        form.current,
        "NBmQpdWSdOsgr_BpH"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        () => {
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-12 px-4 sm:px-[12vw] md:px-[7vw] lg:px-[20vw] bg-white"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-black">CONTACT</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-sm sm:text-lg font-semibold">
          We’d love to hear from you—reach out for any opportunities
        </p>
      </div>

      {/* Contact Card */}
      <div className="w-full max-w-lg bg-[#0d081f] p-4 sm:p-6 rounded-lg shadow-lg border border-gray-700 flex flex-col items-center">
        {/* Logo */}
        <img
          src="Innoveda.png"
          alt="Innoveda Logo"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-4"
        />

        <h3 className="text-lg sm:text-xl font-semibold text-white text-center mb-4">
          Connect With Innoveda
        </h3>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-3 w-full"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            SEND
          </button>
        </form>

        {/* Social & Contact Info */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          {/* Social Icons */}
          <a
            href="https://wa.me/+919368214236"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 text-2xl hover:opacity-80 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/innoveda_solutions_?igsh=dmh4cjh5M3gwcHQ2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 text-2xl hover:opacity-80 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/109034103"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-2xl hover:opacity-80 transition"
          >
            <FaLinkedin />
          </a>

          {/* Phone Numbers */}
          <div className="flex flex-col sm:flex-row items-center text-white text-lg sm:text-xl gap-4">
            <a
              href="tel:+919368214236"
              className="flex items-center gap-2 hover:text-purple-500 transition"
            >
              <FaPhoneAlt />
              <span>+91-9368214236</span>
            </a>
            <a
              href="tel:+919899057612"
              className="flex items-center gap-2 hover:text-purple-500 transition"
            >
              <FaPhoneAlt />
              <span>+91-9899057612</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
