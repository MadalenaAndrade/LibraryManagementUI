import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import NavMenu from "./components/layout/NavMenu";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import AddResource from "./pages/AddResource";
import GetResource from "./pages/GetResource";
import UpdateResource from "./pages/UpdateResource";
import DeleteResource from "./pages/DeleteResource";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <div className="navHeader">
        <NavMenu />
        <Header />
      </div>

      <div className="pageContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddResource />} />
          <Route path="/get" element={<GetResource />} />
          <Route path="/update" element={<UpdateResource />} />
          <Route path="/delete" element={<DeleteResource />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}
