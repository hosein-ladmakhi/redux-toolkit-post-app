import { useDispatch } from "react-redux";
import { deletePostByIdAction } from "./postSlice";

const PostItem = ({ title, content, id }) => {
  const dispatch = useDispatch();

  const onDeletePost = () => {
    if (window.confirm("are you sure to delete")) {
      dispatch(deletePostByIdAction(id));
    }
  };

  return (
    <div>
      <h1>
        {id} - {title}
      </h1>
      <p>{content}</p>
      <button onClick={onDeletePost}>Delete</button>
    </div>
  );
};

export default PostItem;
