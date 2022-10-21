import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = [
    {id:1, title: 'Testing 1', content: 'Just content, content and content. Lorem Ipsum.'},
    {id:2, title: 'Testing 2', content: 'Random Content for posts to work on redux.'}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                    }
                }
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;