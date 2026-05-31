import { useState } from "react";
import { Grid, GridItem, Image } from "@chakra-ui/react";
import EboardBio from "./EboardBio";
import { eboardMembers } from "../info/eboardinfo";
export default function About() {
  const [activeMember, setActiveMember] = useState(0);

  const imageClick = (idx: number) => {
    setActiveMember(idx);
  };
  return (
    <Grid
      templateAreas={{ base: `"right" "left"`, md: `"left right"` }}
      gridTemplateColumns={{ base: "1fr", md: "1fr 4fr" }}
      h={{ base: "auto", md: "70vh" }}
      w={{ base: "95%", md: "85%" }}
      my="3rem"
      alignItems={"center"}
      gap={{ base: "1rem", md: 0 }}
    >
      {/* Thumbnail selector - vertical scroll on desktop, horizontal on mobile */}
      <GridItem
        area={"left"}
        display="flex"
        alignItems={{ base: "center", md: "flex-start" }}
        flexDir={{ base: "row", md: "column" }}
        h={{ base: "auto", md: "100%" }}
        w={{ base: "100%", md: "auto" }}
        overflowY={{ base: "hidden", md: "scroll" }}
        overflowX={{ base: "auto", md: "hidden" }}
        borderRadius={"1rem"}
        borderTop={{ base: "none", md: "2px solid #D9D9D9" }}
        borderBottom={{ base: "none", md: "2px solid #D9D9D9" }}
        gap={{ base: "0.5rem", md: 0 }}
        pb={{ base: "0.5rem", md: 0 }}
      >
        {eboardMembers.map((m, idx) => (
          <Image
            key={idx}
            objectFit="cover"
            w={{ base: "60px", md: "100%" }}
            h={{ base: "60px", md: "auto" }}
            minW={{ base: "60px", md: "auto" }}
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
        h={{ base: "auto", md: "100%" }}
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
