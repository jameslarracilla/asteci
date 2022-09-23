import { createSlice } from '@reduxjs/toolkit';

const climaSlice = createSlice({
  name: 'clima',
  initialState: {
    climas: [],
    selectedClima: {},
    climasToRender: [],
    total: 0,
    page: 0,
    totalOfPages: 0,
    itemsPerPage: 10,
  },
  reducers: {
    setClimas(state, action) {
      state.page = 0;
      state.climas = action.payload.results;
      state.total = action.payload.pagination.pageSize;
      state.totalOfPages = state.total / state.itemsPerPage;
      state.climasToRender = state.climas.slice(0, state.itemsPerPage);
    },
    setSelectedClima(state, action) {
      state.selectedClima = action.payload.results[0];
    },
    nextPage(state, action) {
      state.page++;
      state.climasToRender = state.climas.slice(
        state.page * state.itemsPerPage,
        (state.page + 1) * state.itemsPerPage
      );
    },
    prevPage(state, action) {
      state.page--;
      state.climasToRender = state.climas.slice(
        state.page * state.itemsPerPage,
        (state.page + 1) * state.itemsPerPage
      );
    },
  },
});

export const climaActions = climaSlice.actions;

export default climaSlice;
