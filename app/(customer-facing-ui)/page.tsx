import CategoryCard from "@/components/category-card/CategoryCard";
import DisplayCard from "@/components/display-card/DisplayCard";
import HeroBanner from "@/components/hero-banner/HeroBanner";
import Herosection from "@/components/hero-section/HeroSection";
import PictureWithTextCard from "@/components/picture-with-text-card/PictureWithTextCard";
import ProductCard from "@/components/product-card/ProductCard";
import StripToCallAction from "@/components/strip-to-call-action/StripToCallAction";
import React from "react";

function Page() {
  return (
    <>
      <section id="herosection">
        <Herosection />
      </section>
      <section id="category" className="mt-20">
        <CategoryCard />
      </section>
      <section id="stripToCallAction" className="mt-20">
        <StripToCallAction />
      </section>
      <section id="heroBanner" className="mt-14 md:mt-20">
        <HeroBanner />
      </section>
      <section id="pictureWithText" className="mt-20">
        <PictureWithTextCard />
      </section>
    </>
  );
}

export default Page;
