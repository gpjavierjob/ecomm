import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Item({ id, name, price, uom, category, image }) {
  console.log(`Item - id: ${id}`);
  return (
    <Link to={`/item/${id}`}>
      <Card border="success-subtle" key={id} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{category}</Card.Subtitle>
          <Card.Text>
            <span>${price.toFixed(2)}</span>
            <span className="p-2">-</span>
            <span>{uom}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default Item;
