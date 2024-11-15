import Card from "react-bootstrap/Card";

function ItemDetail({ id, name, description, price, uom, category, image }) {
  return (
    <Card key={id} className="flex-row flex-wrap align-items-center m-3">
      <Card.Img variant="top" src={image} style={{ width: "18rem" }} />
      <Card.Body
        className="text-center text-md-start"
        style={{ width: "18rem" }}
      >
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{category}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          <span>${price}</span>
          <span className="p-2">-</span>
          <span>{uom}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;
