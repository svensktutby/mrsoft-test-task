import React, { createContext, Dispatch, Reducer } from 'react';

import s from './App.module.scss';
import {
  initialState,
  reducer,
  StateType,
  ActionsType,
} from '../store/reducer';
import { useReducerWithThunk } from '../hooks/useReducerWithThunk';
import { Header } from '../components/Header';
import { Main } from '../components/Main';

export const StateContext = createContext<StateContextType>({
  getStateValue: () => {},
  dispatch: () => {},
});

export const App = () => {
  const [state, dispatch] = useReducerWithThunk<
    Reducer<StateType, ActionsType>,
    StateType
  >(reducer, initialState);

  const getStateValue: GetStateValueType = (callback) => {
    return callback(state);
  };

  return (
    // @ts-ignore
    <StateContext.Provider value={{ getStateValue, dispatch }}>
      <div className={s.app}>
        <Header />

        <Main />
      </div>
    </StateContext.Provider>
  );
};

type GetStateValueType = (callback: (state: StateType) => any) => any;
type DispatchType = (
  action: (dispatch: Dispatch<ActionsType>) => Promise<void>,
) => any;

type StateContextType = {
  getStateValue: GetStateValueType;
  dispatch: DispatchType;
};
