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
import { useNavigate } from "react-router-dom";


export default function AboutBlurb() {
  const navigate = useNavigate();

  return (
    <Grid
      templateAreas={`"left right"`}
      gridTemplateColumns={"1fr 1fr"}
      h="93vh"
      w="100vw"
      alignItems={"center"}
      bg="#AABBDC"
    >
      <GridItem
        area={"left"}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
      >
        <Image
          objectFit="cover"
          h="70vh"
          w="30vw"
          src="/images/white.png"
          borderTopRadius={"46%"}
        />
      </GridItem>
      <GridItem
        area={"right"}
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent="center"
      >
        <Text variant="subHeader" color="white">
          about us
        </Text>
        <Image
          objectFit="contain"
          w="90%"
          mr="-8rem"
          mt="-3rem"
          src="/images/star_divider.png"
        />
        <Text variant="subtitle" w="50%" color="white">
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
        <Button
          variant="solid"
          color="#AABBDC"
          m="2rem"
          onClick={() => navigate("/about")}
        >
          LEARN MORE
        </Button>
      </GridItem>
    </Grid>
  );
}
