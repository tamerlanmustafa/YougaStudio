import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import "./Styles/styles.scss"
import Home from "./Components/Home";
import Header from "./Components/Header";
import Contact from "./Components/Pages/Contact";
import Classes from "./Components/Pages/Classes";
import Blogs from "./Components/Pages/Blogs";
import About from "./Components/Pages/About";



 
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
