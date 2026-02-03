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

export default function Programs() {
  const navigate = useNavigate();

  return (
    <Grid
      templateAreas={{ base: `"left" "right"`, md: `"left right"` }}
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
      h={{ base: "auto", md: "93vh" }}
      py={{ base: "2rem", md: 0 }}
      w="100%"
      alignItems={"center"}
      bg={"#FFF2EF"}
    >
      <GridItem
        area={"left"}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        flexDir={"column"}
        px={{ base: "1rem", md: 0 }}
        pb={{ base: "2rem", md: 0 }}
      >
        <Text variant="subHeader" color="#473A32">
          campus pen-pals
        </Text>
        <Image
          objectFit="cover"
          h={{ base: "35vh", md: "40vh" }}
          w={{ base: "50vw", md: "20vw" }}
          src="/images/snailmail/eboard_christmas_2.png"
          borderTopRadius={"46%"}
        />
        <Button
          variant="solid"
          bg="#E8CEC1"
          color="#473A32"
          _hover={{
            bg: "#cfaa98ff"
          }}
          m="2rem"
          onClick={() => navigate("/programs")}
        >
          Check it out!
        </Button>
        <Text variant="subtitle" color="#6D5B51" w={{ base: "85%", md: "50%" }}>
          Looking for someone to exchange letters with? Sign up for our
          campus-wide pen-pal program! Open to all Brown/RISD students and
          faculty.
          <br />
          <br />
          Letter supplies and stamps will be available at our weekly drop-in
          hours for you to use and write to your pen-pal.
        </Text>
      </GridItem>
      <GridItem
        area={"right"}
        display="flex"
        alignItems={"center"}
        flexDirection={"column"}
        justifyContent="center"
        px={{ base: "1rem", md: 0 }}
        pt={{ base: "2rem", md: 0 }}
      >
        <Text
          variant={"subHeader"}
          color="#473A32"
          justifyContent={"flex-start"}
          lineHeight={"85%"}
        >
          collabs?
        </Text>
        <Image
          objectFit="contain"
          w="90%"
          mr={{ base: 0, md: "-8rem" }}
          mt={{ base: "-1rem", md: "-3rem" }}
          src="/images/star_divider_brown.png"
        />
        <Flex
          display="flex"
          alignItems={"center"}
          justifyContent="center"
          flexDir={{ base: "column", md: "row" }}
        >
          <Image
            objectFit="cover"
            h={{ base: "60vw", md: "35%" }}
            w={{ base: "60vw", md: "35%" }}
            margin="10px"
            src="/images/snailmail/vsa_collab.jpg"
            borderRadius="2%"
            display={{ base: "none", md: "block" }}
          />
          <Image
            objectFit="cover"
            h={{ base: "60vw", md: "35%" }}
            w={{ base: "60vw", md: "35%" }}
            margin="10px"
            src="/images/snailmail/visions_collab.jpg"
            borderRadius="2%"
          />
        </Flex>
        <Button
          variant="solid"
          bg="#473A32"
          color="#FAF1E6"
          _hover={{
            bg: "#7d5b4aff"
          }}
          m="2rem"
          onClick={() => navigate("/programs")}
        >
          LEARN MORE
        </Button>
      </GridItem>
    </Grid>
  );
}
