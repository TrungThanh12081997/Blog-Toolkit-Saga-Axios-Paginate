
import {  createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommentServices, PostServices } from "services/test/type";

interface StaticState {
    error?: string;
    posts?: PostServices[];
    comments?: CommentServices[];
}

const initialState: StaticState = {
    posts: [],
    comments: [],
};

export const testSlice = createSlice({
    name: "testReducer",
    initialState,
    reducers: {
        setPosts($state, action: PayloadAction<PostServices[]>) {
            $state.posts = action.payload;
        },
        setComments($state, action: PayloadAction<CommentServices[]>) {
            $state.comments = action.payload;
        },
    },
    extraReducers() {
        // builder.addCase(getStaticTestPostAsync.fulfilled, ($state, action) => {
        //     $state.dataPost = action.payload;
        // });
    },
});

export const { setPosts, setComments } = testSlice.actions;

export default testSlice.reducer;
