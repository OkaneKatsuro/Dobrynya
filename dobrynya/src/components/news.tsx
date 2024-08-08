"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface NewsItem {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function News() {
  const [blogs, setBlogs] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch("/api/getnews"); // Вызов API метода GET
        const data = await res.json();
        setBlogs(data); // Устанавливаем полученные данные в состояние
      } catch (error) {
        console.error("Ошибка при загрузке новостей:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  if (loading) {
    return (
      <section className="relative flex bg-white h-max z-1 w-full justify-center py-8">
        <div className="w-full px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="bg-gray-200 shadow-md rounded-lg overflow-hidden animate-pulse"
              >
                <div className="w-full h-48 bg-gray-300"></div>
                <div className="p-4">
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

  return (
    <section className="relative flex bg-white h-max z-1 w-full justify-center py-8">
      <div className="max-w-screen-sm px-4 pb-12">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
          Новости Торгового центра "Добрыня"
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="overflow-hidden">
                <a href={blog.link}>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </a>
              </div>
              <div className="p-4">
                <span className="block text-gray-500 text-sm mb-2">
                  {blog.date}
                </span>
                <h3 className="text-lg text-gray-800 font-bold mb-2">
                  <a
                    className="text-gray-800 hover:text-green-600"
                    href={blog.link}
                  >
                    {blog.title}
                  </a>
                </h3>
                <p className="text-gray-700 text-sm">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
