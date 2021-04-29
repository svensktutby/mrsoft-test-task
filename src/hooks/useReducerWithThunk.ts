import {
  useReducer,
  ReducerAction,
  ReducerState,
  Reducer,
  Dispatch,
} from 'react';

export const useReducerWithThunk = <
  R extends Reducer<any, any>,
  I extends ReducerState<R>
>(
  reducer: R,
  initialState: I,
): [ReducerState<R>, Dispatch<ReducerAction<R>>] => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const customDispatch = (action: ReducerAction<R>) => {
    if (typeof action === 'function') {
      action(customDispatch);
    } else {
      dispatch(action);
    }
  };

  return [state, customDispatch];
};
