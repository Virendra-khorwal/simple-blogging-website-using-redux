import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from 'date-fns'

const initialState = [
  {
    id: 1,
    title: "Testing 1",
    content: "Just content, content and content. Lorem Ipsum.",
    date: sub(new Date(), {minutes: 10}).toISOString()
  },
  {
    id: 2,
    title: "Testing 2",
    content: "Random Content for posts to work on redux.",
    date: sub(new Date(), {minutes: 5}).toISOString()
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
