import * as types from '../actions/types';

const journals = (state = [], action) => {
  switch(action.type) {
    case types.SET_ALLJOURNALS:
      return state;
    case types.SAVE_JOURNAL:
      return [ ...state, action.payload ];
    default:
      return state
  }
};


export default {
   journals
}