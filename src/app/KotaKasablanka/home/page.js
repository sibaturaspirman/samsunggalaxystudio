'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GalaxyStudioSchedule from '@/components/GalaxyStudioSchedule';
import PromoList from '@/components/PromoList';
import KeyVisual from '@/components/KeyVisual';



export default function GalaxyStudioHome() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 pt-0">
        <div className=' px-4'>
            {/* Headline */}
            <div className="text-center" data-aos="fade-up">
                <p className="text-base opacity-[.75]">Selamat datang</p>
                <h2 className="text-2xl font-bold mt-1">Galaxy Studio</h2>
                <h1 className="text-[32px] font-bold leading-snug mt-2">
                Unfold power.<br />Flip the norm.
                </h1>
            </div>
        </div>

      {/* Booth Image */}
      <div className="my-4 relative" data-aos="zoom-in">
        <Image
          src="/images/booth.png"
          alt="Galaxy Studio Booth"
          width={386}
          height={217}
          className="w-full mx-auto"
        />
        <div className="absolute bottom-4 left-6 text-white font-bold drop-shadow text-xl leading-tight">
          <p>Galaxy</p>
          <p>Z Fold7 | Z Flip7</p>
        </div>
      </div>
      <div className='px-4'>
        {/* Description */}
        <div
            className="text-sm text-gray-700 mt-6 leading-relaxed"
            data-aos="fade-up"
        >
            Rasakan pengalaman <br/> menggunakan Galaxy Z Fold7 | Z Flip7.<br />
            Jelajahi area-area yang telah kami siapkan dan rasakan langsung inovasi, desain, serta
            kecanggihan yang ditawarkan oleh <br/> Galaxy Foldables terbaru ini.
        </div>

        <GalaxyStudioSchedule />
        <PromoList />
      </div>

      <KeyVisual />

    </div>
  );
}
