import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Posts = ({ loading, posts }) => {
  const navigate = useNavigate();

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="row gap-2 justify-content-center py-5">
      {posts.map((post) => (
        <Card key={post.id} style={{ width: "18rem" }}>
          <Card.Img
            src={post.image}
            variant="top"
            height="400px"
            width="400px"
          ></Card.Img>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.description.slice(0, 150)}</Card.Text>
            <Button onClick={() => navigate(`/${post.id}`)} variant="primary">
              Go somewhere {post.id}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Posts;
