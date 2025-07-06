'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function GlobalLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // Simulasi waktu loading halaman (ganti jika pakai router events)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // adjust delay sesuai kebutuhan

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
