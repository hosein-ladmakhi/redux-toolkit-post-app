import { useSelector } from "react-redux";
import {
  selectDeletedPostCountSelector,
  selectPostsCountSelector,
} from "./postSlice";

const PostContainerStatus = () => {
  const totalPosts = useSelector(selectPostsCountSelector);
  const totalDeletedPost = useSelector(selectDeletedPostCountSelector);

  return (
    <>
      <span>Total Records: {totalPosts}</span>
      <br />
      <span>Total Deleted Records: {totalDeletedPost}</span>
    </>
  );
};

export default PostContainerStatus;
