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
      h="93vh"
      w="100%"
      p="20px"
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
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
          fill out this <Link variant="pageLink" href="https://docs.google.com/forms/d/e/1FAIpQLSf7K6ojzzQQ11duDXryYFRMI-9JgzODKWjRD_0CBF_gMuYrRQ/viewform">merch interest form</Link> to let us know what you want to see !
        </Text>
      </GridItem>
      
    </Grid>
  );
}
