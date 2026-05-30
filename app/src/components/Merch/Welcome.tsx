import { Grid, GridItem, Text, Link } from "@chakra-ui/react";

export default function Merch() {
  return (
    <Grid
      h="100vh"
      w="100vw"
      p="20px"
      alignItems={"center"}
      justifyContent={"center"}
      display={"flex"}
    >
      {/* <GridItem area={"center"} alignItems={"center"}>
        <Text variant={"bigHeader"} color="#8EA6D5" lineHeight={"90%"}>
          We have merch!
        </Text>
      </GridItem> */}

      <GridItem area={"center"} alignItems={"center"}>
        <Text
          variant={"bigHeader"}
          align={"center"}
          color="#8EA6D5"
          lineHeight={"85%"}
        >
          Coming Soon...
          <br></br>
          <br></br>
        </Text>
        <Text variant="subtitleBold" align={"center"} color="#5F6061">
          snail mail merch launch 3.0
          <br></br>
          <br></br>
        </Text>
        <Text variant="subtitle" align="center" color="#5F6061">
          check out this{" "}
          <Link variant="pageLink" href="https://forms.gle/raYK6Sn9XhW4ji8u7">
            link
          </Link>{" "}
          for an inside scoop
        </Text>
      </GridItem>
    </Grid>
  );
}
