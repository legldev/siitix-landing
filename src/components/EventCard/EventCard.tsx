import { Container, Row, Col, Image, Button } from "react-bootstrap";

type Props = {
  image: string;
  title: string;
  dateLocation: string;
  text: string;
  buttonText: string;
  buttonVariant: "primary" | "secondary";
  onButtonClick: () => void;
  reverse?: boolean;
};

const EventCard = ({
  image,
  title,
  text,
  dateLocation,
  buttonText,
  buttonVariant,
  reverse = false,
  onButtonClick,
}: Props) => (
  <Container>
    <Row>
      <Col md={6} className={reverse ? "order-md-2" : ""}>
        <Image src={require(`../../assets/${image}`)} fluid />
      </Col>
      <Col md={6} className={reverse ? "order-md-1" : ""}>
        <h2>{title}</h2>
        <h4>{dateLocation}</h4>
        <p>{text}</p>
        <Button variant={buttonVariant} onClick={onButtonClick}>
          {buttonText}
        </Button>
      </Col>
    </Row>
  </Container>
);

export default EventCard;
