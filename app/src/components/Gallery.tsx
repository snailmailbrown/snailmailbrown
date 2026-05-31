import { useState } from "react";
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
import { gallery } from "../info/galleryinfo";
import { HiX } from "react-icons/hi";

export default function Gallery() {
  const [expand, setExpand] = useState(-1);
  const onImageClick = (idx: number) => {
    setExpand(idx);
  };
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
          gallery
        </Text>
        <Text variant="subtitle" color="#5F6061">
          ( click to expand a picture! )
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
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(auto-fill, minmax(200px, 1fr))" }} 
        gap={{ base: 4, md: 8 }} 
        w={{ base: "95%", md: "65%" }} 
        my="2rem"
      >
          {gallery.map((m, idx) => (
            <GridItem key={idx}>
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
        onClose={() => setExpand(-1)}
        onOverlayClick={() => setExpand(-1)}
        isCentered
        size={{ base: "full", md: "6xl" }}
      >
        <ModalOverlay bg="blackAlpha.800" />
        <ModalContent
          p={{ base: "1rem", md: 0 }}
          m={0}
          alignItems={{ base: "center", md: "flex-end" }}
          bg="transparent"
          boxShadow="none"
          maxW={{ base: "100vw", md: "6xl" }}
          maxH={{ base: "100vh", md: "auto" }}
        >
          <IconButton
            bg="transparent"
            p="0"
            m="0"
            w="50px"
            position={{ base: "absolute", md: "relative" }}
            top={{ base: "1rem", md: "auto" }}
            right={{ base: "1rem", md: "auto" }}
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
          {/* Mobile Layout - just the image, nearly full width */}
          <Flex
            display={{ base: "flex", md: "none" }}
            w="100%"
            h="100vh"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
            onClick={() => setExpand(-1)}
          >
            <Image
              src={gallery[expand]?.pic}
              objectFit="contain"
              maxW="95vw"
              maxH="80vh"
              borderRadius="1rem"
            />
            <Text variant="tinyHeader" color="white" mt="1rem" textAlign="center">
              {gallery[expand]?.title}
            </Text>
            <Text variant="subtitle" color="white" textAlign="center" px="1rem">
              {gallery[expand]?.caption}
            </Text>
          </Flex>

          {/* Desktop Layout - grid with image and caption side by side */}
          <Grid
            display={{ base: "none", md: "grid" }}
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
