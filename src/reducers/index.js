import * as types from '../actions/types';

const initialState = {
  currentJournal: {},
  journals: []
};

const journals = (state = initialState, action) => {
  switch(action.type) {
    case types.SET_ALLJOURNALS:
      return state;
    case types.SAVE_JOURNAL:
      return {
        ...state,
        journals: [ ...state.journals, action.payload ]
      };
    case types.SET_CURRENTJOURNAL:
      return {
        ...state,
        currentJournal: action.payload
      };
    default:
      return state
  }
};


export default {
   journals
}