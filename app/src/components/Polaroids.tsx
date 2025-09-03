import React, { useState } from "react";
import {
  Text,
  Link,
  Grid,
  GridItem,
  Image,
  Flex,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  IconButton,
} from "@chakra-ui/react";
import Eboard from "./Eboard";
import { polaroids } from "../info/polaroidinfo";
import { HiX } from "react-icons/hi";
import "../styles/animations.css";

export default function Polaroids() {
  // const [isShaking, setIsShaking] = useState(false);

  //     const triggerShake = () => {
  //       setIsShaking(true);
  //       setTimeout(() => setIsShaking(false), 500); // Reset after animation duration
  //     };

  return (
    <Flex alignItems={"center"} justifyContent={"center"} flexDir={"column"}>
      <Flex
        alignItems={"flex-start"}
        justifyContent={"center"}
        flexDir={"column"}
        h="40vh"
        w="65%"
      >
        <Text variant="subHeader" color="#5F6061">
          polaroid wall
        </Text>
        <Text variant="subtitle" color="#5F6061">
          ( snail mail moments on film ! )
        </Text>
        <Text variant="subtitle" color="#5F6061">
          follow us on instagram{" "}
          <Link
            variant="pageLink"
            href="https://www.instagram.com/snailmailbrown?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          >
            @snailmailbrown
          </Link>{" "}
          to see even more!
        </Text>
      </Flex>
      <Flex
        alignItems={"flex-start"}
        justifyContent={"center"}
        flexDir={"row"}
        flexWrap={"wrap"}
      >
        <Grid
          templateColumns="repeat(auto-fill, minmax(270px, 1fr))"
          gap={8}
          w="65%"
          my="2rem"
        >
          {polaroids.map((m, idx) => (
            <GridItem>
              <Image
                objectFit="cover"
                w="100%"
                src={m.pic}
                borderRadius={"1rem"}
                border={"2px solid #D9D9D9"}
                // cursor={"pointer"}
                // onClick={() => triggerShake}
              />
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
}
