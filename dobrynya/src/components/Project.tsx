"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ProjectItem {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function Project() {
  const [blogs, setBlogs] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/getprojects");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error loading projects:", error);
        setError("Ошибка при загрузке проектов. Попробуйте позже.");
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="relative flex bg-white h-max z-1 w-full justify-center py-32">
        <div className="w-screen py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="bg-gray-200 shadow-md rounded-lg overflow-hidden animate-pulse"
              >
                <div className="w-full h-64 bg-gray-300"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-6 bg-gray-300 rounded mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative flex bg-white h-max z-1 w-full justify-center py-32">
        <div className="text-center p-6">
          <p className="text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex bg-white h-max z-1 w-full justify-center py-32">
      <div className="max-w-screen-lg py-16">
        <h2 className="text-4xl font-bold text-center text-green-700 mx-4 pb-6">
          Магазины Торгового центра "Добрыня"
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="overflow-hidden">
                <a href={blog.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={blog.image}
                    alt={blog.title} // More descriptive alt text
                    width={500}
                    height={500}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </a>
              </div>
              <div className="p-6">
                <span className="block text-gray-500 text-sm mb-2">
                  {blog.date}
                </span>
                <h3 className="text-xl font-bold mb-2">
                  <a
                    href={blog.link}
                    className="text-black duration-300 hover:underline"
                  >
                    {blog.title}
                  </a>
                </h3>
                <p className="text-gray-700 text-base">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
