'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProductFold7 from '@/components/ProductFold7';
import ProductFlip7 from '@/components/ProductFlip7';

export default function GalaxyStudioHome() {
  const sectionRef = useRef(null);
  const [hideButton, setHideButton] = useState(false);

  const handleScroll = () => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight / 2;

    if (isVisible) {
      setHideButton(true);
    }
  };

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      setHideButton(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div className="bg-gray-100 py-0">
      {!hideButton && (
        <div className="fixed left-0 right-0 bottom-[6rem] mx-auto flex items-center justify-center z-50">
          <button
            onClick={scrollToSection}
            className="inline-flex items-center px-5 py-3 bg-white rounded-full shadow-xl"
          >
            <Image
              src="/images/btn-discover.png"
              alt="Galaxy Studio Booth"
              width={118}
              height={16}
              className="w-full mx-auto"
            />
          </button>
        </div>
      )}

      {/* Booth Image */}
      <div className="my-4 mt-0 relative" data-aos="fade-up">
        <Image
          src="/images/product.png"
          alt="Galaxy Studio Booth"
          width={360}
          height={617}
          className="w-full mx-auto"
        />
      </div>
      <div ref={sectionRef} className='pt-0'>
        <ProductFold7 />
        <ProductFlip7 />
      </div>

    </div>
  );
}
