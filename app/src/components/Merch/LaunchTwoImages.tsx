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
      h="80vh"
      w="100vw"
      alignItems={"top"}
    >
      {/* </Grid><Grid templateColumns="repeat(3, 1fr)" gap={8} w="65%" my="2rem"> */}
      <GridItem
        display="flex"
        alignItems={"center"}
        justifyContent="center"
      >
        <Image
          objectFit="cover"
          h="30rem"
          w="25rem"
          margin="10px"
          src="/images/snailmail/sweatshirt_front.png"
          borderRadius="2%"
        />
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