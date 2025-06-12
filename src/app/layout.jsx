import localFont from 'next/font/local';
import "./globals.css";
import NavBarLayout from './navbarLayout';
import { ProjectProvider } from '../../src/app/context/ProjectContext'; // ✅ Import your context provider

const myFont = localFont({
  src: [
    {
      path: './fonts/Montserrat-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Montserrat-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-myfont',
});

export const metadata = {
  title: "Portfolio",
  description: "My personal portfolio showcasing my projects and skills.",
  icons: {
    icon: "/logo.png", // or use .png like "/favicon.png"
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${myFont.variable}`}>
        <ProjectProvider>
          <NavBarLayout />
          {children}
        </ProjectProvider>
      </body>
    </html >
  );
}
