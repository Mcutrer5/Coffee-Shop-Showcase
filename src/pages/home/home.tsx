import React from "react";
import { Grid, Flex, Image, Box } from "@chakra-ui/react";
import Body from "./components/body";
import Map from "./components/map/map";
import logo from "../../assets/images/coffee-logo.png";
import title from "../../assets/images/coffee-title.png";

class Home extends React.Component {
  render() {
    const width = window.innerWidth;
    return (
      <Grid templateColumns={"repeat(20, 1fr)"} gap={0}>
        <Flex gridColumn="span 2" bg="#322620" height="100vh">
          <Flex
            flexDirection="column" // This ensures that elements stack vertically
            bg="#322620"
            height="100vh"
            width="100%"
          >
            {/* Title at the very top in center */}
            <Flex justifyContent="center" alignItems="center" height="20%">
              <Image src={title} alt="title" w={"100%"} p={"10%"} m={"5%"} filter="drop-shadow(0px 4px 4px rgba(255,255,255,0.4))" /> 
            </Flex>

            {/* Add some space between the title and the logo */}
            <Box flex="1"></Box>

            {/* Logo at the very bottom in center */}
            <Flex justifyContent="center" alignItems="center" height="15%" width="100%">
              <Image src={logo} alt="logo" w={"100%"} p={"20%"} m={"5%"} />
            </Flex>
          </Flex>
        </Flex>
        <Flex gridColumn="span 18" bg="gray.200" height="100vh" bgSize="auto" bgPosition="center" position="relative">
          {/* if the screen is less than 1000px wide, don't show the map */}
          {width > 1000 ? (
            <div style={{ height: "100vh", width: "100%" }} className="mapContainer">
              <Map />
            </div>
          ) : null}

          <Flex
            flexDirection="column" // This ensures that elements stack vertically
            zIndex={2} // Increase the z-index to make sure it's above the map
            bg="whiteAlpha.900"
            height="100vh"
            width={width > 1000 ? "25%" : "100%"}
            position="absolute"
            left="0" // Position it on the left
            justifyContent="left" // Align content to the left
            alignItems="left"
          >
            <Body />
            <Flex
              justifyContent="center"
              alignItems="center"
              color="#6c4621"
              display="flex" // Use flex layout
              position="sticky" // Position the footer fixed at the bottom
              bottom={0} // Stick to the bottom
              width="100%" // Full width
              height="10%" // Specify a fixed height
              padding="1rem" // Vertically and horizontally center the content
            >
              <p>&copy; {new Date().getFullYear()} [Coffee Shop]</p>
            </Flex>
          </Flex>
        </Flex>
      </Grid>
    );
  }
}

export default Home;
