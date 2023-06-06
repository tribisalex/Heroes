import {createReducer} from "@reduxjs/toolkit";
import {activeFilterChanged, filtersFetched, filtersFetching, filtersFetchingError} from "../actions";

const initialState = {
  filtersLoadingStatus: 'idle',
  filters: [],
  activeFilter: 'all',
};

const filters = createReducer(
  initialState,
  {
    [filtersFetching]: (state) => {
      state.filtersLoadingStatus = 'loading';
    },

    [filtersFetched]: (state, action) => {
      state.filters = action.payload;
      state.filtersLoadingStatus = 'idle';
    },

    [filtersFetchingError]: (state) => {
      state.filtersLoadingStatus = 'error';
    },

    [activeFilterChanged]: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
  [],
  (state) => state
);

export default filters;
