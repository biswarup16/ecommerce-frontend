import React, { useEffect, useState } from "react";
import Image from "next/image";
import ImageModal from "../image-modal/ImageModal";

interface ImageGalleryProps {
  setVariantListProps?: any;
}

function ImageGallery({ setVariantListProps = [] }: ImageGalleryProps) {
  const [toggleImageModal, setToggleImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>();
  const [imageList, setImageList] = useState<any>();

  useEffect(() => {
    setImageList(setVariantListProps);
  }, [setVariantListProps]);

  function openImageModal(image: string) {
    setSelectedImage(image);
    setToggleImageModal(true);
  }

  function closeImageModal() {
    setToggleImageModal(false);
    setSelectedImage(null);
  }

  return (
    <>
      <section className="grid col-span-1 flex-1 gap-2 sm:grid sm:grid-cols-2 sm:gap-3 overflow-auto scrollbar-hide h-[400px] lg:h-[99vh] sm:h-[500px] cursor-pointer">
        {imageList?.map((image: any, index: any) => (
          <div key={index} className="relative w-full h-[450px] sm:h-[500px]">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              onClick={() => openImageModal(image)}
            />
          </div>
        ))}
      </section>

      {toggleImageModal && selectedImage && (
        <div
          className="fixed inset-0 grid place-content-center bg-black bg-opacity-50 z-40 border-black border-2"
          onClick={closeImageModal}
        >
          <div
            onClick={(e) => e.stopPropagation()} // Prevents modal close when clicking inside
          >
            <ImageModal
              closeImageModal={closeImageModal}
              selectedImage={selectedImage}
              imageListData={imageList}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ImageGallery;
