import React, { FC, useContext } from 'react';

import s from './Main.module.scss';
import { StateContext } from '../../app/App';
import { ResultsBoard } from '../ResultsBoard';
import { Form } from '../Form';

export const Main: FC = () => {
  const { getStateValue } = useContext(StateContext);

  const results = getStateValue((state) => state.results);

  return (
    <main className={s.main}>
      <div className={s.container}>
        <Form />

        <ResultsBoard results={results} />
      </div>
    </main>
  );
};
