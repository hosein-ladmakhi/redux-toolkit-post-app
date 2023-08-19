import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { createPost, deletePostById, fetchPosts } from "./postService";

export const fetchPostsAction = createAsyncThunk(
  "posts/fetchPostsAction",
  fetchPosts
);

export const deletePostByIdAction = createAsyncThunk(
  "posts/deletePostByIdAction",
  deletePostById
);

export const createPostAction = createAsyncThunk(
  "posts/createPostAction",
  createPost
);

const postEntityAdapter = createEntityAdapter({});

const postSlice = createSlice({
  name: "posts",
  initialState: postEntityAdapter.getInitialState({
    loading: false,
    error: false,
    deletedPost: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsAction.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchPostsAction.fulfilled, (state, action) => {
        postEntityAdapter.setAll(state, action.payload);
      })
      .addCase(fetchPostsAction.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deletePostByIdAction.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deletePostByIdAction.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deletePostByIdAction.fulfilled, (state, action) => {
        postEntityAdapter.removeOne(state, action.payload);
      })
      .addCase(createPostAction.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(createPostAction.fulfilled, (state, action) => {
        postEntityAdapter.addOne(state, action.payload);
      })
      .addCase(createPostAction.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default postSlice.reducer;

export const {
  selectAll: selectAllPostsSelector,
  selectById: selectPostByIdSelector,
  selectEntities: selectAllPostsEntitiesSelector,
  selectIds: selectPostIdsSelector,
  selectTotal: selectPostsCountSelector,
} = postEntityAdapter.getSelectors((state) => state.postState);

export const selectDeletedPostCountSelector = (store) =>
  Object.keys(store.postState.deletedPost).length;
