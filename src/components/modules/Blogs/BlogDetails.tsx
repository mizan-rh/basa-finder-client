// pages/blog/[slug].tsx (Next.js example)
"use client";
import Image from "next/image";
import CtaSection from "./CtaSection";

export default function BlogDetailsPage() {
  return (
    <div className="mx-auto  pt-28  container pb-10 text-gray-800">
      {/* Hero Image */}
      <div className="relative w-full h-72 mb-6 rounded-2xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1599423300746-b62533397364"
          alt="Rental Guide"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Title & Meta */}
      <h1 className="text-3xl font-bold mb-2">
        Top 5 Tips to Find Your Ideal Rental in Dhaka
      </h1>
      <div className="text-sm text-gray-500 mb-6">
        By <span className="font-medium text-black">Admin</span> | April 20,
        2025 · 5 min read
      </div>

      {/* Content */}
      <div className="prose max-w-none prose-p:leading-relaxed prose-headings:mt-6 prose-headings:mb-2">
        <p>
          Finding the perfect rental in a busy city like Dhaka can be stressful.
          In this article, we’ll walk you through the 5 best tips to simplify
          your search.
        </p>

        <h2>1. Set a Realistic Budget</h2>
        <p>
          Understand your monthly income and allocate no more than 30% of it for
          rent. This helps ensure you have room for other expenses and savings.
        </p>

        <h2>2. Use a Reliable Platform</h2>
        <p>
          Platforms like <strong>BasaFinder</strong> offer verified listings,
          landlord ratings, and secure payment integrations, saving you from
          scams.
        </p>

        <h2>3. Visit in Person</h2>
        <p>
          Always try to visit the property before finalizing. Check ventilation,
          neighborhood, water/electricity availability, and noise levels.
        </p>

        <h2>4. Review the Rental Agreement</h2>
        <p>
          Make sure the terms—especially notice period, maintenance fees, and
          rent hike policies—are clearly stated in the agreement.
        </p>

        <h2>5. Connect With Previous Tenants</h2>
        <p>
          If possible, talk to previous tenants to learn about the
          landlord&apos;s behavior and overall experience in the property.
        </p>
      </div>

      {/* Optional CTA */}
      <CtaSection
        title="Ready to Find Your Dream Rental?"
        description="Sign up now and explore verified listings tailored to your needs."
        buttonLabel="Subscribe"
        onSubmit={() => alert("Subscribe Success!")}
      />
    </div>
  );
}
