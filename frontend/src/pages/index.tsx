import { Searchbar } from '@/components/searchBar';
import { ShowData } from '@/components/showData';
import { MainStyles } from '@/styles/mainStyles';

import { Inter } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function Main(): JSX.Element {
  return (
    <MainStyles>
      <h1 className={inter.className}>Bulário Eletrônico</h1>
      <Searchbar />
      <ShowData />
    </MainStyles>
  );
}
