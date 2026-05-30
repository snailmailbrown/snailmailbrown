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
import { useNavigate } from "react-router-dom";

export default function PenPal() {
  const navigate = useNavigate();

  return (
    <Grid
      templateAreas={`"left right"`}
      gridTemplateColumns={"1fr 1.1fr"}
      h="93vh"
      w="100%"
      p="20px"
      alignItems={"center"}
    >
      <GridItem area={"left"} alignItems={"center"} p="10rem">
        <Text variant={"bigHeader"} color="#8EA6D5" lineHeight={"85%"}>
          Pen-Pals
        </Text>
        <Text
          variant={"subtitleBold"}
          color="#959493"
          justifyContent={"flex-end"}
          mb="2rem"
        >
          @SNAILMAIL
        </Text>
        <Button
          display="flex"
          justifyContent={"space-between"}
          variant="outline"
          pr="0"
          w="90%"
          mb="1rem"
          rightIcon={<HiArrowCircleRight size={"2.5rem"} color={"#8EA6D5"} />}
          onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScEbq_W02BGKGNn1ZiGpvtl83sfVMVzfLmsi-ZKlqth37tZzw/viewform")}
        >
          Sign Up Here!
        </Button>
        <Text
          variant={"subtitle"}
          color="#6F6F6F"
          textAlign={"justify"}
          w="90%"
        >
          Looking for a buddy to write letters to? Join our campus wide pen-pal 
          program and get paired with another student or faculty member for 
          letter exchanges! Open to all Brown/RISD grad and undergrad students 
          as well as Brown faculty.
          <br/>
          <br/>
        </Text>
        <Text variant="subtitleBig" align="justify" color="#5F6061">
          Already have a pen-pal? Let us know how it's going! Fill out this <Link variant="pageLink" href="https://docs.google.com/forms/d/e/1FAIpQLSdQPZ_MZZVMvpm3oqFDgmDyKsC_ga8f4CmOaCjI-ueTjwRNzA/viewform">check-in form</Link> to give us feedback on how you and your pen-pal are doing!
        </Text>
      </GridItem>
      <GridItem area={"right"} alignItems={"center"} justifyContent="center">
        <Image
          objectFit="contain"
          maxHeight="60%"
          maxWidth="80%"
          src="/images/snailmail/penpal.png"
          borderRadius={"1rem"}
        />
      </GridItem>
    </Grid>
  );
}