import { ChakraProvider } from "@chakra-ui/react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./styles/global.css";
import "./styles/responsive.css";
import "./styles/switch.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import customTheme from "./styles/theme";
import About from "./components/About";
import Fonts from "./styles/fonts";
import Gallery from "./components/Gallery";
import Merch from "./components/Merch";
import Programs from "./components/Programs";
import Polaroids from "./components/Polaroids";
import ScrollToTop from "./ScrollToTop";

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <Fonts />
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/polaroids" element={<Polaroids />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
