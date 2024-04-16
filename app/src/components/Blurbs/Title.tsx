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

export default function Title() {
  return (
    <Grid
      templateAreas={`"left right"`}
      gridTemplateColumns={"1fr 1.1fr"}
      h="93vh"
      w="100vw"
      p="20px"
      alignItems={"center"}
    >
      <GridItem area={"left"} alignItems={"center"} p="10rem">
        <Text variant={"bigHeader"} color="#8EA6D5" lineHeight={"85%"}>
          Snail
        </Text>
        <Text
          variant={"bigHeader"}
          color="#8EA6D5"
          justifyContent={"flex-end"}
          lineHeight={"85%"}
        >
          Mail
        </Text>
        <Text
          variant={"subtitleBold"}
          color="#959493"
          justifyContent={"flex-end"}
          mb="2rem"
        >
          @BROWN
        </Text>
        <Button
          display="flex"
          justifyContent={"space-between"}
          variant="outline"
          pr="0"
          w="90%"
          mb="1rem"
          rightIcon={<HiArrowCircleRight size={"2.5rem"} color={"#8EA6D5"} />}
        >
          Subscribe to our Listserv
        </Button>
        <Text
          variant={"subtitle"}
          color="#6F6F6F"
          textAlign={"justify"}
          w="90%"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </GridItem>
      <GridItem area={"right"} alignItems={"center"} justifyContent="center">
        <Image
          objectFit="contain"
          maxHeight="50%"
          maxWidth="65%"
          src="/images/stamps.png"
          borderRadius={"1rem"}
        />
      </GridItem>
    </Grid>
  );
}
