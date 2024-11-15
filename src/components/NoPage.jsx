import Card from "react-bootstrap/Card";

function NoPage() {
  return (
    <Card className="flex-row align-items-center m-3">
      <Card.Img variant="top" src="/vite.svg" style={{ width: "18rem" }} />
      <Card.Body style={{ width: "18rem" }}>
        <Card.Title>Error 404: ¡Página Perdida en el Huerto!</Card.Title>
        <Card.Text>
          Ups... Parece que esta página se nos fue rodando como una papa.
        </Card.Text>
        <Card.Text>
          No te preocupes, a veces las URL son como calabazas inquietas... ¡se
          pierden entre las filas de lechugas!
        </Card.Text>
        <Card.Text>
          Mientras intentamos encontrar esta página, vuelve a la Página
          Principal y explora otros productos frescos.
        </Card.Text>
        <Card.Text>
          Contacta con nosotros si necesitas ayuda (prometemos no responder con
          un pepino 🥒)
        </Card.Text>
        <Card.Text>
          Gracias por tu paciencia. En nuestra verdulería digital, hasta las
          páginas a veces se van de cosecha.
        </Card.Text>
        <Card.Text>¡Nos vemos pronto!</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default NoPage;
