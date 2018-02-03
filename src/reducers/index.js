import * as types from '../actions/types';

const initialState = {
  currentJournal: {},
  journals: []
};

const journals = (state = initialState, action) => {
  switch(action.type) {
    case types.SET_ALLJOURNALS:
      return state;
    case types.ADD_JOURNAL:
      return {
        ...state,
        journals: [ ...state.journals, action.payload ]
      };
    case types.SET_CURRENTJOURNAL:
      return {
        ...state,
        currentJournal: action.payload
      };
    case types.UPDATE_JOURNAL:
      let updatedJournals = state.journals;
      updatedJournals = state.journals.map(journal => {
        if (journal.id === action.payload.id) {
          return action.payload
        }
        return journal
      });
      return {
        ...state,
        journals: updatedJournals
      };
    case types.DELETE_JOURNAL:
      updatedJournals = state.journals.filter(jnal => jnal.id !== action.payload);
      return {
        ...state,
        journals: updatedJournals
      };
    default:
      return state
  }
};


export default {
   journals
}