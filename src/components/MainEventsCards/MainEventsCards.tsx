import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ourLeagues } from "../../pages/dataset";

export const MainEventsCards = () => {
  const handleClick = (link: string) => {
    window.location.href = link;
  };
  return (
    <>
      {ourLeagues.map((event) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={require(`../../assets/${event.image}`)}
          />
          <Card.Body>
            <Card.Title>{event.title}</Card.Title>
            <Button variant="primary" onClick={() => handleClick(event.link)}>
              Get Tickets
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};
