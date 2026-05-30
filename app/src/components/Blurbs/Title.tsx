import { Button, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import { HiArrowCircleRight } from "react-icons/hi";

export default function Title() {
  return (
    <Grid
      templateAreas={`"left right"`}
      gridTemplateColumns={"1fr 1.1fr"}
      h="93vh"
      w="100%"
      p="20px"
      alignItems={"center"}
    >
      <GridItem area={"left"} alignItems={"center"} p="10rem">
        <Text variant={"bigHeader"} color="#8EA6D5" lineHeight={"85%"}>
          Snail
        </Text>
        <Text
          variant={"bigHeader"}
          color="#8EA6D5"
          justifyContent={"flex-end"}
          lineHeight={"85%"}
        >
          Mail
        </Text>
        <Text
          variant={"subtitleBold"}
          color="#959493"
          justifyContent={"flex-end"}
          mb="2rem"
        >
          @BROWN
        </Text>
        <Button
          display="flex"
          justifyContent={"space-between"}
          variant="outline"
          pr="0"
          w="90%"
          mb="1rem"
          rightIcon={<HiArrowCircleRight size={"2.5rem"} color={"#8EA6D5"} />}
          onClick={() =>
            window.open(
              "https://brown.us14.list-manage.com/subscribe?u=e4c050b452be6603cafc27e3d&id=2826403aaa",
            )
          }
        >
          Subscribe to our Listserv
        </Button>
        <Text
          variant={"subtitle"}
          color="#6F6F6F"
          textAlign={"justify"}
          w="90%"
        >
          We are a community of students who love stationery, journaling, and
          letter-writing at Brown University! Come join us at one of our weekly
          meetings Mondays 7-9pm in Friedman 101 :D
          <br></br>
          <br></br>
          "The content of UCS/GSC recognized student organization websites is
          generated independently from Brown University. The statements, views,
          opinions, and information contained on the site are personal to those
          of the authors and student organization and do not necessarily reflect
          those of Brown University. The content on the site is not reviewed,
          approved, or endorsed by Brown University or its faculty or staff.""
        </Text>
      </GridItem>
      <GridItem area={"right"} alignItems={"center"} justifyContent="center">
        <Image
          objectFit="contain"
          maxHeight="50%"
          maxWidth="65%"
          src="/images/stamps.png"
          borderRadius={"1rem"}
        />
      </GridItem>
    </Grid>
  );
}
