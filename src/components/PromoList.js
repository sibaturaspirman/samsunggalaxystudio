'use client';

import PromoCard from './PromoCard';

const promos = [
  {
    label: 'First Purchaser',
    title: 'First Purchaser',
    description: 'Cashback Rp 1jt untuk pembeli pertama*',
    image: '/images/promo-1.png',
  },
  {
    label: 'Special Offer',
    title: 'Galaxy Z Premier Service',
    description: 'Claim kupon melalui Samsung Gift Indonesia (SGI) max. 7 hari',
    image: '/images/promo-2.png',
  },
  {
    label: 'Special Gift',
    title: 'Earphone Samsung',
    description: 'Dapatkan gratis Earphone Type-C setiap pembelian smartphone dan tablet samsung',
    image: '/images/promo-3.png',
  },
  {
    label: 'First Purchaser',
    title: 'Promo',
    description: 'Deskripsi',
    image: '',
  },
  {
    label: 'Special Offer',
    title: 'Promo',
    description: 'Deskripsi',
    image: '',
  },
  {
    label: 'Special Gift',
    title: 'Promo',
    description: 'Deskripsi',
    image: '',
  },
];

export default function PromoList() {
  return (
    <section className="mt-10" data-aos="fade-up">
      <h3 className="font-semibold text-lg mb-3">Promo dan penawaran</h3>
      {promos.map((item, index) => (
        <PromoCard
          key={index}
          label={item.label}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </section>
  );
}
