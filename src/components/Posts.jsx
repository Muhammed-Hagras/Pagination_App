import { Button, Card } from "react-bootstrap";

const Posts = ({ loading, posts }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="row gap-2">
      {posts.map((post) => (
        <Card key={post.id} style={{ width: "18rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
            <Button variant="primary">Go somewhere {post.id}</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Posts;
