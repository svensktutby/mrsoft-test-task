import { Dispatch } from 'react';

import { API } from '../api';

export enum ActionType {
  SET_LOADING = 'MRSOFT/RESULTS/SET_LOADING',
  SET_RESULTS = 'MRSOFT/RESULTS/SET_RESULTS',
}

export const initialState = {
  results: [] as Array<string>,
  loading: false,
};

export const reducer = (
  state = initialState,
  action: ActionsType,
): StateType => {
  switch (action.type) {
    case ActionType.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    case ActionType.SET_RESULTS: {
      return {
        ...state,
        results: action.payload,
      };
    }

    default:
      return state;
  }
};

/** Actions */
export const actions = {
  setLoading: (status: boolean) =>
    ({ type: ActionType.SET_LOADING, payload: status } as const),
  setResults: (results: Array<string>) =>
    ({ type: ActionType.SET_RESULTS, payload: results } as const),
};

/** Thunks */
export const fetchResultsAsync = () => async (
  dispatch: Dispatch<ActionsType>,
) => {
  dispatch(actions.setLoading(true));

  try {
    const { data } = await API.getResults();

    dispatch(actions.setResults(data));
  } catch (error) {
    console.log('Error: ', { ...error });
  } finally {
    dispatch(actions.setLoading(false));
  }
};

/** Types */
export type StateType = typeof initialState;

export type ActionsType = InferActionsType<typeof actions>;

export type InferActionsType<T> = T extends Record<
  string,
  (...args: never[]) => infer U
>
  ? U
  : never;
