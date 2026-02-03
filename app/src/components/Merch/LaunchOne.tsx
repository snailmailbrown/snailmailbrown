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

export default function LaunchOne() {
  return (
    <Grid
      templateAreas={{ base: `"right" "left"`, md: `"left right"` }}
      gridTemplateColumns={{ base: "1fr", md: "1.5fr 3fr" }}
      h={{ base: "auto", md: "93vh" }}
      py={{ base: "2rem", md: 0 }}
      w="100vw"
      alignItems={"center"}
      bg={"#FFEEDA"}
    >
      {/* </Grid><Grid templateColumns="repeat(3, 1fr)" gap={8} w="65%" my="2rem"> */}
      <GridItem
        area={"left"}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        flexDir={"column"}
        px={{ base: "1rem", md: 0 }}
        pt={{ base: "2rem", md: 0 }}
      >
        <Text variant="subHeader" align={"center"} color="#303030" lineHeight={"90%"} mb="2rem">
          snail mail <br></br> merch <br></br> launch 1.0
        </Text>
        <Text variant="tinyHeader" align={"center"} color="#303030" lineHeight={"90%"} mb="2rem">
          sold out !
        </Text>
        <Text variant="subtitle" color="#303030" w={{ base: "85%", md: "50%" }} mb="2rem">
        Two years ago we launched our very first piece of snail mail merchandise with 
        our cozy custom sweaters. The design is hand-drawn by one of our former Art Directors, 
        Sienna Lew, and features a bullet journaling/scrapbooking spread on the back, 
        and a Snail Mail x Brown logo in the front! 
        </Text>
      </GridItem>
      <GridItem
        area={"right"}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        flexDir={{ base: "row", md: "row" }}
        gap={{ base: "0.5rem", md: 0 }}
      >
        <Image
          objectFit="cover"
          h={{ base: "auto", md: "90%" }}
          w={{ base: "45%", md: "40%" }}
          margin={{ base: 0, md: "10px" }}
          src="/images/snailmail/merch_2.png"
          borderRadius="2%"
        />
        <Image
          objectFit="cover"
          h={{ base: "auto", md: "90%" }}
          w={{ base: "45%", md: "50%" }}
          margin={{ base: 0, md: "10px" }}
          src="/images/snailmail/merch_3.png"
          borderRadius="2%"
        />
      </GridItem>
    </Grid>
  );
}