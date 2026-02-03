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
      templateAreas={{ base: `"left" "right"`, md: `"left right"` }}
      gridTemplateColumns={{ base: "1fr", md: "2fr 3fr" }}
      h={{ base: "auto", md: "93vh" }}
      py={{ base: "2rem", md: 0 }}
      w="100%"
      alignItems={"center"}
      bg="#8EA6D5"
    >
      <GridItem
        area={"left"}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        flexDir={"column"}
        px={{ base: "1rem", md: 0 }}
      >
        <Text variant="subHeader" color="white">
          merch !
        </Text>
        <Text variant="subtitle" color="white" w={{ base: "85%", md: "50%" }}>
          Want to rep your love of Snail Mail wherever you go?
          <br></br>
          <br></br>
          Exciting news! We have official Snail Mail merch! Each collection features hand drawn graphics from our wonderful Art Directors, and rumor has it they're itching to make some new designs. We may
          be launching a new collection very soon...
        </Text>
        <Button
          variant="solid"
          color="#77A3CD"
          bg="white"
          m="2rem"
          onClick={() => navigate("/merch")}
        >
          Want to Learn More?
        </Button>
      </GridItem>
      <GridItem
        area={"right"}
        display="flex"
        alignItems={"center"}
        justifyContent={{ base: "center", md: "flex-start" }}
        flexDir={{ base: "column", md: "row" }}
        gap={{ base: "1rem", md: 0 }}
      >
        <Image
          objectFit="cover"
          h={{ base: "auto", md: "90%" }}
          w={{ base: "70vw", md: "43%" }}
          margin={{ base: 0, md: "10px" }}
          src="/images/snailmail/sweatshirt_back.png"
          borderRadius="2%"
        />
        <Image
          objectFit="cover"
          h={{ base: "auto", md: "90%" }}
          w={{ base: "75vw", md: "48%" }}
          margin={{ base: 0, md: "10px" }}
          src="/images/snailmail/tote_bag.png"
          borderRadius="2%"
          display={{ base: "none", md: "block" }}
        />
      </GridItem>
    </Grid>
  );
}
