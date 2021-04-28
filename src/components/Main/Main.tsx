import React, { FC } from 'react';

import s from './Main.module.scss';
import { Form } from '../Form';
import { ResultsBoard } from '../ResultsBoard';

export const Main: FC = () => {
  return (
    <main className={s.main}>
      <div className={s.container}>
        <Form />

        <ResultsBoard results={[]} />
      </div>
    </main>
  );
};
