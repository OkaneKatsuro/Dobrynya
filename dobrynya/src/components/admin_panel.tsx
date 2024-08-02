"use client";
import Image from 'next/image';

import Link from "next/link";

export default function AdminPanel() {

  return (
    <section className="relative bg-white h-max z-1 w-full md:flex justify-center py-48">
      <div className="column justify-center">
        <div className="w-full mr-6 mb-6 md:mb-0 flex flex-col justify-center items-center py-12">
          <Link href="/" passHref>
            <Image
              src="/logo_dobrynya.jpeg"
              alt="Торговый центр Добрыня"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </Link>
        </div>

        <h2 className="text-3xl font-bold pb-10 text-center">
          Добро пожаловть в панель управления!
        </h2>
        <div className="flex justify-center">
          <button
            className="inline-flex justify-center items-center px-4 py-2 text-white rounded bg-green-800 transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none active:scale-95 mt-5"
            style={{ width: "410px", height: "100px" }}
          >
            <Link href="/admin" passHref>

              <span className="text-3xl cursor-pointer">Новости</span>
            </Link>
          </button>
        </div>

        <div className="flex justify-center">
          <button
            className="inline-flex justify-center items-center px-4 py-2 text-white rounded bg-green-800 transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none active:scale-95 mt-5"
            style={{ width: "410px", height: "100px" }}
          >
            <Link href="/admin/admin_project" passHref>
              <span className="text-3xl cursor-pointer">Магазины</span>
            </Link>
          </button>
        </div>
        <div className="flex justify-center">
          <button
            className="inline-flex justify-center items-center px-4 py-2 text-white rounded bg-green-800 transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none active:scale-95 mt-5"
            style={{ width: "410px", height: "100px" }}
          >
            <Link href="/admin/admin_postBukletPage" passHref>
              <span className="text-3xl cursor-pointer">Свободные помещения</span>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
