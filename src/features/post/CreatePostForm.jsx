import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPostAction } from "./postSlice";

const CreatePostForm = () => {
  const [title, setTitle] = useState("");
  const onChangeTitle = (event) => setTitle(event.currentTarget.value);

  const [content, setContent] = useState("");
  const onChangeContent = (event) => setContent(event.currentTarget.value);

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const post = {
      title,
      content,
    };
    dispatch(createPostAction(post));
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={onSubmit} style={styles.form}>
      <div>
        <label>title </label>
        <input type="text" value={title} onChange={onChangeTitle} />
      </div>
      <br></br>
      <div>
        <label>content </label>
        <input type="text" value={content} onChange={onChangeContent} />
      </div>
      <br />
      <button>Save Post</button>
    </form>
  );
};

export default CreatePostForm;

const styles = {
  form: {
    padding: "20px",
    margin: "20px",
    border: "2px solid #000",
  },
};
