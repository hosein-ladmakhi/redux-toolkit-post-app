import httpClient from "../../api";

export const fetchPosts = () =>
  httpClient
    .get("/posts")
    .then((data) => data.posts)
    .catch((error) => error);

export const deletePostById = (id) =>
  httpClient
    .delete(`/posts/${id}`)
    .then(() => id)
    .catch((error) => error);

export const createPost = (post) =>
  httpClient
    .post("/posts", post)
    .then((data) => data.post)
    .catch((err) => err);
