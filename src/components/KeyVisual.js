'use client';
import Image from 'next/image';

export default function KeyVisual() {
  return (
    <section className="mt-10" data-aos="fade-up">
      <h3 className="font-semibold text-center text-2xl mb-3 px-5">Ikuti kompetisi media sosial dan menangkan hadiah</h3>
      <div className='w-full'>
        <Image
            src='/images/kv.png'
            alt='Samsung'
            width={720}
            height={962}
            className="w-full"
          />
      </div>
    </section>
  );
}
