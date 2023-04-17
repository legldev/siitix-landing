import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
