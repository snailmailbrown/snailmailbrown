import React, { useState } from "react";
import {
  Text,
  Link,
  Grid,
  GridItem,
  Image,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  IconButton,
} from "@chakra-ui/react";
import { polaroids } from "../info/polaroidinfo";
import { HiX } from "react-icons/hi";
// import "../styles/animations.css";

export default function Polaroids() {
  const [expand, setExpand] = useState(-1);
  
  // const onImageClick = (idx: number) => {
  //   setExpand(idx);
  // };
  return (
    <Flex alignItems={"center"} justifyContent={"center"} flexDir={"column"} pt={{ base: "10vh", md: 0 }}>
      <Flex
        alignItems={"flex-start"}
        justifyContent={"center"}
        flexDir={"column"}
        h={{ base: "auto", md: "40vh" }}
        w={{ base: "90%", md: "65%" }}
        py={{ base: "2rem", md: 0 }}
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
        w="100%"
      >
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(auto-fill, minmax(270px, 1fr))" }}
          gap={{ base: 4, md: 8 }}
          w={{ base: "95%", md: "65%" }}
          my="2rem"
        >
          {polaroids.map((m, idx) => (
            <GridItem key={idx}>
              <Image
                objectFit="cover"
                w="100%"
                src={m.pic}
                borderRadius={"1rem"}
                border={"2px solid #D9D9D9"}
                // cursor={"pointer"}
                // onClick={() => onImageClick(idx)}
                // className="polaroid-wiggle"
              />
            </GridItem>
          ))}
        </Grid>
      </Flex>
      {/* Expand Modal */}
      <Modal
        isOpen={expand >= 0}
        onClose={() => setExpand(-1)}
        onOverlayClick={() => setExpand(-1)}
        isCentered
        size={{ base: "full", md: "4xl" }}
      >
        <ModalOverlay bg="blackAlpha.800" />
        <ModalContent
          p={{ base: "1rem", md: "2rem" }}
          m={0}
          alignItems="center"
          justifyContent="center"
          bg="transparent"
          boxShadow="none"
          maxW={{ base: "100vw", md: "4xl" }}
          maxH={{ base: "100vh", md: "auto" }}
        >
          <IconButton
            bg="transparent"
            p="0"
            m="0"
            w="50px"
            position="absolute"
            top={{ base: "1rem", md: "0.5rem" }}
            right={{ base: "1rem", md: "0.5rem" }}
            zIndex={10}
            _hover={{ bg: "transparent" }}
            _active={{
              bg: "transparent",
              transform: "scale(0.98)",
            }}
            icon={<HiX size={"2rem"} color="white" />}
            onClick={() => setExpand(-1)}
            aria-label={"Close"}
          ></IconButton>
          
          <Flex
            w="100%"
            h={{ base: "100vh", md: "auto" }}
            alignItems="center"
            justifyContent="center"
            onClick={() => setExpand(-1)}
          >
            <Image
              src={polaroids[expand]?.pic}
              objectFit="contain"
              maxW={{ base: "95vw", md: "80vw" }}
              maxH={{ base: "85vh", md: "80vh" }}
              borderRadius="1rem"
              border="4px solid white"
            />
          </Flex>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
