import React, { FC } from 'react';

import s from './Header.module.scss';

export const Header: FC = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <h1 className={s.title}>
          Тестовое задание компании &laquo;Масштабные&nbsp;решения&raquo;
        </h1>
      </div>
    </header>
  );
};
