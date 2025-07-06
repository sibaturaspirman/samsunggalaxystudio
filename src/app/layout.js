import './globals.css';
import '../styles/fonts.css';
import GlobalLoader from '@/components/GlobalLoader';
// import ClientLayout from '@/components/ClientLayout';

export const metadata = {
    title: "Samsung Galaxy Studio Experience ",
    description: "Daftar sekarang Untuk mendapatkan pengalaman Galaxy yang mengagumkan dan menangkan hadiah eksklusif Galaxy Z Fold7 | Z Flip7",
  };

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <GlobalLoader />
        {children}
      </body>
    </html>
  );
}
