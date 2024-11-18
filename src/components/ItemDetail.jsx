import Card from "react-bootstrap/Card";

function ItemDetail({ id, name, description, price, uom, category, image }) {
  return (
    <Card
      border="success-subtle"
      key={id}
      className="flex-row flex-wrap justify-content-center align-items-center m-3"
    >
      <Card.Img variant="top" src={image} style={{ width: "15rem" }} />
      <Card.Body
        className="text-center text-md-start"
        style={{ width: "15rem" }}
      >
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{category}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          <span>${price.toFixed(2)}</span>
          <span className="p-2">-</span>
          <span>{uom}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;
