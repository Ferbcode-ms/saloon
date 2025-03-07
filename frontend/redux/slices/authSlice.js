import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adminToken: localStorage.getItem("adminToken") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAdminToken: (state, action) => {
      state.adminToken = action.payload;
      localStorage.setItem("adminToken", action.payload);
    },
    logoutAdmin: (state) => {
      state.adminToken = null;
      localStorage.removeItem("adminToken");
    },
  },
});

export const { setAdminToken, logoutAdmin } = authSlice.actions;
export default authSlice.reducer;
