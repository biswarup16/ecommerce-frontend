import React from "react";
import ProductCard from "../product-card/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

function SaleProducts() {
  // Array to represent 20 ProductCards
  const productCards = Array.from({ length: 20 });

  return (
    <main className="container  mx-auto py-6">
      <Swiper
        spaceBetween={20}
        slidesPerView={10}
        pagination
        // breakpoints={{
        //   320: { slidesPerView: 1 },
        //   640: { slidesPerView: 2 },
        //   768: { slidesPerView: 3 },
        //   1024: { slidesPerView: 5 },
        //   1280: { slidesPerView: 10 },
        // }}
      >
        {productCards.map((_, index) => (
          <SwiperSlide key={index}>
            <ProductCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}

export default SaleProducts;
