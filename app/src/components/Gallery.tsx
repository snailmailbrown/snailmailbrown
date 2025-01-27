import React, { useState } from "react";
import { Text, Link, Grid, GridItem, Image, Flex, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, IconButton } from "@chakra-ui/react";
import Eboard from "./Eboard";
import { gallery } from "../info/galleryinfo";
import { HiX } from "react-icons/hi";

export default function Gallery() {
    const [expand, setExpand] = useState(-1)
    const onImageClick = (idx: number) => {
        setExpand(idx)
    }
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
          gallery
        </Text>
        <Text variant="subtitle" color="#5F6061">
          ( click to expand a picture! )
        </Text>
        <Text variant="subtitle" color="#5F6061">
          follow us on instagram <Link variant="pageLink" href="https://www.instagram.com/snailmailbrown?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">@snailmailbrown</Link> to see even more!
        </Text>
      </Flex>
      <Flex
        alignItems={"flex-start"}
        justifyContent={"center"}
        flexDir={"row"}
        flexWrap={"wrap"}
      >
      <Grid templateColumns={"repeat(3, 1fr)"} gap={8} w="20rem" my="2rem">
        {gallery.map((m, idx) => (
          <GridItem>
            <Image
              objectFit="cover"
              w="100%"
              src={m.pic}
              borderRadius={"1rem"}
              aspectRatio={1 / 1}
              border={"2px solid #D9D9D9"}
              onClick={() => onImageClick(idx)}
              cursor={"pointer"}
            />
          </GridItem>
        ))}
      </Grid>
      </Flex>
      <Modal
        isOpen={expand >= 0}
        onClose={() => expand == -1}
        onOverlayClick={() => setExpand(-1)}
        isCentered
        size="6xl"
      >
        <ModalOverlay />
        <ModalContent
          p="0"
          m="0"
          alignItems="flex-end"
          bg="transparent"
          dropShadow={"none"}
        >
          <IconButton
            bg="transparent"
            p="0"
            m="0"
            w="50px"
            _hover={{ bg: "transparent", color: "transparent" }}
            _active={{
              bg: "transparent",
              transform: "scale(0.98)",
            }}
            icon={<HiX size={"2rem"} color="white" />}
            onClick={() => setExpand(-1)}
            aria-label={""}
          ></IconButton>
          <Grid
            templateAreas={`"left right"`}
            gridTemplateColumns={"3fr 1.5fr"}
            h="70vh"
            w="100%"
            alignItems={"center"}
            my="0"
          >
            <GridItem
              area={"left"}
              display="flex"
              alignItems={"flex-start"}
              flexDir={"column"}
              h="100%"
              overflowY={"scroll"}
              borderRadius={"1rem"}
              borderTop={"2px solid #D9D9D9"}
              borderBottom={"2px solid #D9D9D9"}
              backgroundImage={gallery[expand]?.pic}
              backgroundSize={"contain"}
              backgroundRepeat={"no-repeat"}
              backgroundPosition={"center"}
              backgroundColor={"rgba(230, 243, 255, 0.9)"}
            ></GridItem>
            <GridItem
              area={"right"}
              display="flex"
              alignItems={"flex-start"}
              justifyContent={"flex-end"}
              flexDir={"column"}
              h="100%"
              borderRadius={"1rem"}
              bg="white"
              p="2rem"
            >
              <Text variant="tinyHeader" color="#6D5B51" mb="2rem">
                {gallery[expand]?.title}
              </Text>
              <Text variant="subtitle" color="#6D5B51">
                {gallery[expand]?.caption}
              </Text>
            </GridItem>
          </Grid>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
