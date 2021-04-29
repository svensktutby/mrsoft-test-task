import { Dispatch } from 'react';

import { API } from '../api';

export enum ActionType {
  SET_LOADING = 'MRSOFT/RESULTS/SET_LOADING',
  SET_RESULTS_BY_LENGTH = 'MRSOFT/RESULTS/SET_RESULTS_BY_LENGTH',
  SET_RESULTS_BY_STRING = 'MRSOFT/RESULTS/SET_RESULTS_BY_STRING',
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

    case ActionType.SET_RESULTS_BY_LENGTH: {
      return {
        ...state,
        results: action.payload.results.filter(
          (item) => item.length > action.payload.length,
        ),
      };
    }

    case ActionType.SET_RESULTS_BY_STRING: {
      return {
        ...state,
        results: action.payload.results.filter((i) => {
          const item = !action.payload.register ? i.toLowerCase() : i;
          return item.includes(action.payload.string);
        }),
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
  setResultsByLength: (results: Array<string>, length: number) =>
    ({
      type: ActionType.SET_RESULTS_BY_LENGTH,
      payload: { results, length },
    } as const),
  setResultsByString: (
    results: Array<string>,
    string: string,
    register: boolean,
  ) =>
    ({
      type: ActionType.SET_RESULTS_BY_STRING,
      payload: { results, string, register },
    } as const),
};

/** Thunks */
export const fetchResultsByLengthAsync = (length: number) => async (
  dispatch: Dispatch<ActionsType>,
) => {
  dispatch(actions.setLoading(true));

  try {
    const { data } = await API.getResults();

    dispatch(actions.setResultsByLength(data, length));
  } catch (error) {
    console.log('Error: ', { ...error });
  } finally {
    dispatch(actions.setLoading(false));
  }
};

export const fetchResultsByStringAsync = (
  string: string,
  register: boolean,
) => async (dispatch: Dispatch<ActionsType>) => {
  dispatch(actions.setLoading(true));

  try {
    const { data } = await API.getResults();

    dispatch(actions.setResultsByString(data, string, register));
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
