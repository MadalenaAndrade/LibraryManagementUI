import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddResource from "./pages/AddResource";
import DeleteResource from "./pages/DeleteResource";
import UpdateResource from "./pages/UpdateResource";
import GetResource from "./pages/GetResource";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddResource />} />
        <Route path="/delete" element={<DeleteResource />} />
        <Route path="/update" element={<UpdateResource />} />
        <Route path="/get" element={<GetResource />} />
      </Routes>
    </>
  );
}
