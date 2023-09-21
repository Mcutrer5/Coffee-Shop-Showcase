import { Flex, Text } from "@chakra-ui/react";
import { FaCoffee } from "react-icons/fa";

export const HomeTab = () => {
    return (
        <Flex flexDir={'column'}>
            <Flex justifyContent="center" alignItems="center" height="15%" width="100%">
                <Text fontSize="4xl" fontWeight="bold" color={"#6c4621"} paddingTop={"5%"} paddingBottom={"5%"} paddingRight={"10%"} paddingLeft={"10%"}>
                  Discover the Perfect Brew at Our Coffee Shop
                </Text>
              </Flex>

              <Flex justifyContent="center" alignItems="center" height="10%" width="100%" color={"black"} marginTop={"5%"} marginBottom={"5%"}>
                <FaCoffee size={"25px"} />
              </Flex>

              <Flex justifyContent="center" alignItems="center" width="100%" marginTop={"10%"} marginBottom={"5%"}>
                <Text fontSize="xl" fontWeight="bold" color={"#b87f2d"} paddingRight={"10%"} paddingLeft={"10%"}>
                  At our Coffee Shop, we are passionate about coffee. We take pride in sourcing the finest beans from around the world and handcrafting them into exceptional brews. Whether you're a coffee connoisseur or just looking for a cozy spot
                  to unwind, our café is the perfect destination.
                </Text>
              </Flex>

              <Flex justifyContent="center" alignItems="center" height="10%" width="100%" color={"black"} marginTop={"10%"} marginBottom={"5%"}>
                <FaCoffee size={"25px"} />
              </Flex>

              <Flex flexDirection={"column"} justifyContent="center" alignItems="center" width="100%" marginTop={"10%"} marginBottom={"5%"}>
                <Text fontSize="xl" fontWeight="bold" color={"#b87f2d"} paddingRight={"10%"} paddingLeft={"10%"}>
                  Where to find us? <br />
                </Text>
                <Text fontSize="xl" fontWeight="regular" color={"#6c4621"} paddingRight={"10%"} paddingLeft={"10%"} textAlign={"left"}>
                  123 Main Street | City, State <br />
                </Text>
              </Flex>

              <Flex justifyContent="center" alignItems="center" height="10%" width="100%" color={"black"} marginTop={"10%"} marginBottom={"5%"}>
                <FaCoffee size={"25px"} />
              </Flex>

              <Flex flexDirection="column" justifyContent="center" alignItems="center" width="100%" marginTop={"10%"} marginBottom={"5%"}>
                <Text fontSize="xl" fontWeight="bold" color={"#b87f2d"} paddingRight={"10%"} paddingLeft={"10%"}>
                  Hours: <br />
                </Text>
                <Text fontSize="xl" fontWeight="regular" color={"#6c4621"} paddingRight={"10%"} paddingLeft={"10%"} textAlign={"left"}>
                  Monday - Friday: 8:00 a.m. - 10:00 p.m. <br />
                  Saturday: 9:00 a.m. - 8:00 p.m. <br />
                  Sunday: Closed
                </Text>
              </Flex>
        </Flex>
    )
};