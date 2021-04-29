import { reducer, actions, StateType } from './reducer';

describe('reducer', () => {
  let state: StateType;

  beforeEach(() => {
    state = {
      results: [],
      loading: false,
    };
  });

  it('should handle setLoading', () => {
    const action = actions.setLoading(true);

    const newState = reducer(state, action);

    expect(newState.loading).toBeTruthy();
  });

  it('should handle setResultsByLength', () => {
    const results = [
      'affenpinscher',
      'whippet',
      'african',
      'irish wolfhound',
      'pembroke',
      'airedale',
      'NEWFOUNDLAND',
      'OTTERHOUND',
      'PAPILLON',
      'PEKINESE',
      'SWISS MOUNTAIN',
      'weimaraner',
      'MINIATURE PINSCHER',
      'akita',
      'GERMAN POINTER',
    ];

    const action = actions.setResultsByLength(results, 7);

    const newState = reducer(state, action);

    expect(newState.results).toEqual([
      'affenpinscher',
      'irish wolfhound',
      'pembroke',
      'airedale',
      'NEWFOUNDLAND',
      'OTTERHOUND',
      'PAPILLON',
      'PEKINESE',
      'SWISS MOUNTAIN',
      'weimaraner',
      'MINIATURE PINSCHER',
      'GERMAN POINTER',
    ]);
  });

  it('should handle setResultsByString', () => {
    const results = [
      'affenpinscher',
      'AFFenpinscher',
      'whippet',
      'african',
      'irish wolfhound aff',
      'pembroke',
      'airedale',
      'NEWFOUNDLAND',
    ];

    const action = actions.setResultsByString(results, 'aff', true);

    const newState = reducer(state, action);

    expect(newState.results).toEqual([
      'affenpinscher',
      'AFFenpinscher',
      'irish wolfhound aff',
    ]);
  });
});
