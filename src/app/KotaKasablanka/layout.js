// ✅ Struktur layout.js untuk tiap mall (contoh: /KotaKasablanka/layout.js)

import ClientLayout from '@/components/ClientLayout';

export const metadata = {
  title: 'Kota Kasablanka | Galaxy Studio',
  description: 'Galaxy Studio hadir di Kota Kasablanka!'
};

export default function Layout({ children }) {
  return <ClientLayout>{children}</ClientLayout>;
}
