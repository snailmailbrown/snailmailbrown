import React, { useRef } from "react";
import { Button, ButtonGroup, Flex, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import { HiArrowCircleRight } from "react-icons/hi";
import Welcome from "./Merch/Welcome";
import LaunchOne from "./Merch/LaunchOne";
import LaunchTwo from "./Merch/LaunchTwo";

export default function Merch() {
  return (
    <div>
        <Welcome/>
        <LaunchOne/>
        <LaunchTwo/>
    </div>
    
  );
}