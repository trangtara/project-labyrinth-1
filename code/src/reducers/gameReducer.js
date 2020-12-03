import { createSlice } from '@reduxjs/toolkit'

export const gameReducer = createSlice({
  name: 'start',
  initialState: {
    currentStep: null,
    playerName: '',
    history: []
  },
  reducers: {
    gameBegin: (state, action) => {
      state.currentStep = action.payload
    },
    addPlayerName: (state, action) => {
      state.playerName = action.payload
    },
    makeMove: (state, action) => {
      state.history.push(state.currentStep);
      state.currentStep = action.payload;
    }
  }
})