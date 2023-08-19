import { useSelector } from "react-redux";
import { selectAllPostsEntitiesSelector } from "./postSlice";
import PostItem from "./PostItem";

const PostList = () => {
  const posts = useSelector(selectAllPostsEntitiesSelector);

  return (
    <ul>
      {Object.values(posts).map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </ul>
  );
};

export default PostList;
