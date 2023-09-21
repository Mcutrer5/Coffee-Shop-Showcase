// this is not in use yet
import { Box, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../../../assets/images/coffee-logo.png";
import title from "../../../assets/images/title.png";

class SideBar extends React.Component {
  render() {
    return (
      <Box>
        <Image src={title} alt="title" w={"100%"} />
        <Box bg="white" h="40%" w="100%" />
        <Image src={logo} alt="logo" w={"100%"} />
      </Box>
    );
  }
}

export default SideBar;
