import React, { useEffect, useRef, useState } from "react";
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
    const [front, setFront] = useState(2)
    const [back, setBack] = useState(0)
    const [isChanged, setChanged] = useState(0)
    const navigate = useNavigate();

    useEffect(() => {
        
        index + 1 == samplepics.length ? setFront(0) : setFront(index + 1);
        back < 0 ? setBack(samplepics.length - 1) : setBack(index - 1);
        console.log("front:" + front + "back:" + back);
    }, [isChanged])

    function forward(){
        setIndex(index + 1)
        if (index >= samplepics.length) {
          setIndex(0)
        }
        console.log('done:' + index)
        setChanged(isChanged + 1)
    }
    function backward() {
      setIndex(index - 1);
      if (index < 0) {
        setIndex(samplepics.length - 1);
      }
      setChanged(isChanged - 1);
    }

  return (
    <Flex
      h="93vh"
      w="100vw"
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

        <Image
          objectFit="cover"
          h="20rem"
          w="25rem"
          src={samplepics[back]}
          mr="-10rem"
        />
        <Image
          objectFit="cover"
          h="25rem"
          w="32rem"
          src={samplepics[index]}
          zIndex="1"
        />
        <Image
          objectFit="cover"
          h="20rem"
          w="25rem"
          src={samplepics[front]}
          ml="-10rem"
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
