import { Grid, GridItem, Text, Image } from "@chakra-ui/react";

export default function JournalPrompts() {
  return (
    <Grid
      templateAreas={{ base: `"left" "right"`, md: `"left right"` }}
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
      h={{ base: "auto", md: "93vh" }}
      py={{ base: "2rem", md: 0 }}
      w="100%"
      alignItems={"center"}
    >
      <GridItem
        area={"right"}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
      >
        <Image
          objectFit="cover"
          h={{ base: "50vh", md: "70vh" }}
          w={{ base: "60vw", md: "30vw" }}
          src="/images/snailmail/julie_emily_wen.jpg"
          borderTopRadius={"46%"}
        />
      </GridItem>
      <GridItem
        area={"left"}
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent="center"
        px={{ base: "1rem", md: 0 }}
        pb={{ base: "2rem", md: 0 }}
      >
        <Text variant="subHeader" color="#000000">
          journal prompts
        </Text>
        <Image
          objectFit="contain"
          w="90%"
          mr={{ base: 0, md: "-8rem" }}
          mt={{ base: "-1rem", md: "-3rem" }}
          src="/images/star_divider_blue.png"
        />
        <Text variant="subtitleBig" w={{ base: "90%", md: "50%" }} color="#000000">
          - What summer plans are you most looking forward to? Make a summer bucket list!
          <br />
          <br />
          - Write a letter to a friend over the summer!
          <br />
          <br />
          - Reflect on your favorite memories from the school year. What were the ups and downs? What goals do you have for the next year?
          <br />
          <br />
          - Make a vision board for the best summer ever!
        </Text>
      </GridItem>
    </Grid>
  );
}
