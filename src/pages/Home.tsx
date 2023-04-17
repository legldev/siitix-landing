import { Row } from "react-bootstrap";
import Header from "../components/Header";
import EventCard from "../components/EventCard/EventCard";
import { dataset } from "./dataset";
import { CarouselComponent } from "../components/Carousel/Carousel";
import { MainEventsCards } from "../components/MainEventsCards/MainEventsCards";

function Home() {
  const handleClick = (link: string) => {
    window.location.href = link;
  };
  return (
    <>
      <Row>
        <Header />
      </Row>
      <Row className="maineventsRow">
        <MainEventsCards />
      </Row>
      <Row>
        <CarouselComponent />
      </Row>
      <Row>
        {dataset.map((event, index) => (
          <EventCard
            buttonText="Get tickets"
            image={event.image}
            dateLocation={event.dateLocation}
            title={event.title}
            text={event.description}
            reverse={index % 2 === 1}
            buttonVariant={"primary"}
            onButtonClick={() => handleClick(event.link)}
          />
        ))}
      </Row>
    </>
  );
}

export default Home;
