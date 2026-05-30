import React from "react";
import { Text, Grid, GridItem, Image, Flex } from "@chakra-ui/react";
import Eboard from "./Eboard";
import Founders from "./Founders"

export default function About() {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      flexDir={"column"}
    >
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        h="60vh"
        w="65%"
      >
        <Text variant="subHeader" color="#5F6061" lineHeight={"90%"}>
          about <br></br>snail mail
        </Text>
        <Image
          objectFit="cover"
          h="20rem"
          w="20rem"
          src="/images/abouticon.png"
        />
      </Flex>
      <Flex
        alignItems={"center"}
        justifyContent={"space-evenly"}
        pb="3rem"
        w="75%"
      >
        <Flex flexDir={"column"} w="25%" alignItems={"center"}>
          <Text variant="tinyHeader" mb="2rem" color="#5F6061">
            Beginnings
          </Text>
          <Text variant="subtitleCondense" color="#6F6F6F">
            Snail Mail started during the pandemic, when there was a need for community and 
            a space to relax while making friends on campus. It started as just one letter 
            (from Emily’s mailbox to Jess’ mailbox in page-rob)🐌📬, then turned into a 
            full-blown effort to promote letter-writing, bullet journaling, and love for 
            stationery on Brown’s campus! 
            <br></br>
            <br></br>
            Together with an extremely creative and dedicated team, Emily's vision was brought to life with Snail Mail @ Brown!
          </Text>
        </Flex>
        <Flex flexDir={"column"} w="25%" alignItems={"center"}>
          <Text variant="tinyHeader" mb="2rem" color="#5F6061">
            Growth
          </Text>
          <Text variant="subtitleCondense" color="#6F6F6F">
            Founded in February of 2022, Snail Mail has nearly quadrupled 
            in membership since its creation just two years ago. The organization has 
            collaborated with several organizations such as Create @ Brown, Birbs @ Brown, 
            and Brown's Campus Center to plan exciting events for students.
            <br></br>
            <br></br>We hope to continue to spread the love of journaling and memory collecting 
            with the students of Brown and RISD as we continue to grow as a community.
          </Text>
        </Flex>
        <Flex flexDir={"column"} w="25%" alignItems={"center"}>
          <Text variant="tinyHeader" mb="2rem" color="#5F6061">
            Mission
          </Text>
          <Text variant="subtitleCondense" color="#6F6F6F">
            The purpose of Snail Mail @ Brown is to create a space for community, 
            reflection, and creativity through snail mail, letter- writing, and 
            stationery. Snail Mail @ Brown celebrates traditional methods of 
            communication by holding bullet journaling and letter-writing sessions. 
            <br></br>
            <br></br>
            Snail Mail @ Brown ensures equitable access to letter writing, 
            scrapbooking, calligraphy, etc. by providing stationery supplies and 
            holding workshops, with themed events during holidays.
          </Text>
        </Flex>
      </Flex>

      <Flex
        alignItems={"center"}
        justifyContent={"space-evenly"}
        pb="3rem"
        w="75%"
        flexDir={"column"}
        my="2rem"
      >
        <Text variant="smallerHeader" color="#5F6061" lineHeight={"90%"}>
          meet the team !
        </Text>
        <Eboard/>
      </Flex>
      <Flex
        alignItems={"center"}
        justifyContent={"space-evenly"}
        pb="3rem"
        w="75%"
        flexDir={"column"}
        my="2rem"
      >
        <Text variant="smallerHeader" color="#5F6061" lineHeight={"90%"}>
          meet the founders !
        </Text>
        <Founders/>
      </Flex>
    </Flex>
  );
}
