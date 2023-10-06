import React from "react";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import Body from "./components/body";
import logo from "../../assets/images/coffee-logo.png";
import title from "../../assets/images/coffee-title.png";

class HomeMobile extends React.Component {
  render() {
    return (
      <Box>
        <Grid templateColumns={"repeat(20, 1fr)"} gap={0}>
          <Image src={title} alt="title" w={"100%"} />
          { /* put some space in between the title and the body */ }
          <GridItem colSpan={18} bg="white" h="100%" w="100%" />
          <Image src={logo} alt="logo" w={"100%"} />
        </Grid>
        <Body />
      </Box>
    );
  }
}

export default HomeMobile;
