import React, { ChangeEvent, FC, FormEvent, useContext, useState } from 'react';

import s from './Form.module.scss';
import {
  fetchResultsByLengthAsync,
  fetchResultsByStringAsync,
} from '../../store/reducer';
import { StateContext } from '../../app/App';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { Checkbox } from '../common/Checkbox';
import { validate } from '../../utils/validator';

export const Form: FC = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [register, setRegister] = useState(false);

  const { dispatch } = useContext(StateContext);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setError('');
    setValue(event.currentTarget.value);
  };

  const setResultsByLength = (value: string) => {
    const error = validate(value, true);
    setError(error);

    if (!error) {
      const length = Number(value.trim());
      dispatch(fetchResultsByLengthAsync(length));
    }
  };

  const setResultsByString = (value: string, register: boolean) => {
    const error = validate(value, false);
    setError(error);

    if (!error) {
      let string = value.trim();
      if (!register) string = string.toLowerCase();
      dispatch(fetchResultsByStringAsync(string, register));
    }
  };

  return (
    <div>
      <form className={s.form} onSubmit={submitHandler} noValidate>
        <div className={s.inputsWrapper}>
          <Input
            placeholder="Введите значение"
            name="stringFilter"
            value={value}
            onChange={changeHandler}
            error={error}
          />
          <Checkbox checked={register} onChangeChecked={setRegister}>
            Учитывать регистр
          </Checkbox>
        </div>

        <div className={s.buttonsWrapper}>
          <Button type="button" onClick={() => setResultsByLength(value)}>
            Фильтровать по количеству
          </Button>
          <Button
            type="button"
            onClick={() => setResultsByString(value, register)}
          >
            Фильтровать по строке
          </Button>
        </div>
      </form>
    </div>
  );
};
