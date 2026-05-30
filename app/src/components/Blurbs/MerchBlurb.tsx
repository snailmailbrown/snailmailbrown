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
      gridTemplateColumns={"2fr 3fr"}
      h="93vh"
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
      >
        <Text variant="subHeader" color="white">
          merch !
        </Text>
        <Text variant="subtitle" color="white" w="50%">
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
        justifyContent="flex-start"
      >
        <Image
          objectFit="cover"
          h="90%"
          w="43%"
          margin="10px"
          src="/images/snailmail/sweatshirt_back.png"
          borderRadius="2%"
        />
        <Image
          objectFit="cover"
          h="90%"
          w="48%"
          margin="10px"
          src="/images/snailmail/tote_bag.png"
          borderRadius="2%"
        />
      </GridItem>
    </Grid>
  );
}
