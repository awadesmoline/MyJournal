import * as types from './types';

export const setAllJournals = () => ({
  type: types.SET_ALLJOURNALS
});

export const saveJournal = (journal) => ({
  type: types.SAVE_JOURNAL,
  payload: journal
});

export const setCurrentJournal = (journal) => ({
  type: types.SET_CURRENTJOURNAL,
  payload: journal
});
