import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'app',
  initialState : {
    roomId : null,
  },
  reducers: {
    enterRoom: (state , action) => {
      state.roomId = action.payload;
    },
  },
});

export const { enterRoom } = appSlice.actions;

export const selectroomId = (state) => state.app.roomId ;


export default appSlice.reducer;