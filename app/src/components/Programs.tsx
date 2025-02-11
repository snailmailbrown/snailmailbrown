import React, { useRef } from "react";
import { Button, ButtonGroup, Flex, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import { HiArrowCircleRight } from "react-icons/hi";
import PenPal from "./Programs/PenPal";
import Forms from "./Programs/Forms";


export default function Programs() {
  return (
    <div>
        <PenPal/>
        <Forms/>
    </div>
    
  );
}