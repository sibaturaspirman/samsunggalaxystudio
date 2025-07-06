'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const productData = {
  name: 'Galaxy Z Flip7',
  colors: [
    {
      name: 'Blue',
      value: '#2D70C4',
      video: '/videos/ZFlip7_Blue.mp4',
      images: [
        '/videos/ZFlip7_Blue-1.png',
        '/videos/ZFlip7_Blue-2.png',
        '/videos/ZFlip7_Blue-3.png',
        '/videos/ZFlip7_Blue-4.png',
      ],
    },
    {
      name: 'Coralred',
      value: '#EC7072',
      video: '/videos/ZFlip7_Coralred.mp4',
      images: [
        '/videos/ZFlip7_Coralred-1.png',
        '/videos/ZFlip7_Coralred-2.png',
        '/videos/ZFlip7_Coralred-3.png',
        '/videos/ZFlip7_Coralred-4.png',
      ],
    },
    {
      name: 'Jetblack',
      value: '#4A4A4D',
      video: '/videos/ZFlip7_Jetblack.mp4',
      images: [
        '/videos/ZFlip7_Jetblack-1.png',
        '/videos/ZFlip7_Jetblack-2.png',
        '/videos/ZFlip7_Jetblack-3.png',
        '/videos/ZFlip7_Jetblack-4.png',
      ],
    },
    {
      name: 'White',
      value: '#ffffff',
      video: '/videos/ZFlip7_White.mp4',
      images: [
        '/videos/ZFlip7_White-1.png',
        '/videos/ZFlip7_White-2.png',
        '/videos/ZFlip7_White-3.png',
        '/videos/ZFlip7_White-4.png',
      ],
    },
  ],
};

export default function ProductFlip7() {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const selected = productData.colors[selectedColorIndex];
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  // Handle color selection & reset slide
  const handleColorSelect = (index) => {
    setSelectedColorIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }
    setIsLoaded(false);
  };

  // Preload video & images
  useEffect(() => {
    const preload = async () => {
      const videoPromise = new Promise((resolve) => {
        const vid = document.createElement('video');
        vid.src = selected.video;
        vid.oncanplaythrough = resolve;
        vid.onerror = resolve;
      });

      const imagePromises = selected.images.map((src) => {
        return new Promise((resolve) => {
          const img = new window.Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      await Promise.all([videoPromise, ...imagePromises]);
      setIsLoaded(true);
    };

    preload();
  }, [selected]);

  return (
    <div className="text-center px-4 py-10 pt-10 mt-[1rem] w-full">
      <h1 className="text-3xl font-bold mb-4">{productData.name}</h1>

      {!isLoaded ? (
        <div className="flex justify-center items-center h-[300px]">
          <span className="animate-pulse text-gray-500">Loading preview...</span>
        </div>
      ) : (
        <>
          <div className="relative mb-2 max-w-xs mx-auto w-full">
            <Swiper
              className="productSwiper"
              spaceBetween={0}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
            >
              <SwiperSlide>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="mx-auto rounded-xl"
                  width={160}
                  height={250}
                  src={selected.video}
                />
              </SwiperSlide>
              {selected.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={img}
                    alt={`${productData.name} ${selected.name}`}
                    width={250}
                    height={250}
                    className="mx-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Chevron Buttons */}
            <button
              ref={prevRef}
              className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-[40px] h-[40px] rounded-full shadow-md flex items-center justify-center z-30 navprodslider"
            >
              <Image src="/images/chev-l.png" alt="prev" width={40} height={40} />
            </button>
            <button
              ref={nextRef}
              className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 w-[40px] h-[40px] rounded-full shadow-md flex items-center justify-center z-30 navprodslider"
            >
              <Image src="/images/chev-r.png" alt="next" width={40} height={40} />
            </button>
          </div>

          <p className="text-sm font-semibold mb-1 mt-2">Warna</p>
          <div className="flex justify-center gap-3 mb-6">
            {productData.colors.map((color, index) => {
              const isSelected = selectedColorIndex === index;
              return (
                <button
                  key={index}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isSelected ? 'border-2 bg-[#F3F4F6] p-[2px]' : ''
                  }`}
                  style={isSelected ? { borderColor: color.value } : {}}
                  onClick={() => handleColorSelect(index)}
                >
                  <div
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: color.value }}
                  ></div>
                </button>
              );
            })}
          </div>

          <a
            href="https://www.samsung.com/id/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full transition block"
          >
            <Image
              src="/images/btn-ketauhi.png"
              className="w-[80%] mx-auto"
              alt="Samsung"
              width={320}
              height={56}
              priority
            />
          </a>
        </>
      )}
    </div>
  );
}
