import React, { useRef } from "react";
import {
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
import { HiArrowCircleRight } from "react-icons/hi";

export default function Forms() {
  return (
    <Grid
      templateAreas={`"left center right"`}
      gridTemplateColumns={"1.5fr 1fr 1fr"}
      h="93vh"
      w="100vw"
      alignItems={"center"}
      bg={"#AABBDC"}
    >
      {/* </Grid><Grid templateColumns="repeat(3, 1fr)" gap={8} w="65%" my="2rem"> */}
      <GridItem
        area={"left"}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        flexDir={"column"}
      >
        <Text variant="subHeader" align={"center"} color="#303030" lineHeight={"90%"} mb="2rem">
          want to collab?
        </Text>
        <Text variant="tinyHeader" align={"center"} color="#303030" lineHeight={"90%"} mb="2rem">
          send us an email at <Link variant="pageLinkBig" href="https://mail.google.com/mail/u/3/#inbox?compose=CllgCJqWggFKgtgXDPphBmFZQhjQpKxwLwKkHwDqnlsHVJqMtkPtcMmQTRqbgxWZLqhMGSMVxwL">snailmail@brown.edu</Link> !
        </Text>
        <Text variant="subtitle" color="#FFFFFF" w="50%" mb="2rem">
          Previous collaborations include a lofi study session with VSA, a Valentine's Day collab 
          with Birbs@Brown, postcard writing with VISIONS Magazine, journaling with LGBTQ Center, 
          scrapbooking with Mosaic+, and creative hours with Create@Brown!
          <br/>
          <br/>
          We've also collaborated with WiSE, CCP, Active Minds, BURP, Yarnaholics, and more!
        </Text>
      </GridItem>
      <GridItem
        area={"center"}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
      >
        <Image
          objectFit="cover"
          h="90%"
          w="90%"
          margin="10px"
          src="/images/snailmail/eboard_social_1.jpg"
          borderRadius="2%"
        />
      </GridItem>
      <GridItem
        area={"right"}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        flexDir={"column"}
      >
        <Text variant="tinyHeader" align={"center"} color="#303030" lineHeight={"90%"} mb="2rem">
          have feedback or ideas for meetings?
        </Text>
        <Text variant="subtitle" color="#FFFFFF" w="50%" mb="2rem">
          Let us know any meeting ideas you have, any stationery you want to see, 
          any questions, or if you just wanna leave a note by filling out this  
          <Link variant="pageLink2" href="https://mail.google.com/mail/u/3/#inbox?compose=CllgCJqWggFKgtgXDPphBmFZQhjQpKxwLwKkHwDqnlsHVJqMtkPtcMmQTRqbgxWZLqhMGSMVxwL"> feedback form</Link> !
        </Text>
      </GridItem>
    </Grid>
  );
}