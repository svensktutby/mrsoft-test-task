import React, { FC } from 'react';

import s from './ResultsBoard.module.scss';
import { randomId } from '../../utils/randomId';

type PropsType = {
  results: Array<string>;
};

export const ResultsBoard: FC<PropsType> = ({ results }) => {
  return (
    <ul className={s.resultsBoard}>
      {!results.length ? (
        <li className={s.item}>Совпадений нет</li>
      ) : (
        results.map((item) => (
          <li key={randomId()} className={s.item}>
            {item}
          </li>
        ))
      )}
    </ul>
  );
};
