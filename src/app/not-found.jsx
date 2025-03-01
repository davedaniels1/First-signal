import React from 'react';
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <section className="mx-auto px-4 md:px-8 lg:px-9 xl:px-0 text-[#0A1540] w-full max-w-screen-xl flex flex-col items-center">
          <h1 className="text-2xl xl:text-5xl font-bold text-center mb-3 xl:mb-6">
            Page Not Found
          </h1>
          <p className="text-sm md:text-base xl:text-lg text-[#0A1540] text-center mb-2">
            The page you are looking for does not exist. Please return to the
            homepage
          </p>
          <img 
            src="404.png" 
            alt="404 error" 
            className="w-full max-w-md mb-2" 
          />
          <Link href="/">
            <button className="text-white bg-[#335CAD] rounded-md w-[200px] py-2 text-sm md:text-base xl:text-lg hover:bg-[#2a4b8d] transition-colors">
              Home
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}