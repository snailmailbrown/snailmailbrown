import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./styles/global.css";
import "./styles/switch.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import customTheme from "./styles/theme";
import About from "./components/About";
import Fonts from "./styles/fonts";
import Gallery from "./components/Gallery";
import Merch from "./components/Merch";
import Programs from "./components/Programs";

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <Fonts />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/programs" element={<Programs />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
