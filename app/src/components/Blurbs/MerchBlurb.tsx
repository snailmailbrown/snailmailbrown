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

export default function MerchBlurb() {
  const navigate = useNavigate();

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
          Exciting news! We have official Snail Mail merch! Share your love of Snail Mail with our custom sweaters!! 
          <br></br>
          <br></br>
          These are LIMITED EDITION, so grab one before we sell out!
          The design is hand-drawn by one of our Art Directors, Sienna Lew, 
          and features a bullet journaling/scrapbooking spread on the back, 
          and a Snail Mail x Brown logo in the front! 
        </Text>
        <Button
          variant="solid"
          color="white"
          bg="#6D5B51"
          m="2rem"
          onClick={() => navigate("/merch")}
        >
          Check it out!
        </Button>
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
          src="/images/snailmail/merch_1.png"
        />
      </GridItem>
    </Grid>
  );
}
