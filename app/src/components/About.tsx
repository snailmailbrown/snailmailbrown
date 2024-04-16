import React from "react";
import { Text, Grid, GridItem, Image, Flex } from "@chakra-ui/react";
import Eboard from "./Eboard";

export default function About() {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      flexDir={"column"}
    >
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        h="60vh"
        w="65%"
      >
        <Text variant="subHeader" color="#5F6061" lineHeight={"90%"}>
          about <br></br>snail mail
        </Text>
        <Image
          objectFit="cover"
          h="20rem"
          w="20rem"
          src="/images/abouticon.png"
        />
      </Flex>
      <Flex
        alignItems={"center"}
        justifyContent={"space-evenly"}
        pb="3rem"
        w="75%"
      >
        <Flex flexDir={"column"} w="25%" alignItems={"center"}>
          <Text variant="tinyHeader" mb="2rem" color="#5F6061">
            Beginnings
          </Text>
          <Text variant="subtitleCondense" color="#6F6F6F">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br></br>
            <br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Flex>
        <Flex flexDir={"column"} w="25%" alignItems={"center"}>
          <Text variant="tinyHeader" mb="2rem" color="#5F6061">
            Growth
          </Text>
          <Text variant="subtitleCondense" color="#6F6F6F">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br></br>
            <br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Flex>
        <Flex flexDir={"column"} w="25%" alignItems={"center"}>
          <Text variant="tinyHeader" mb="2rem" color="#5F6061">
            Mission
          </Text>
          <Text variant="subtitleCondense" color="#6F6F6F">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br></br>
            <br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Flex>
      </Flex>

      <Flex
        alignItems={"center"}
        justifyContent={"space-evenly"}
        pb="3rem"
        w="75%"
        flexDir={"column"}
        my="2rem"
      >
        <Text variant="smallerHeader" color="#5F6061" lineHeight={"90%"}>
          meet the team !
        </Text>
        <Eboard/>
      </Flex>
    </Flex>
  );
}
