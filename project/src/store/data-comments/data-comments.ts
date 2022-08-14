import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../components/const';
import { Comment } from '../../types/review';

const initialState : {
    comments : Comment[]
} = {
  comments: []
};

export const dataComments = createSlice({
  name: NameSpace.DataComments,
  initialState,
  reducers: {
    sendNewComment:(state, action) => {
      state.comments = [...state.comments, action.payload];
    },
    loadComments: (state, action) => {
      state.comments = action.payload;
    }
  }
});

export const {sendNewComment, loadComments} = dataComments.actions;
