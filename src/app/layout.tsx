'use client'

import logo from '../app/images/logo.png';
import exit from '../app/icons/exit.png';
import Image from 'next/image';
import styles from './page.module.css'
import "./globals.css";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body>
          <div className={styles.nav}>
            <div className={styles.logo_group}>
              <Image
                src={logo}
                width={102}
                height={40}
                alt="LOGO">
              </Image>
              <div className={styles.btn_nav_group}>
                <button className={styles.btn_nav}>Профиль</button>
                <button className={styles.btn_nav}>Билеты</button>
              </div>
            </div>
            <button className={styles.btn_in}><Image
              src={exit}
              width={24}
              height={24}
              alt="exit">
            </Image>Войти</button></div>
          <hr></hr>
          {children}</body>
      </QueryClientProvider>
    </html>
  );
}
