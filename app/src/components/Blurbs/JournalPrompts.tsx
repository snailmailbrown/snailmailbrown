import { Grid, GridItem, Text, Image } from "@chakra-ui/react";

export default function JournalPrompts() {
  return (
    <Grid
      templateAreas={`"left right"`}
      gridTemplateColumns={"1fr 1fr"}
      h="93vh"
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
          h="70vh"
          w="30vw"
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
      >
        <Text variant="subHeader" color="#000000">
          journal prompts
        </Text>
        <Image
          objectFit="contain"
          w="90%"
          mr="-8rem"
          mt="-3rem"
          src="/images/star_divider_blue.png"
        />
        <Text variant="subtitleBig" w="50%" color="#000000">
          - What was your favorite summer memory? Make a collage of your summer
          adventures!
          <br />
          <br />
          - What's something you're really looking forward to this school year?
          <br />
          <br />
          - What are 3 goals you have for the semester? Try to think of one
          that's academic, one that's just for fun, and one that's a personal
          goal!
          <br />
          <br />- Make a vision board for the 2025-2026 school year!
        </Text>
      </GridItem>
    </Grid>
  );
}
