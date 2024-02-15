import { filterList } from 'utils/filterList';

export const selectContacts = state => state.contacts.list;
export const selectFilter = state => state.filter.value;

export const selectFilteredContacts = state =>
  filterList('name', selectContacts(state), selectFilter(state));

export const selectContactsLength = state => selectContacts(state).length;
