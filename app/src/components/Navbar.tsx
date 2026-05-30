import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Navbar() {
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
        <Flex>
          <ChakraLink as={ReactRouterLink} to="/" variant={"navLink"}>
            HOME
          </ChakraLink>
        </Flex>
        <Flex>
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
      </Flex>
    </Box>
  );
}
