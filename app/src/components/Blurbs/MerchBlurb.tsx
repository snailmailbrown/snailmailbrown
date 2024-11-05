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
      w="100vw"
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
          Exciting news! We have official Snail Mail merch! Share your love of Snail Mail with our custom sweaters!! 
          <br></br>
          <br></br>
          These are LIMITED EDITION, so grab one before we sell out!
          The design is hand-drawn by one of our Art Directors, Kendra Eastep, 
          and Kiara Anderson and features an adorable heart stamp design!
        </Text>
        <Button
          variant="solid"
          color="#77A3CD"
          bg="white"
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
          h="30rem"
          w="25rem"
          margin="10px"
          src="/images/snailmail/sweatshirt_back.png"
          borderRadius="2%"
        />
        <Image
          objectFit="cover"
          h="30rem"
          w="30rem"
          margin="10px"
          src="/images/snailmail/tote_bag.png"
          borderRadius="2%"
        />
      </GridItem>
    </Grid>
  );
}
