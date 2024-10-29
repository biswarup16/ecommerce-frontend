"use client";
import Image from "next/image";
import React, { useState } from "react";

type ImageType = {
  id: number;
  src: string;
  alt: string;
};

interface ImageProps {
  imageListData?: ImageType[];
  closeImageModal?: () => void;
  selectedImage?: ImageType;
}

function ImageModal({
  closeImageModal,
  selectedImage,
  imageListData = [],
}: ImageProps) {
  const [imageList] = useState<ImageType[]>(imageListData);
  const [currentImage, setCurrentImage] = useState<ImageType | undefined>(
    selectedImage
  );

  // Mini Photos
  function handleClick(id: number) {
    const newSelectedImage = imageList.find((image) => image.id === id);
    setCurrentImage(newSelectedImage);
  }

  return (
    <div className="relative h-[400px] w-[80vw] md:h-[500px] lg:h-[80vh] lg:w-[70vw] bg-white shadow-gray-300 shadow-lg lg:p-4 flex flex-col items-center justify-center">
      <button
        className="absolute top-2 right-2 text-lg font-semibold"
        onClick={closeImageModal}
      >
        &times;
      </button>
      {currentImage && (
        <div className="relative h-[450px] w-[450px] mb-8">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      {/* Mini Photos */}
      <div className="absolute bottom-2 w-full flex gap-2 justify-center lg:bottom-5 lg:flex lg:gap-4 lg:items-center lg:justify-center lg:px-5 ">
        {imageList.map((photo) => (
          <div
            key={photo.id}
            className={`relative h-[50px] w-[40px]  cursor-pointer ${
              currentImage?.id == photo.id ? "border-[1px] border-black" : ""
            }`}
            onClick={() => handleClick(photo.id)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageModal;
