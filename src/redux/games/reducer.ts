import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GamesState {
  currentGame: any | null;
}

const initialState: GamesState = {
  currentGame: null,
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setCurrentGame: (state, action: PayloadAction<any>) => {
      state.currentGame = action.payload;
    },
  },
});

export const { setCurrentGame } = gamesSlice.actions;
export default gamesSlice.reducer;