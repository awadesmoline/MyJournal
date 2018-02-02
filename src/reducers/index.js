const initialState = [
  { id: 1, title: 'First Note', body: 'This is my very first Note'},
  { id: 2, title: 'Second Note', body: 'This is my very second Note'},
];

const journals = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_ALLJOURNALS':
      return initialState;
    default:
      return state
  }
};


export default {
   journals
}