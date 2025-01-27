import React, { useRef } from "react";
import {
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  Text,
  Image,
} from "@chakra-ui/react";
import { HiArrowCircleRight } from "react-icons/hi";

export default function Merch() {
  return (
    <Grid
      h="100vh"
      w="100vw"
      p="20px"
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
    >
      <GridItem area={"center"} alignItems={"center"}>
        <Text variant={"bigHeader"} color="#8EA6D5" lineHeight={"90%"}>
          We have merch!
        </Text>
      </GridItem>
      
    </Grid>
  );
}
