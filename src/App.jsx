import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

function App() {
  const [posts, setposts] = useState([]);
  const [loading, setloading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  useEffect(() => {
    const fetchPosts = async () => {
      setloading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setposts(res.data);
      setloading(false);
    };
    fetchPosts();
  }, []);

  // Get Curret Posts
  const firstIndex = currentPage * postsPerPage;
  const lastIndex = firstIndex - postsPerPage;
  const currentPosts = posts.slice(lastIndex, firstIndex);

  const paginate = (pageNumber) => setcurrentPage(pageNumber);
  const previousPage = () => {
    if (currentPage !== 1) {
      setcurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(posts.length / postsPerPage)) {
      setcurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="container text-center py-3 px-5">
        <h2>Pagination</h2>
        <h2>Blog Posts</h2>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </div>
    </>
  );
}

{
  /* <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/product/:id' element={<Product/>}/>
<Route path='/products/:id' element={<Products/>}/>
</Routes>
<Footer/> */
}

export default App;
