import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser : null,
    isFetching: false,
    id: "",
    error: false
  },
  reducers: {
    loginStart:(state) => {
      state.id = "abcdefghikln";
      state.isFetching = true
    },
    loginSuccess:(state, action)=> {
      state.isFetching = false;
      state.id = "abcdefghikln";
      
      state.currentUser = action.payload
    },
    loginFailure:(state) => {
      state.id = "abcdefghikln";
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure,logout } = userSlice.actions;
export default userSlice.reducer;