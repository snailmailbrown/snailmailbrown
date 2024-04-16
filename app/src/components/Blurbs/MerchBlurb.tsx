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

export default function MerchBlurb() {
  return (
    <Grid
      templateAreas={`"left right"`}
      gridTemplateColumns={"1fr 1fr"}
      h="93vh"
      w="100vw"
      alignItems={"center"}
      bg="#FFEEDA"
    >
      <GridItem
        area={"left"}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        flexDir={"column"}
      >
        <Text variant="subHeader" color="#6D5B51">
          merch !
        </Text>
        <Text variant="subtitle" color="#6D5B51" w="50%">
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
      </GridItem>
      <GridItem
        area={"right"}
        display="flex"
        alignItems={"center"}
        justifyContent="flex-start"
      >
        <Image
          objectFit="cover"
          h="25rem"
          w="35rem"
          src="/images/white.png"
        />
      </GridItem>
    </Grid>
  );
}
