import localFont from 'next/font/local';
import "./globals.css";
import NavBarLayout from './navbarLayout';

const myFont = localFont({
  src: [
    {
      path: '../../public/font/static/Montserrat-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/static/Montserrat-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-myfont',
});


export const metadata = {
  title: "Portfolio",
  description: "My personal portfolio showcasing my projects and skills.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${myFont.variable}`}>
        <NavBarLayout />

        {children}
      </body>
    </html >
  );
}
