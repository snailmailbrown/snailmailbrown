import React, { useState } from "react";
import { Text, Grid, GridItem, Image, Flex, Card, Button } from "@chakra-ui/react";
import EboardBio from "./EboardBio";
import { eboardMembers } from "../info/eboardinfo";

const profilePics = [
  "/images/grey.png",
  "/images/white.png",
  "/images/white.png",
  "/images/white.png",
  "/images/white.png",
  "/images/white.png",
  "/images/white.png",
];
export default function About() {
    const [activeMember, setActiveMember] = useState(0)

   const imageClick = (idx: number) => {
     setActiveMember(idx)
   };  
  return (
    <Grid
      templateAreas={`"left right"`}
      gridTemplateColumns={"1fr 4fr"}
      h="70vh"
      w="85%"
      my="3rem"
      alignItems={"center"}
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
      >
        {eboardMembers.map((m, idx) => (
          <Image
            objectFit="cover"
            w="100%"
            src={m.smallpic}
            borderRadius={"1rem"}
            aspectRatio={1 / 1}
            border={"2px solid #D9D9D9"}
            onClick={() => imageClick(idx)}
            cursor={"pointer"}
          />
        ))}
      </GridItem>
      <GridItem
        area={"right"}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        flexDir={"column"}
        h="100%"
      >
        <EboardBio
          name={eboardMembers[activeMember].name}
          position={eboardMembers[activeMember].position}
          bio={eboardMembers[activeMember].bio}
          pic={eboardMembers[activeMember].pic}
        />
      </GridItem>
    </Grid>
  );
}
