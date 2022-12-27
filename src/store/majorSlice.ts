import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '.';
import { majors } from '../data/majors';
import { Major } from '../types';

// Define the initial state using that type
const initialState: Major[] = majors.filter((major) => {
  if (major.Major_category === 'Engineering') {
    return major;
  } else {
    return null;
  }
});

export const majorSlice = createSlice({
  name: 'major',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    filter: (state, action: PayloadAction<string>) => {
      return majors.filter((major) => {
        if (major.Major_category === action.payload) {
          return major;
        } else {
          return null;
        }
      });
    },
  },
});

export const { filter } = majorSlice.actions;

export const filterMajor = (state: RootState) => state.major;

export default majorSlice.reducer;
