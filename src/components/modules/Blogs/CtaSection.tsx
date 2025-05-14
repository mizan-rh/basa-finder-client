// components/CTASection.tsx
"use client";

import { useState } from "react";

interface CTAProps {
  title: string;
  description: string;
  buttonLabel: string;
  onSubmit: (email: string) => void;
}

export default function CtaSection({
  title,
  description,
  buttonLabel,
  onSubmit,
}: CTAProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) return;
    onSubmit(email);
    setEmail(""); // Reset input
  };

  return (
    <div className="mt-10 p-6 border rounded-xl bg-gray-100 text-center">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded-md w-full sm:w-64"
        />
        <button
          onClick={handleSubmit}
          className="bg-black text-white px-4 py-2 rounded-md w-full sm:w-auto"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}
