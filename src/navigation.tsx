import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Index from "./pages/Index";
import Offers from "./pages/Offers";
import OurProducts from "./pages/OurProducts";
import RootLayout from "./pages/Rootlayout";

const Navigation = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Index />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="ourproducts" element={<OurProducts />}></Route>
        <Route path="offers" element={<Offers />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Route>
    </Routes>
  );
};

export default Navigation;
