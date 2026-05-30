import { useState } from "react";
import { Button, Flex, Text, Image, IconButton } from "@chakra-ui/react";
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
  const [index, setIndex] = useState(1);
  const navigate = useNavigate();

  const front = index === samplepics.length - 1 ? 0 : index + 1;
  const back = index === 0 ? samplepics.length - 1 : index - 1;

  function forward() {
    setIndex((prev) => (prev >= samplepics.length - 1 ? 0 : prev + 1));
  }
  function backward() {
    setIndex((prev) => (prev <= 0 ? samplepics.length - 1 : prev - 1));
  }

  return (
    <Flex
      h="93vh"
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
