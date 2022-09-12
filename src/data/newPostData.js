import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPhoto: 0,
  photos: [],
};

export const newPostData = createSlice({
  name: "newPost",
  initialState,
  reducers: {
    addPhoto: (state, action) => {
      state.photos = [...state.photos, action.payload];
    },
    deletePhoto: (state, action) => {
      // const newPhotos = state.photos.filter((arrow,index) =>index !== action.payload);
      state.photos = [...state.photos.filter((arrow,index) =>index !== action.payload)]
    },
  },
});

export const {
  addPhoto,
  deletePhoto,
} = newPostData.actions;

export const getPhotos = (state) => state.newPostData.photos;

export default newPostData.reducer;
