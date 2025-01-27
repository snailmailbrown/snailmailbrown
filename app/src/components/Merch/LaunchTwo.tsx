import React, { useRef } from "react";
import {
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
import { HiArrowCircleRight } from "react-icons/hi";

export default function Merch() {
  return (
    <Grid
      h="50vh"
      w="100%"
      p="20px"
      alignItems={"bottom"}
      justifyContent={"center"}
      display={"flex"}
      flexDir={"row"}
    >
      <GridItem area={"center"} alignItems={"center"} p="10rem">
        <Text variant={"bigHeader"} align={"center"} color="#8EA6D5" lineHeight={"85%"}>
         Coming Soon!
         <br></br>
         <br></br>
        </Text>
        <Text variant="subtitleBold" align={"center"} color="#5F6061">
          snail mail merch launch 2.0
          <br></br>
          <br></br>
        </Text>
        <Text variant="subtitle" align="center" color="#5F6061">
          fill out this <Link variant="pageLink" href="https://docs.google.com/forms/d/e/1FAIpQLSdpR0cBX9r327UmPeow4VZltVHupOYSSQthz8dte6GVtP8Lxg/viewform">pre-order form</Link> to get yours now !
        </Text>
      </GridItem>
      
    </Grid>
  );
}
