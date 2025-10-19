import "./App.css";
import Home from "./components/Home.jsx";
import Book from "./components/Book.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </Router>
  );
};

export default App;
