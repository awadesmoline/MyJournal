import * as types from './types';

export const setAllJournals = () => ({
  type: types.SET_ALLJOURNALS
});

export const addJournal = (journal) => ({
  type: types.ADD_JOURNAL,
  payload: journal
});

export const updateJournal = (journal) => ({
  type: types.UPDATE_JOURNAL,
  payload: journal
});

export const deleteJournal = (journalId) => ({
  type: types.DELETE_JOURNAL,
  payload: journalId
});

export const saveJournal = (journal) => {
  return (dispatch, getState) => {
    const { journals: { journals: presentJournals }} = getState();
    if (presentJournals.find(jnal => jnal.id === journal.id)) {
      dispatch(updateJournal(journal))
    } else {
      journal.id = presentJournals.length;
      dispatch(addJournal(journal))
    }
    dispatch(setCurrentJournal({}))
  }
};

export const setCurrentJournal = (journal) => ({
  type: types.SET_CURRENTJOURNAL,
  payload: journal
});
