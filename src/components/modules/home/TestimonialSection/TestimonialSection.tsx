"use client";

import person1 from "@/assets/images/image/testimonial-1.jpg";
import person2 from "@/assets/images/image/testimonial-2.jpg";
import person3 from "@/assets/images/image/testimonial-3.jpg";
import Image from "next/image";

const testimonials = [
  {
    name: "Shirley Smith",
    title: "Tenant",
    text: "The rental experience was smooth, professional, and stress-free. Highly recommend their services!",
    image: person1,
    textColor: "#F79B72",
    bgColor: "#e0f7fa",
    hoverBgColor: "#b2ebf2",
  },
  {
    name: "Ms. Soraiaa Ahmed",
    title: "Landlord",
    text: "Great platform to list my rental property. Found a responsible tenant quickly with minimal effort.",
    image: person2,
    textColor: "#E91E63",
    bgColor: "#fce4ec",
    hoverBgColor: "#f8bbd0",
  },
  {
    name: "Shinny Smith",
    title: "Agent",
    text: "This is one of the best services for rental management. Customer support is top-notch!",
    image: person3,
    textColor: "#4CAF50",
    bgColor: "#e8f5e9",
    hoverBgColor: "#c8e6c9",
  },
];

const TestimonialSection = () => {
  return (
    <section className="pt-20 pb-10 lg:pt-24 container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-widest text-[#F79B72]">
          Testimonials
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          What They Say
        </h2>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 rounded-xl shadow-md text-center flex flex-col items-center group transition-all duration-300"
            style={{ backgroundColor: item.bgColor }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.backgroundColor =
                item.hoverBgColor;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.backgroundColor =
                item.bgColor;
            }}
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-4">
              <Image
                src={item.image}
                alt={item.name}
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              {item.text}
            </p>
            <h3
              className="font-bold text-base sm:text-lg"
              style={{ color: item.textColor }}
            >
              {item.name}
            </h3>
            <p className="text-sm text-gray-500">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
