import React from "react";
import {
  Button,
  ButtonGroup,
  Flex,
  Text,
  Card,
  Image,
  CardBody,
  Heading,
  Stack,
  CardFooter,
} from "@chakra-ui/react";

interface EboardInfoProps{
  name: string;
  position: string,
  bio: string;
  pic: string;
};

export default function EboardBio(props: EboardInfoProps) {
    return (
      <Card
        direction={"column"}
        variant="none"
        w="100%"
        h="100%"
        borderRadius={"1rem"}
        gap={"1rem"}
        p="1rem"
        border={"2px solid #D9D9D9"}
      >
        <Image
          objectFit="cover"
          w="50%"
          src={props.pic}
          borderRadius={"1rem"}
          aspectRatio={1 / 1}
        />
        <CardBody
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          py="0"
          w="80%"
        >
          <Text variant={"tinyHeaderTitle"} color="#6F6F6F">
            {props.name}
          </Text>
          <Text variant={"tinyHeader"} color="#6F6F6F">
            {props.position}
          </Text>
          <Text variant={"subtitle"} py="8" color="#6F6F6F">
            {props.bio}
          </Text>
        </CardBody>
      </Card>
    );
}
