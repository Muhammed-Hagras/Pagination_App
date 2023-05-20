import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { postId } = useParams();
  const [onePost, setOnePost] = useState({});
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      setloading(true);
      const res = await axios.get(
        `https://fakestoreapi.com/products/${postId}`
      );
      setOnePost(res.data);
      setloading(false);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <>
        <div className="container py-5">
          <div className="row py-4">
            <div className="col-md-6">
              <img
                src={onePost.image}
                alt={onePost.title}
                height="400px"
                width="400px"
              ></img>
            </div>
            <div className="col-md-6">
              <h4 className="text-uppercase text-black-50">
                {onePost.category}
              </h4>
              <h1 className="display-5">{onePost.title}</h1>
              <p className="lead fw-bolder">
                Rating {onePost.rating && onePost.rating.rate}
                <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6 fw-bold my-4">${onePost.price}</h3>
              <p className="lead">{onePost.description}</p>
              {/* <button className="btn btn-outline-dark px-4 py-2" onClick={()=> addonePost(onePost)}>
            Add to cart
          </button>
          <NavLink to='/cart' className="btn btn-outline-dark ms-2 px-3">
            Go to cart
          </NavLink> */}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Post;
