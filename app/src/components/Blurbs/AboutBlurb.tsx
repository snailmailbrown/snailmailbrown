import { Button, Grid, GridItem, Text, Image, useMediaQuery } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function AboutBlurb() {
  const navigate = useNavigate();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Grid
      templateAreas={{ base: `"right" "left"`, md: `"left right"` }}
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
      h={{ base: "auto", md: "93vh" }}
      py={{ base: "2rem", md: 0 }}
      w="100%"
      alignItems="center"
      bg="#AABBDC"
      p={isLargerThan768 ? "0" : "1rem"}
    >
      <GridItem
        area="left"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          objectFit="cover"
          h={{ base: "50vh", md: "70vh" }}
          w={{ base: "60vw", md: "30vw" }}
          src="/images/snailmail/og_eboard.png"
          borderTopRadius="46%"
        />
      </GridItem>
      <GridItem
        area="right"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        px={{ base: "1rem", md: 0 }}
      >
        <Text variant="subHeader" color="white" fontSize={isLargerThan768 ? "4rem" : "2rem"}>
          about us
        </Text>
        <Image
          objectFit="contain"
          w={isLargerThan768 ? "90%" : "80%"}
          mr={{ base: 0, md: "-8rem" }}
          mt={{ base: "-1rem", md: "-3rem" }}
          src="/images/star_divider.png"
        />
        <Text variant="subtitle" w={{ base: "90%", md: "50%" }} color="white">
          We’re a community celebrating the art of handwritten letters,
          journaling, scrapbooking, etc. We foster artistic creativity,
          reflection, and wellness by holding community events and meetings.
          Snail Mail provides equitable access to bullet journaling,
          letter-writing, and scrapbooking supplies for all.
          <br />
          <br />
          We hold weekly meetings on Mondays from 7-9 PM in Friedman 101, open
          to all students at Brown and RISD. Come join us!
        </Text>
        <Button
          variant="solid"
          color="#AABBDC"
          m="2rem"
          onClick={() => navigate("/about")}
        >
          LEARN MORE
        </Button>
      </GridItem>
    </Grid>
  );
}
