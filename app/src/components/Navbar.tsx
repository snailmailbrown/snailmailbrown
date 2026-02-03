import {
  Box,
  Flex,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box position={"fixed"} zIndex={"sticky"}>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        px={10}
        h={"7vh"}
        w={"100vw"}
        bg="white"
        m={0}
      >
        {/* Desktop Navigation - exact same as original, hidden on mobile */}
        <Flex display={{ base: "none", md: "flex" }}>
          <ChakraLink as={ReactRouterLink} to="/" variant={"navLink"}>
            HOME
          </ChakraLink>
        </Flex>
        <Flex display={{ base: "none", md: "flex" }}>
          <ChakraLink as={ReactRouterLink} to="/about" variant={"navLink"}>
            ABOUT
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to="/gallery" variant={"navLink"}>
            GALLERY
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to="/merch" variant={"navLink"}>
            MERCH
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to="/programs" variant={"navLink"}>
            PROGRAMS
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to="/polaroids" variant={"navLink"}>
            POLAROID WALL
          </ChakraLink>
        </Flex>

        {/* Mobile: HOME on left, hamburger on right - hidden on desktop */}
        <Flex 
          display={{ base: "flex", md: "none" }} 
          w="100%" 
          justifyContent="space-between" 
          alignItems="center"
        >
          <ChakraLink as={ReactRouterLink} to="/" variant={"navLink"}>
            HOME
          </ChakraLink>
          <IconButton
            aria-label="Open menu"
            icon={<HiMenu size="1.5rem" />}
            variant="ghost"
            onClick={onOpen}
            color="#A4A4A4"
            _hover={{ color: "#303030" }}
          />
        </Flex>
      </Flex>

      {/* Mobile Drawer - slide in menu */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch" mt={4}>
              <ChakraLink as={ReactRouterLink} to="/" variant={"navLink"} onClick={onClose} py={2}>
                HOME
              </ChakraLink>
              <ChakraLink as={ReactRouterLink} to="/about" variant={"navLink"} onClick={onClose} py={2}>
                ABOUT
              </ChakraLink>
              <ChakraLink as={ReactRouterLink} to="/gallery" variant={"navLink"} onClick={onClose} py={2}>
                GALLERY
              </ChakraLink>
              <ChakraLink as={ReactRouterLink} to="/merch" variant={"navLink"} onClick={onClose} py={2}>
                MERCH
              </ChakraLink>
              <ChakraLink as={ReactRouterLink} to="/programs" variant={"navLink"} onClick={onClose} py={2}>
                PROGRAMS
              </ChakraLink>
              <ChakraLink as={ReactRouterLink} to="/polaroids" variant={"navLink"} onClick={onClose} py={2}>
                POLAROID WALL
              </ChakraLink>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
