import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InitialState {
  count: number;
}

const initialState: InitialState = {
  count: 0,
};

const countSlice = createSlice({
  name: 'countSlice',
  initialState,
  reducers: {
    setCount(state, action: PayloadAction<number>) {
      state.count = action.payload;
    },
    increaseCount(state) {
      ++state.count;
    },
    decreaseCount(state) {
      --state.count;
    },
  },
});

export const { setCount, increaseCount, decreaseCount } = countSlice.actions;

export default countSlice;
