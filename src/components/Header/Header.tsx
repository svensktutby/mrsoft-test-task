import React, { FC, useContext } from 'react';

import s from './Header.module.scss';
import { StateContext } from '../../app/App';
import { Preloader } from '../common/Preloader';

export const Header: FC = () => {
  const { getStateValue } = useContext(StateContext);

  const loading = getStateValue((state) => state.loading);

  return (
    <header className={s.header}>
      {loading && <Preloader />}

      <div className={s.container}>
        <h1 className={s.title}>
          Тестовое задание компании &laquo;Масштабные&nbsp;решения&raquo;
        </h1>
      </div>
    </header>
  );
};
