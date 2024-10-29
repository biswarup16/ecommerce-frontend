import CategoryCard from "@/components/category-card/CategoryCard";
import DisplayCard from "@/components/display-card/DisplayCard";
import HeroBanner from "@/components/hero-banner/HeroBanner";
import Herosection from "@/components/hero-section/HeroSection";
import PictureWithTextCard from "@/components/picture-with-text-card/PictureWithTextCard";
import ProductCard from "@/components/product-card/ProductCard";
import StripToCallAction from "@/components/strip-to-call-action/StripToCallAction";
import React from "react";

function page() {
  return (
    <>
      <Herosection />
      {/* <ProductCard /> */}
      <div className="mt-20 ">
        <CategoryCard />
      </div>
      <div className="mt-14 md:mt-20">
        <HeroBanner />
      </div>
      <div className="mt-20">
        <StripToCallAction />
      </div>
      <div className="mt-20">
        <PictureWithTextCard />
      </div>

      {/* <div className="mt-20">
        <DisplayCard />
      </div> */}
    </>
  );
}

export default page;
