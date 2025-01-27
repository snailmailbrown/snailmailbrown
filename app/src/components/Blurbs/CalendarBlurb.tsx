import React, { useRef } from "react";
import {
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  Text,
  Image,
} from "@chakra-ui/react";
import { HiArrowCircleRight } from "react-icons/hi";

export default function CalendarBlurb() {
  return (
    <Grid
      templateAreas={`"left right"`}
      gridTemplateColumns={"1fr 1fr"}
      h="93vh"
      w="100%"
      alignItems={"center"}
    >
      <GridItem
        area={"left"}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
      >
        <Image
          objectFit="cover"
          h="30rem"
          w="40rem"
          src="/images/snailmail/social_1.png"
        />
      </GridItem>
      <GridItem
        area={"right"}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        flexDir={"column"}
      >
        <Text variant="subHeader" color="#303030" lineHeight={"90%"} mb="2rem">
          meetings <br></br>+ events
        </Text>
        <Text variant="subtitle" color="#303030" w="50%" mb="2rem">
          We have lots of exciting events planned for you this year!
          Be sure to save the date, so you don't miss out on the fun!
        </Text>
        <Button 
          variant="solid" 
          bg="#303030" 
          color="white" 
          onClick={() => window.open("https://calendar.google.com/calendar/u/2?cid=Y184ZDI5OWQ3YmUxN2QzNzRkY2U2NjIwYWVjODNjZWU1MjMyNWZmMjNhM2Q5ODk2NDcwNmQ3ZDZhZDNiYjdjNmE4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20")}
        >
          Add to calendar
        </Button>
      </GridItem>
    </Grid>
  );
}
