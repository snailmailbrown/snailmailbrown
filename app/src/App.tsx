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

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <Fonts />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
