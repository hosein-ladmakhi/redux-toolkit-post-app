import { useDispatch } from "react-redux";
import CreatePostForm from "./CreatePostForm";
import PostContainerStatus from "./PostContainerStatus";
import PostList from "./PostList";
import { useEffect } from "react";
import { fetchPostsAction } from "./postSlice";

const PostContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsAction());
  }, []);

  return (
    <div>
      <PostContainerStatus />
      <CreatePostForm />
      <PostList />
    </div>
  );
};

export default PostContainer;
