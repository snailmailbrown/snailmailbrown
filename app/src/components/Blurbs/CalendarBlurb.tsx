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

export default function CalendarBlurb() {
  return (
    <Grid
      templateAreas={`"left right"`}
      gridTemplateColumns={"1fr 1fr"}
      h="93vh"
      w="100vw"
      alignItems={"center"}
    >
      <GridItem
        area={"left"}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
      >
        <Image
          objectFit="cover"
          h="30rem"
          w="40rem"
          src="/images/grey.png"
        />
      </GridItem>
      <GridItem
        area={"right"}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        flexDir={"column"}
      >
        <Text variant="subHeader" color="#303030" lineHeight={"90%"} mb="2rem">
          meetings <br></br>+ events
        </Text>
        <Text variant="subtitle" color="#303030" w="50%" mb="2rem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          <br></br>
          <br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <Button variant="solid" bg="#303030" color="white">
          Add to calendar
        </Button>
      </GridItem>
    </Grid>
  );
}
