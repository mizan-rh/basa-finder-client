"use client";

import blogimg1 from "@/assets/images/blogs/blog-1.avif";
import blogimg2 from "@/assets/images/blogs/blog-3.avif";
import blogimg3 from "@/assets/images/blogs/blog2.avif";
import { CalendarDays, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "How to Find the Perfect Rental Home",
    excerpt:
      "Tips and tricks to help tenants find the best rental that suits their needs and budget...",
    date: "April 10, 2025",
    imageUrl: blogimg1,
    tags: ["Tenant Tips", "Guide"],
    slug: "perfect-rental-home",
  },
  {
    id: 2,
    title: "Landlord Checklist Before Renting Out",
    excerpt:
      "Ensure your property is ready for tenants with this comprehensive pre-rental checklist...",
    date: "March 28, 2025",
    imageUrl: blogimg2,
    tags: ["Landlord Advice", "Checklist"],
    slug: "landlord-checklist",
  },
  {
    id: 3,
    title: "Landlord Checklist Before Renting Out",
    excerpt:
      "Ensure your property is ready for tenants with this comprehensive pre-rental checklist...",
    date: "March 28, 2025",
    imageUrl: blogimg3,
    tags: ["Landlord Advice", "Checklist"],
    slug: "landlord-checklist",
  },
  // Add more blogs here
];

export default function BlogPage() {
  return (
    <main className="min-h-screen px-4 py-12 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Basa Finder Blog
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition"
            >
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CalendarDays className="w-4 h-4" />
                  <span>{blog.date}</span>
                </div>
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <p className="text-sm text-gray-700">{blog.excerpt}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {blog.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/blogs/${blog.slug}`}>
                  <button className="mt-4 text-sm font-medium text-pink-600 hover:underline">
                    Read More →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
