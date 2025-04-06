import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddResource from "./pages/AddResource";
import DeleteResource from "./pages/DeleteResource";
import UpdateResource from "./pages/UpdateResource";
import GetResource from "./pages/GetResource";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App() {
  const homeRoute = "/";
  const addRoute = "/add";
  const deleteRoute = "/delete";
  const updateRoute = "/update";
  const getRoute = "/get";
  const aboutRoute = "/about";
  const contactRoute = "/contact";

  return (
    <>
      <div className="navHeader">
        <nav>
          <ul>
            <NavBar path={homeRoute} text="Home" />
            <NavBar path={addRoute} text="Add Resource" />
            <NavBar path={deleteRoute} text="Delete Resource" />
            <NavBar path={updateRoute} text="Update Resource" />
            <NavBar path={getRoute} text="Get Resource" />
            <NavBar path={aboutRoute} text="About" />
            <NavBar path={contactRoute} text="Contact" />
          </ul>
        </nav>

        <Header />
      </div>

      <div className="pageContent">
        <Routes>
          <Route path={homeRoute} element={<Home />} />
          <Route path={addRoute} element={<AddResource />} />
          <Route path={deleteRoute} element={<DeleteResource />} />
          <Route path={updateRoute} element={<UpdateResource />} />
          <Route path={getRoute} element={<GetResource />} />
          <Route path={aboutRoute} element={<About />} />
          <Route path={contactRoute} element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}
