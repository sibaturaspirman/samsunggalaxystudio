export async function generateMetadata({ params }) {
    const mallMeta = {
      KotaKasablanka: {
        title: 'Kota Kasablanka | Galaxy Studio',
        description: 'Galaxy Studio hadir di Kota Kasablanka!',
      },
      CentralParkMall: {
        title: 'Central Park Mall | Galaxy Studio',
        description: 'Galaxy Studio hadir di Central Park Mall!',
      },
      '23Paskal': {
        title: '23 Paskal | Galaxy Studio',
        description: 'Galaxy Studio hadir di 23 Paskal Bandung!',
      },
      MallKelapaGading3: {
        title: 'Mall Kelapa Gading 3 | Galaxy Studio',
        description: 'Galaxy Studio hadir di Mall Kelapa Gading 3!',
      },
      SummareconMallSerpong: {
        title: 'Summarecon Mall Serpong | Galaxy Studio',
        description: 'Galaxy Studio hadir di Summarecon Mall Serpong!',
      },
    };
  
    const mall = mallMeta[params.mallId];
  
    if (!mall) {
      return {
        title: 'Galaxy Studio',
        description: 'Temukan Galaxy Studio di mall pilihan Anda.',
      };
    }
  
    return {
      title: mall.title,
      description: mall.description,
    };
  }
  