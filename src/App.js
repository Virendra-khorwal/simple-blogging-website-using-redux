import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";
import { Route, Routes } from "react-router-dom";

import SinglePostPage from "./features/posts/SinglePostPage";
import Layout from "./components/Layout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm/>} />
          <Route path=":postId" element={<SinglePostPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
