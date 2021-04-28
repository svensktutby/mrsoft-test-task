import React from 'react';

import s from './App.module.scss';
import { Header } from '../components/Header';
import { Main } from '../components/Main';

export const App = () => {
  return (
    <div className={s.app}>
      <Header />

      <Main />
    </div>
  );
};
