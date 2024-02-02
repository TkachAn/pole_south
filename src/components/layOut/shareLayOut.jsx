import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/header/header';
import { Footer } from 'components/footer/footer';
import s from './layOut.module.css';

export const LayOut = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <main className={s.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
