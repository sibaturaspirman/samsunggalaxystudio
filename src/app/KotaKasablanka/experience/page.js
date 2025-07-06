'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function GalaxyStudioHome() {
  const pathname = usePathname();
  const mallId = pathname.split('/')[1]; // Ambil mallId dari URL

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div className="bg-gray-100 py-0">
        <div className=' px-4'>
            {/* Headline */}
            <div className="text-center" data-aos="fade-up">
                <h1 className="text-[32px] font-bold leading-snug mt-2">
                Unfold power.<br />Flip the norm.
                </h1>
                <p className="text-center text-sm text-gray-700 mt-3">
                Jelajahi setiap area dan dapatkan <br/> <strong>stamp digital</strong> untuk mendapatkan <br/> <strong>hadiah menarik</strong>
                </p>
            </div>
        </div>

      {/* Booth Image */}
      <div className="my-4 relative" data-aos="zoom-in">
        <Image
          src="/images/experience.png"
          alt="Galaxy Studio Booth"
          width={360}
          height={312}
          className="w-full mx-auto"
        />
      </div>

      <Link href={`/${mallId}/experience/stamp`} className='fixed left-0 right-0 bottom-[6rem] mx-auto flex items-center justify-center'>
        <button className="inline-flex items-center px-5 py-3 bg-white rounded-full shadow-xl">
        <Image
          src="/images/btn-discover.png"
          alt="Galaxy Studio Booth"
          width={118}
          height={16}
          className="w-full mx-auto"
        /></button>
      </Link>

    </div>
  );
}
