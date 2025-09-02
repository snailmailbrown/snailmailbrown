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
      gridTemplateColumns={"3fr 1.5fr"}
      h="93vh"
      w="100vw"
      alignItems={"center"}
      bg={"#8EA6D5"}
    >
      {/* </Grid><Grid templateColumns="repeat(3, 1fr)" gap={8} w="65%" my="2rem"> */}
      <GridItem
        area={"right"}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        flexDir={"column"}
      >
        <Text variant="subHeader" align={"center"} color="white" lineHeight={"90%"} mb="2rem">
          snail mail <br></br> merch <br></br> launch 2.0
        </Text>
        <Text variant="tinyHeader" align={"center"} color="white" lineHeight={"90%"} mb="2rem">
          so popular we had to make more!
        </Text>
        <Text variant="subtitle" color="white" w="50%" mb="2rem">
        Last year our merch featured not one but TWO items available for purchase! You guys wanted a Snail Mail tote bag, so obviously we had to make one. 
        <br />
        <br />
        This lovely blue stamp design was designed by our very own Kendra Eastep with inspiration from fellow snail Kiara Anderson.
        </Text>
      </GridItem>
      <GridItem
        area={"left"}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
      >
        <Image
          objectFit="cover"
          h="90%"
          w="45%"
          margin="10px"
          src="/images/snailmail/tote_bag.png"
          borderRadius="2%"
        />
        <Image
          objectFit="cover"
          h="90%"
          w="40%"
          margin="10px"
          src="/images/snailmail/sweatshirt_back.png"
          borderRadius="2%"
        />
      </GridItem>
    </Grid>
  );
}