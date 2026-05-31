import { Button, Grid, GridItem, Text, Image, useMediaQuery } from "@chakra-ui/react";

export default function CalendarBlurb() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Grid
      templateAreas={{ base: `"left" "right"`, md: `"left right"` }}
      gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
      h={{ base: "auto", md: "93vh" }}
      py={{ base: "2rem", md: 0 }}
      w="100%"
      alignItems="center"
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
          h={{ base: "auto", md: "30rem" }}
          w={{ base: "90vw", md: "40rem" }}
          src="/images/snailmail/social_1.png"
          borderRadius={{ base: "1rem", md: 0 }}
        />
      </GridItem>
      <GridItem
        area="right"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        px={{ base: "1rem", md: 0 }}
      >
        <Text variant="subHeader" color="#303030" lineHeight="90%" mb="2rem" fontSize={isLargerThan768 ? "4rem" : "2rem"}>
          meetings <br /> + events
        </Text>
        <Text variant="subtitle" color="#303030" w={{ base: "85%", md: "50%" }} mb="2rem">
          We have lots of exciting events planned for you this year! Be sure to
          save the date, so you don't miss out on the fun!
        </Text>
        <Button
          variant="solid"
          bg="#303030"
          color="white"
          onClick={() =>
            window.open(
              "https://calendar.google.com/calendar/u/2?cid=Y184ZDI5OWQ3YmUxN2QzNzRkY2U2NjIwYWVjODNjZWU1MjMyNWZmMjNhM2Q5ODk2NDcwNmQ3ZDZhZDNiYjdjNmE4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20",
            )
          }
        >
          Add to calendar
        </Button>
      </GridItem>
    </Grid>
  );
}
