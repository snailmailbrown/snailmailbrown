import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  Text,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";


const samplepics = [
  "/images/snailmail/social_4.png",
  "/images/snailmail/eboard_social_2.jpeg",
  "/images/snailmail/memory_box.jpg",
  "/images/snailmail/activity_fair.jpg",
  "/images/snailmail/spring_social_2.jpg",
  "/images/snailmail/social_3.png",
];
export default function GalleryBlurb() {
    const [index, setIndex] = useState(1)
    const navigate = useNavigate();
    const len = samplepics.length;

    // Calculate back and front indices with proper wrapping
    const back = (index - 1 + len) % len;
    const front = (index + 1) % len;

    function forward(){
        setIndex((prev) => (prev + 1) % len);
    }
    
    function backward() {
      setIndex((prev) => (prev - 1 + len) % len);
    }

  return (
    <Flex
      h={{ base: "auto", md: "93vh" }}
      py={{ base: "3rem", md: 0 }}
      w="100%"
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
      flexDir={"column"}
    >
      <Text variant="subHeader" color="#303030" mb="2rem">
        gallery
      </Text>
      <Flex justifyContent={"center"} alignItems={"center"} mb="2rem">
        <IconButton
          icon={<HiChevronLeft size={"4rem"} fill="#8EA6D5" />}
          aria-label={""}
          bg="transparent"
          _hover={{ bg: "none" }}
          onClick={backward}
        ></IconButton>

        {/* Back image - hidden on mobile */}
        <Image
          objectFit="cover"
          h="20rem"
          w="25rem"
          src={samplepics[back]}
          mr="-10rem"
          display={{ base: "none", md: "block" }}
        />
        {/* Center image - responsive size */}
        <Image
          objectFit="cover"
          h={{ base: "18rem", md: "25rem" }}
          w={{ base: "80vw", md: "32rem" }}
          src={samplepics[index]}
          zIndex="1"
          borderRadius={{ base: "1rem", md: 0 }}
        />
        {/* Front image - hidden on mobile */}
        <Image
          objectFit="cover"
          h="20rem"
          w="25rem"
          src={samplepics[front]}
          ml="-10rem"
          display={{ base: "none", md: "block" }}
        />
        <IconButton
          icon={<HiChevronRight size={"4rem"} fill="#8EA6D5" />}
          aria-label={""}
          bg="transparent"
          _hover={{ bg: "none" }}
          onClick={forward}
        ></IconButton>
      </Flex>
      <Button
        variant="solid"
        bg="#303030"
        color="white"
        onClick={() => navigate("/gallery")}
      >
        view entire gallery
      </Button>
    </Flex>
  );
}
