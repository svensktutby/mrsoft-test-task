import React, { FC } from 'react';

import s from './ResultsBoard.module.scss';

type PropsType = {
  results: Array<string>;
};

export const ResultsBoard: FC<PropsType> = ({ results }) => {
  return (
    <ul className={s.resultsBoard}>
      {!results.length ? (
        <li className={s.item}>Совпадений не найдено</li>
      ) : (
        results.map((item) => <li className={s.item}>{item}</li>)
      )}
    </ul>
  );
};
