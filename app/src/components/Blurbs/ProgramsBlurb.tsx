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
import { useNavigate } from "react-router-dom";


export default function JournalPrompts() {
  const navigate = useNavigate();

  return (
    <Grid
      templateAreas={`"left right"`}
      gridTemplateColumns={"1fr fr"}
      h="93vh"
      w="100%"
      alignItems={"center"}
      bg={"#FFEEDA"}
    >
<GridItem
        area={"left"}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        flexDir={"column"}
      >
        <Text variant="subHeader" color="#473A32">
          campus pen-pals
        </Text>
        <Image
            objectFit="cover"
            h="40vh"
            w="20vw"
            src="/images/snailmail/eboard_christmas_2.jpg"
            borderTopRadius={"46%"}
        />
        <Button
          variant="solid"
          bg="#E8CEC1"
          color="#473A32"
          m="2rem"
          onClick={() => navigate("/programs")}
        >
          Check it out!
        </Button>
        <Text variant="subtitle" color="#6D5B51" w="50%">
          Looking for someone to exchange letters with? Sing up for our campus-wide pen-pal program! Open to all Brown/RISD students and faculty.
          <br/><br/>
          Letter supplies and stamps will be available at our weekly drop-in hours for you to use and write to your pen-pal.
        </Text>
      </GridItem>
      <GridItem
        area={"right"}
        display="flex"
        alignItems={"center"}
        flexDirection={"column"}
        justifyContent="center"
      >
        <Text variant={"subHeader"} color="#473A32" justifyContent={"flex-start"} lineHeight={"85%"}>
            collabs?
        </Text>
        <Image
            objectFit="contain"
            w="90%"
            mr="-8rem"
            mt="-3rem"
            src="/images/star_divider_brown.png"
        />
        <GridItem
                area={"right"}
                display="flex"
                alignItems={"center"}
                justifyContent="center"
              >
            <Image
                objectFit="cover"
                h="35%"
                w="35%"
                margin="10px"
                src="/images/snailmail/vsa_collab.jpg"
                borderRadius="2%"
            />
            <Image
                objectFit="cover"
                h="35%"
                w="35%"
                margin="10px"
                src="/images/snailmail/visions_collab.jpg"
                borderRadius="2%"
            />
        </GridItem>
        <Button
            variant="solid"
            bg="#473A32"
            color="#FAF1E6"
            m="2rem"
            onClick={() => navigate("/programs")}
        >
            LEARN MORE
        </Button>
      </GridItem>
    </Grid>
  );
}