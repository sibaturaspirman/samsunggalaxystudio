'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const studioSchedules = [
  {
    id: 'kokas',
    title: 'Food Society',
    mall: 'Kota Kasablanka',
    date: '10 – 13 Juli 2025',
    image: '/images/kokas.png',
  },
  {
    id: 'centralpark',
    title: 'Promenade Lumina',
    mall: 'Central Park Mall',
    date: '16 – 20 Juli 2025',
    image: '/images/centralpark.png',
  },
  {
    id: 'paskal',
    title: 'Atrium Hejo',
    mall: '23 Paskal',
    date: '16 – 20 Juli 2025',
    image: '/images/23paskal.png',
  },
  {
    id: 'mkg3',
    title: 'The Forum',
    mall: 'Mall Kelapa Gading 3',
    date: '23 – 27 Juli 2025',
    image: '/images/mkg3.png',
  },
  {
    id: 'sms',
    title: 'Atrium Circle',
    mall: 'Summarecon Mall Serpong',
    date: '23 – 27 Juli 2025',
    image: '/images/sms.png',
  },
];

export default function GalaxyStudioSchedule() {
  return (
    <div className="mt-10" data-aos="fade-up">
      <h3 className="font-semibold text-lg mb-3">Jadwal Galaxy Studio:</h3>
      <Swiper spaceBetween={16} slidesPerView={'auto'} className="px-1">
        {studioSchedules.map((item) => (
          <SwiperSlide key={item.id} className="!w-[220px]">
            <div className="bg-white rounded-2xl p-1 transition-transform duration-300">
              <Image
                src={item.image}
                alt={item.mall}
                width={300}
                height={200}
                className="rounded-xl mb-2"
              />
              <div className='px-3 py-3 pt-2'>
                <div className="text-base font-semibold">{item.title}</div>
                <div className="text-xs mt-[.1rem]">{item.mall}</div>
                <div className="text-sm opacity-[.75] mt-2">{item.date}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
