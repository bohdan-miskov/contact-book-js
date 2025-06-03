import { createSelector } from "@reduxjs/toolkit";
import { selectFilterValue } from "../filters/selector";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectViewedContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filter) =>
    contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filter) ||
        number.toLowerCase().includes(filter)
    )
);
