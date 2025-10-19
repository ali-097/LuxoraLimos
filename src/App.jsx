import { useLayoutEffect } from "react";
import Home from "./components/Home.jsx";
import Book from "./components/Book.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};

const App = () => {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </Wrapper>
    </Router>
  );
};

export default App;
