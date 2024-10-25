import Image from "next/image";
import React from "react";
import Button from "../button/Button";

function CategoryCard({ className }: any) {
  return (
    <>
      <main className={`w-[350px] inset-0 mx-auto ${className}`}>
        <div className="ImageContainer">
          <Image
            src="/category-card-image/card1.webp"
            alt="category-card"
            width={380}
            height={600}
          />
        </div>
        <div className="font-semibold uppercase  align-top max-w-full mt-4 text-center no-underline text-2xl leading-[1.1666] ">
          STREEWEAR STAPLE
        </div>
        <div className="w-full text-center mt-2">
          <Button className="bg-black px-8 " />
        </div>
      </main>
    </>
  );
}

export default CategoryCard;
