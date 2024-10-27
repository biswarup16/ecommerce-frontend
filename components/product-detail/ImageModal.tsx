import Image from "next/image";
import React from "react";

function ImageModal({ closeImageModal, selectedImage }: any) {
  return (
    <div className="relative h-[400px] w-[80vw] md:h-[500px] lg:h-[80vh] lg:w-[70vw] bg-white shadow-gray-300 shadow-lg lg:p-4 flex flex-col items-center justify-center border-2 border-black">
      <button
        className="absolute top-2 right-2 text-lg font-semibold"
        onClick={closeImageModal}
      >
        &times;
      </button>
      <div className="relative h-full w-full flex items-center justify-center">
        <Image
          src={selectedImage.src}
          alt={selectedImage.alt}
          layout="fill"
          objectFit="contain"
          className="rounded-lg p-4 "
        />
      </div>
      {/* Mini Photos */}
      <div className="absolute bottom-2 w-full flex gap-2 justify-center lg:bottom-16 lg:flex lg:gap-4 lg:items-center lg:justify-center lg:px-5 ">
        <div className="relative h-[50px] w-[40px]">
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative h-[50px] w-[40px]">
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageModal;
