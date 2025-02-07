import { useState } from "react";
import { Button, Card } from "react-bootstrap";

function SingleBook(props) {
  const [selected, setSelected] = useState(false);
  const { img, title, asin, category, price } = props;

  return (
    <Card style={{ width: "18rem", margin: "10px", border: selected ? "2px solid red" : undefined }} key={asin}>
      <Card.Img className="h-50" onClick={() => setSelected((prev) => !prev)} variant="top" src={img} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Categoria: {category}</Card.Text>
        <Card.Text>{price}€</Card.Text>
        <Button variant="primary" className="btn-success">
          Acquista
        </Button>
      </Card.Body>
    </Card>
  );
}
export default SingleBook;
