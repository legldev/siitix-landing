import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ButtonLink } from "../ButtonLink/ButtonLink";

type Props = {
  image: string;
  dateLocation: string;
  title: string;
  onButtonClick: () => void;
};

const Item = ({ image, dateLocation, title, onButtonClick }: Props) => {
  return (
    <Card style={{ width: "18rem", height: "100%", textAlign: "center" }}>
      <Card.Img variant="top" src={require(`../../assets/${image}`)} />
      <Card.Body style={{ backgroundColor: "#012E40", color: "#F2F2F2" }}>
        <Card.Title className="carouselTitle">{title}</Card.Title>
        <Card.Text className="carouselDateLocation">{dateLocation}</Card.Text>
        <ButtonLink text="Get Tickets" onButtonClick={onButtonClick} />
      </Card.Body>
    </Card>
  );
};

export default Item;
