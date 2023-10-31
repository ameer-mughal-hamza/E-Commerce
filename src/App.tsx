import "./App.scss";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Products from "./components/Products/Products";
import ProductDetail from "./components/ProductDetail/ProductDetail";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

function About() {
  return <h1>About</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}

function Store() {
  return <h1>Store</h1>;
}

const router = createBrowserRouter([
  {
    path: "/car",
    element: <Carousel />,
  },
  {
    path: "/gar",
    element: <Gallery />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/store", element: <Store /> },
      { path: "/products", element: <Products /> },
      { path: "/product/details", element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
