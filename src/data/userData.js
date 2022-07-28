import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cancelComplete: {
    destination: 0,
    activeBottomSheet: false,
  },
};

export const userData = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setDecideConfirm:(state,action)=>{
      state.decideConfirm = action.payload;
    },
    setCancelComplete:(state,action)=>{
      state.cancelComplete = action.payload;
    }
  },
});

export const { 
  setDecideConfirm,
  setCancelComplete,
} = userData.actions;

export const getDecideConfirm = (state) => state.userData.decideConfirm;
export const getCancelComplete = (state) => state.userData.cancelComplete;
export default userData.reducer;
