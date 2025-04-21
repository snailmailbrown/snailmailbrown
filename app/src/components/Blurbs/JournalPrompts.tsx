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

export default function JournalPrompts() {
  const navigate = useNavigate();

  return (
    <Grid
      templateAreas={`"left right"`}
      gridTemplateColumns={"1fr 1fr"}
      h="93vh"
      w="100%"
      alignItems={"center"}
    >
      <GridItem
        area={"right"}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
      >
        <Image
          objectFit="cover"
          h="70vh"
          w="30vw"
          src="/images/snailmail/julie_emily_wen.jpg"
          borderTopRadius={"46%"}
        />
      </GridItem>
      <GridItem
        area={"left"}
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent="center"
      >
        <Text variant="subHeader" color="#000000">
          journal prompts
        </Text>
        <Image
          objectFit="contain"
          w="90%"
          mr="-8rem"
          mt="-3rem"
          src="/images/star_divider_blue.png"
        />
        <Text variant="subtitleBig" w="50%" color="#000000">
          - Rose, Bud, Thorn: What's something good that happened today? What's
          something you're looking forward to? What's something that wasn't so
          great?
          <br />
          <br />
          - How was Spring Break? What was your favorite memory?
          <br />
          <br />
          - What's your goal for this week?
          <br />
          <br />
          - Favorite Snail Mail event of the semester?
          <br />
          <br />- Write yourself a love letter!
        </Text>
      </GridItem>
    </Grid>
  );
}
