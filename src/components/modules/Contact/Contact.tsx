"use client";

import { Mail, MapPin, Phone } from "lucide-react";

import React, { useRef, useState } from "react";

const Contact: React.FC = () => {
  const [result, setResult] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(formRef.current!);
    formData.append("access_key", "d5415b89-3671-46f0-ab83-a4b22dd39cd1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Your message was submitted successfully!");
      formRef.current?.reset(); // ✅ Reset works here
    } else {
      setResult(data.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section className="w-full my-10 ">
      <div className="container mx-auto px-4 md:px-10">
        <p className="text-sm uppercase tracking-widest text-[#F79B72] text-center">
          BASA FINDER
        </p>
        <h2 className="text-3xl lg:text-4xl text-center font-bold text-gray-800 uppercase">
          Contact Me
        </h2>

        <div className=" flex py-10 flex-col-reverse gap-5 lg:flex-row items-center justify-between ">
          {/* Form Section */}
          <div className="w-full lg:w-1/2 bg-white p-5   rounded-2xl shadow-2xl">
            <p className="text-xl font-semibold text-center text-gray-700 mb-6">
              Send Me a Message
            </p>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-3 ">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 text-sm font-semibold text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#F79B72]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-semibold text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#F79B72]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-1 text-sm font-semibold text-gray-700"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#F79B72]"
                />
              </div>

              <div className="text-center w-full mt-10">
                <button
                  type="submit"
                  disabled={result === "Sending..."}
                  className={`hover:bg-[#F79B72] bg-white border text-[#F79B72] border-[#F79B72] hover:text-white px-6 py-3 rounded-xl font-semibold transition duration-300 cursor-pointer ${
                    result === "Sending..."
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  {result === "Sending..." ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
            <p
              className={`mt-4 text-center ${
                result.includes("success") ? "text-green-500" : "text-red-500"
              }`}
            >
              {result}
            </p>
          </div>

          {/* contact Section */}
          <div className="w-full lg:w-1/2 shadow-2xl p-5 rounded-2xl text-white flex justify-center flex-col-reverse gap-5  py-6">
            {/* map */}
            <div className="h-[300px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.8404415142353!2d90.41123957511246!3d23.86537228427568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c44a87c23cd5%3A0x32f5d5e8f06456dc!2sBasaFinder!5e0!3m2!1sen!2sbd!4v1715174627462!5m2!1sen!2sbd"
                width="100%"
                height="300"
                style={{ border: "10px", borderRadius: "12px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/* contact */}
            <div className="">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="text-[#F79B72]" />
                  <span className=" text-gray-700">
                    123 Bashundhara, Dhaka, Bangladesh
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-[#F79B72]" />
                  <span className=" text-gray-700">+880 123 456 789</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-[#F79B72]" />
                  <span className=" text-gray-700">contact@basafinder.com</span>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-6 mt-6">
                <a
                  href="https://www.facebook.com/profile.php?id=61554784244564"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="  hover:text-[#F79B72] transition border bg-blue-500 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.84 7.94 9.8v-6.93H7.9v-2.87h2.03V9.77c0-2.01 1.19-3.13 3.02-3.13.88 0 1.8.16 1.8.16v1.98h-1.01c-.99 0-1.3.62-1.3 1.25v1.5h2.22l-.36 2.87h-1.86v6.93C18.56 20.84 22 16.84 22 12z" />
                  </svg>
                </a>

                <a
                  href="https://x.com/Rebekaus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F79B72] transition bg-blue-300 border rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.18 4.18 0 001.83-2.3 8.38 8.38 0 01-2.65 1.02 4.14 4.14 0 00-7.05 3.77A11.75 11.75 0 013 5.16a4.13 4.13 0 001.28 5.52 4.1 4.1 0 01-1.87-.52v.05a4.14 4.14 0 003.32 4.06 4.18 4.18 0 01-1.86.07 4.15 4.15 0 003.87 2.88A8.32 8.32 0 012 18.57 11.75 11.75 0 008.29 20c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.34 8.34 0 0022.46 6z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/mst-rebeka-sultana-reba05/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F79B72] transition text-blue-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.76S5.53 5.18 6.5 5.18s1.75.79 1.75 1.76S7.47 8.71 6.5 8.71zM20 19h-3v-4.5c0-2.69-3-2.48-3 0V19h-3v-9h3v1.5c1.4-2.58 6-2.77 6 2.47V19z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
