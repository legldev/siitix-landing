import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Container from "react-bootstrap/Container";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Container fluid>
      <App />
    </Container>
  </BrowserRouter>
);

reportWebVitals();
