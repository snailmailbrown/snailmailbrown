import { Button, Grid, GridItem, Text, Image, Link } from "@chakra-ui/react";
import { HiArrowCircleRight } from "react-icons/hi";

export default function PenPal() {
  return (
    <Grid
      templateAreas={{ base: `"right" "left"`, md: `"left right"` }}
      gridTemplateColumns={{ base: "1fr", md: "1fr 1.1fr" }}
      h={{ base: "auto", md: "93vh" }}
      w="100%"
      p={{ base: "1rem", md: "20px" }}
      pt={{ base: "10vh", md: "20px" }}
      alignItems={"center"}
    >
      <GridItem area={"left"} alignItems={"center"} p={{ base: "2rem", md: "10rem" }}>
        <Text variant={"bigHeader"} color="#8EA6D5" lineHeight={"85%"}>
          Pen-Pals
        </Text>
        <Text
          variant={"subtitleBold"}
          color="#959493"
          justifyContent={"flex-end"}
          mb="2rem"
        >
          @SNAILMAIL
        </Text>
        <Button
          display="flex"
          justifyContent={"space-between"}
          variant="outline"
          pr="0"
          w={{ base: "100%", md: "90%" }}
          mb="1rem"
          rightIcon={<HiArrowCircleRight size={"2.5rem"} color={"#8EA6D5"} />}
          onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdOZ7SRmvutZKjTMcaF6cc9-BBmHA1HmlxswFhSxinsjurtog/viewform?usp=header")}
        >
          Sign Up Here!
        </Button>
        <Text
          variant={"subtitle"}
          color="#6F6F6F"
          textAlign={"justify"}
          w={{ base: "100%", md: "90%" }}
        >
          Looking for a buddy to write letters to? Join our campus wide pen-pal
          program and get paired with another student or faculty member for
          letter exchanges! Open to all Brown/RISD grad and undergrad students
          as well as Brown faculty.
          <br />
          <br />
        </Text>
        <Text variant="subtitleBig" align="justify" color="#5F6061">
          Already have a pen-pal? Let us know how it's going! Fill out this{" "}
          <Link
            variant="pageLink"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdQPZ_MZZVMvpm3oqFDgmDyKsC_ga8f4CmOaCjI-ueTjwRNzA/viewform"
          >
            check-in form
          </Link>{" "}
          to give us feedback on how you and your pen-pal are doing!
        </Text>
      </GridItem>
      <GridItem 
        area={"right"} 
        alignItems={"center"} 
        justifyContent="center"
        display="flex"
      >
        <Image
          objectFit="contain"
          maxHeight={{ base: "40vh", md: "60%" }}
          maxWidth={{ base: "80%", md: "80%" }}
          src="/images/snailmail/penpal.png"
          borderRadius={"1rem"}
        />
      </GridItem>
    </Grid>
  );
}
