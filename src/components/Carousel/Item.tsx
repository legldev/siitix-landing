import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

type Props = {
  image: string;
  dateLocation: string;
  title: string;
  onButtonClick: () => void;
};

const Item = ({ image, dateLocation, title, onButtonClick }: Props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={require(`../../assets/${image}`)} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{dateLocation}</Card.Text>
        <Button variant="primary" onClick={onButtonClick}>
          Get Tickets
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
