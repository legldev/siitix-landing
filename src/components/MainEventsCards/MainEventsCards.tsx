import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ourLeagues } from "../../pages/dataset";
import { ButtonLink } from "../ButtonLink/ButtonLink";

export const MainEventsCards = () => {
  const handleClick = (link: string) => {
    window.location.href = link;
  };
  return (
    <>
      <h1 className="title-solano">Our Leagues</h1>
      {ourLeagues.map((event) => (
        <Card
          style={{
            width: "45%",
            textAlign: "center",
            margin: "1em",
            border: "none",
            background: "none",
            borderRadius: "0",
          }}
        >
          <Card.Img
            variant="top"
            src={require(`../../assets/${event.image}`)}
          />
          <Card.Body
            style={{
              textAlign: "center",
              backgroundColor: "#012E40",
              color: "#F2F2F2",
              paddingBottom: "2em",
            }}
          >
            <Card.Title className="maineventCards-title">
              {event.title}
            </Card.Title>
            <Card.Subtitle className="maineventCards-subtitle">
              {event.subtitle}
            </Card.Subtitle>
            <ButtonLink
              text="Get Tickets"
              onButtonClick={() => handleClick(event.link)}
            />
          </Card.Body>
        </Card>
      ))}
    </>
  );
};
