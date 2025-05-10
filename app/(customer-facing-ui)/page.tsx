import CategoryCard from "@/components/category-card/CategoryCard";
import DisplayCard from "@/components/display-card/DisplayCard";
import HeroBanner from "@/components/hero-banner/HeroBanner";
import Herosection from "@/components/hero-section/HeroSection";
import PictureWithTextCard from "@/components/picture-with-text-card/PictureWithTextCard";
import ProductCard from "@/components/product-card/ProductCard";
import SaleProducts from "@/components/sale-products/SaleProducts";
import StripToCallAction from "@/components/strip-to-call-action/StripToCallAction";
import React from "react";

function Page() {
  return (
    <>
      <section id="herosection" className=" lg:mb-36">
        <Herosection />
      </section>
      <section id="category" className=" grid place-content-center">
        <h1 className="text-xl md:text-3xl font-bold">Category</h1>
        <CategoryCard />
      </section>
      <section id="stripToCallAction" className="mt-20">
        <StripToCallAction />
      </section>
      <section id="heroBanner" className="mt-14 md:mt-20 ">
        <p className="text-xl md:text-3xl font-bold capitalize mb-2">
          Most demanded
        </p>
        <HeroBanner />
      </section>
      <section id="pictureWithText" className="md:mt-20 lg:mt-20">
        <PictureWithTextCard />
      </section>
      {/* <section id="sale" className="md:mt-20 lg:mt-20">
        <SaleProducts />
      </section> */}
    </>
  );
}

export default Page;
