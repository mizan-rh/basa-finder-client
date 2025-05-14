"use client";

import testmonial1 from "@/assets/images/image/testimonial-1.jpg";
import testmonial2 from "@/assets/images/image/testimonial-2.jpg";
import testmonial3 from "@/assets/images/image/testimonial-3.jpg";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Tomina Islam",
    role: "Tenant",
    message:
      "BasaFinder made it so easy to find a rental that fit my needs. The process was smooth, and the filtering options were very helpful!",
    image: testmonial1,
  },
  {
    name: "Shamima Akter",
    role: "Landlord",
    message:
      "As a landlord, I found quality tenants quickly through BasaFinder. It's a trustworthy platform for managing listings.",
    image: testmonial2,
  },
  {
    name: "Mahmudul Hasan",
    role: "Tenant",
    message:
      "I loved the clean design and helpful support team. I highly recommend BasaFinder to anyone looking for a rental!",
    image: testmonial3,
  },
];

const TestimonialsPage = () => {
  return (
    <section className=" bg-[#F9FAFB] py-10 ">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">What Our Users Say</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-xl relative"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <FaQuoteLeft className="text-[#F79B72] text-2xl absolute -top-4 left-4 bg-white p-1 rounded-full shadow" />
            <p className="text-[#374151] mb-4">{testimonial.message}</p>
            <div className="flex items-center w-16 h-16 rounded-full gap-4 mt-6">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={64}
                height={64}
                className="rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-[#2A4759]">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-[#9CA3AF]">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsPage;
