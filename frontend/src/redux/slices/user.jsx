import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:{},
};

export const userSate = createSlice({
  name: "user",
  initialState,
  reducers: {
    adduser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { adduser } = userSate.actions;
export default userSate.reducer;
