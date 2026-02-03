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
      templateAreas={{ base: `"left" "right"`, md: `"left right"` }}
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
      h={{ base: "auto", md: "93vh" }}
      py={{ base: "2rem", md: 0 }}
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
          h={{ base: "50vh", md: "70vh" }}
          w={{ base: "60vw", md: "30vw" }}
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
        px={{ base: "1rem", md: 0 }}
        pb={{ base: "2rem", md: 0 }}
      >
        <Text variant="subHeader" color="#000000">
          journal prompts
        </Text>
        <Image
          objectFit="contain"
          w="90%"
          mr={{ base: 0, md: "-8rem" }}
          mt={{ base: "-1rem", md: "-3rem" }}
          src="/images/star_divider_blue.png"
        />
        <Text variant="subtitleBig" w={{ base: "90%", md: "50%" }} color="#000000">
          - How was your winter break? Write about something you were grateful for that happened!
          <br />
          <br />
          - What's something you're really looking forward to this school year?
          <br />
          <br />
          - What are 3 goals you have for the semester? Try to think of one that's academic, one that's just for fun, and one that's a personal goal!
          <br />
          <br />
          - Make a vision board for the 2025-2026 school year!
        </Text>
      </GridItem>
    </Grid>
  );
}
