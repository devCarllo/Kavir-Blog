import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import AuthorsPage from "./pages/AuthorsPage";
import Page404 from "./pages/Page404";
import BlogsPage from "./pages/BlogsPage";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs/:slug" element={<PostPage />} />
          <Route path="/authors/:slug" element={<AuthorsPage />} />
          <Route path="blogs" element={<BlogsPage />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
