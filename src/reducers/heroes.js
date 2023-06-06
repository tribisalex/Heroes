import {createReducer} from "@reduxjs/toolkit";
import {heroCreated, heroDeleted, heroesFetched, heroesFetching, heroesFetchingError} from "../actions";

const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
};

const heroes = createReducer(
  initialState,
  {
    [heroesFetching]: (state) => {
      state.heroesLoadingStatus = 'loading';
    },
    [heroesFetched]: (state, action) => {
      state.heroes = action.payload;
      state.heroesLoadingStatus = 'idle';
    },
    [heroesFetchingError]: (state) => {
      state.heroesLoadingStatus = 'error';
    },
    [heroCreated]: (state, action) => {
      state.heroes.push(action.payload);
    },
    [heroDeleted]: (state, action) => {
      state.heroes = state.heroes.filter((item) => item.id !== action.payload);
    },
  }, [],
  (state) => state
);

export default heroes;
