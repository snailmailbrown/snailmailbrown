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
          src="/images/snailmail/og_eboard.png"
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
        We’re a community celebrating the art of handwritten letters, journaling, scrapbooking, etc.
        We foster artistic creativity, reflection, and wellness by holding community events and meetings. 
        Snail Mail provides equitable access to bullet journaling, letter-writing, and scrapbooking supplies for all.

          <br></br>
          <br></br>
          We hold weekly meetings on Mondays from 7-9 PM in Friedman 101, open to all students at Brown and RISD. Come join us!
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
