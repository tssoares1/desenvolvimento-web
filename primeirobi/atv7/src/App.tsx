import { useEffect, useState } from "react";
import "./App.css";
import Article from "./components/Article";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { defaultPost, getPost } from "./data/posts";
import type { Post } from "./schemas/post";

function App() {
  const [post, setPost] = useState<Post>(defaultPost);

  useEffect(() => {
    (async () => {
      const post = await getPost();

      setPost(post);
    })();
  }, []);

  return (
    <div className="page">
      <Header />
      <main className="main">
        <Article post={post} />
        <Aside />
      </main>
      <Footer />
    </div>
  );
}

export default App;
