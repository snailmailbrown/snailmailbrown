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
      templateAreas={`"left right"`}
      gridTemplateColumns={"1.5fr 3fr"}
      h="93vh"
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
      >
        <Text variant="subHeader" align={"center"} color="#303030" lineHeight={"90%"} mb="2rem">
          snail mail <br></br> merch <br></br> launch 1.0
        </Text>
        <Text variant="tinyHeader" align={"center"} color="#303030" lineHeight={"90%"} mb="2rem">
          sold out !
        </Text>
        <Text variant="subtitle" color="#303030" w="50%" mb="2rem">
        Last year we launched our very first piece of snail mail merchandise with 
        our cozy custom sweaters. The design is hand-drawn by one of our former Art Directors, 
        Sienna Lew, and features a bullet journalling/scrapbooking spread on the back, 
        and a Snail Mail x Brown logo in the front! 
        </Text>
      </GridItem>
      <GridItem
        area={"right"}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
      >
        <Image
          objectFit="cover"
          h="30rem"
          w="25rem"
          margin="10px"
          src="/images/snailmail/merch_2.png"
          borderRadius="2%"
        />
        <Image
          objectFit="cover"
          h="30rem"
          w="35rem"
          margin="10px"
          src="/images/snailmail/merch_3.png"
          borderRadius="2%"
        />
      </GridItem>
    </Grid>
  );
}