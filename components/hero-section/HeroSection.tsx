"use client";
// Import Next.js Image component and React
import Image from "next/image";
import React from "react";

// Import Swiper and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

// Define heroImages array with types
const heroImages: { src: string; alt: string }[] = [
  { src: "/display-image/homepage1.jpg", alt: "Homepage image 1" },
  { src: "/display-image/homepage2.jpg", alt: "Homepage image 2" },
  { src: "/display-image/homepage3.jpg", alt: "Homepage image 3" },
];

// Text for Hero Section
const HeroText = () => (
  <div className="text-center md:text-left">
    <h1 className="block text-4xl font-bold text-gray-800 sm:text-5xl lg:text-6xl lg:leading-tight dark:text-white">
      Discover the <span className="text-blue-600">Exclusive</span> Collection
    </h1>
    <p className="mt-3 text-lg text-gray-700 dark:text-neutral-400">
      Up to 50% off on the latest arrivals. Find your perfect style today.
    </p>
  </div>
);

// Buttons for Hero Section
const HeroButtons = () => (
  <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full justify-center md:justify-start">
    <Link
      href="/products"
      className="py-3 px-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-black text-white hover:bg-black/80 focus:outline-none focus:bg-blue-700 transition"
      aria-label="Shop Now"
    >
      Shop Now
      <svg
        className="shrink-0 size-4"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </Link>
    <Link
      href="/products"
      className="py-3 px-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-300 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 transition"
      aria-label="View Collection"
    >
      View Collection
    </Link>
  </div>
);

// HeroImage Swiper Carousel
const HeroImage = () => (
  <section className="relative w-full mx-auto mt-6 md:mt-0">
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000 }}
      loop={true}
      className="h-[400px]"
    >
      {heroImages.map((image, i) => (
        <SwiperSlide key={i} className="relative h-full w-full">
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

// Main Hero Section
function Herosection() {
  return (
    <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <HeroText />
          <HeroButtons />
        </div>
        <HeroImage />
      </div>
    </section>
  );
}

export default Herosection;
