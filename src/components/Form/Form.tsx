import React, { FC, FormEvent } from 'react';

import s from './Form.module.scss';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { Checkbox } from '../common/Checkbox';

export const Form: FC = () => {
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <form className={s.form} onSubmit={submitHandler} noValidate>
        <div className={s.inputsWrapper}>
          <Input placeholder="Введите значение" name="stringFilter" />
          <Checkbox>Учитывать регистр</Checkbox>
        </div>

        <div className={s.buttonsWrapper}>
          <Button type="button">Фильтровать по количеству</Button>
          <Button type="button">Фильтровать по строке</Button>
        </div>
      </form>
    </div>
  );
};
