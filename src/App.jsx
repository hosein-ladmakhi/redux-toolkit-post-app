import PostContainer from "./features/post/PostContainer";
import StoreProvider from "./store/Provider";

const App = () => {
  return (
    <StoreProvider>
      <PostContainer />
    </StoreProvider>
  );
};

export default App;
