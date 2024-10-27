import React, { useState } from "react";
import Image from "next/image";
import ImageModal from "../ImageModal";
// import ImageModal from "./ImageModal"; // Assuming ImageModal is in the same directory

// Define a type for the image structure
type ImageType = {
  src: string;
  alt: string;
};

const images: ImageType[] = [
  { src: "/Product-details-list/p1.avif", alt: "Product Image 1" },
  { src: "/Product-details-list/p2.avif", alt: "Product Image 2" },
  { src: "/Product-details-list/p3.avif", alt: "Product Image 3" },
  { src: "/Product-details-list/p4.avif", alt: "Product Image 4" },
  { src: "/Product-details-list/p5.avif", alt: "Product Image 5" },
  { src: "/Product-details-list/p6.avif", alt: "Product Image 6" },
  { src: "/Product-details-list/p8.avif", alt: "Product Image 7" },
  { src: "/Product-details-list/p9.avif", alt: "Product Image 8" },
];

function ImageGallery() {
  const [toggleImageModal, setToggleImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  function openImageModal(image: ImageType) {
    setSelectedImage(image);
    setToggleImageModal(true);
  }

  function closeImageModal() {
    setToggleImageModal(false);
    setSelectedImage(null);
  }

  return (
    <>
      <section className="grid col-span-1 flex-1 gap-2 sm:grid sm:grid-cols-2 sm:gap-3 overflow-auto scrollbar-hide h-[400px] lg:h-[99vh] sm:h-[500px] ">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-[450px] sm:h-[500px]">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              quality={100}
              onClick={() => openImageModal(image)}
              className="cursor-pointer object-fill sm:object-cover"
            />
          </div>
        ))}
      </section>

      {toggleImageModal && selectedImage && (
        <div
          className="fixed inset-0 grid place-content-center bg-black bg-opacity-50 z-40 border-black border-2"
          onClick={closeImageModal}
        >
          <div className="">
            <ImageModal
              closeImageModal={closeImageModal}
              selectedImage={selectedImage}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ImageGallery;
