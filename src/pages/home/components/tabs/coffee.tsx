import { Flex, Text, Box } from "@chakra-ui/react";

export const Coffee = () => {
  return (
    <Flex flexDir={'column'}>
      <Text fontSize="xl" fontWeight="bold" color={"#b87f2d"} paddingRight={"10%"} paddingLeft={"10%"}>
                Explore Our Coffee Selection
              </Text>
              <Text fontSize="lg" fontWeight="regular" color={"#6c4621"} paddingRight={"10%"} paddingLeft={"10%"}>
                At [Coffee Shop Name], we take pride in our diverse coffee offerings. From rich and bold espresso to single-origin pour-overs, there's something to satisfy every coffee enthusiast's palate. Explore our menu and savor the flavors of
                the world in every cup.
              </Text>

              <Text fontSize="xl" fontWeight="bold" color={"#b87f2d"} marginTop={"10%"} paddingRight={"10%"} paddingLeft={"10%"}>
                Coffee Menu
              </Text>
              <Box display="grid" gridTemplateColumns="1fr 1fr" gridGap="20px" margin="20px" padding="20px" border="1px solid #ccc" borderRadius="8px">
                <Box>
                  <Text fontSize="lg" fontWeight="bold" color={"#6c4621"}>
                    Espresso
                  </Text>
                  <Text fontSize="md" color={"#6c4621"}>
                    Rich and intense, a shot of pure espresso.
                  </Text>
                </Box>
                <Box textAlign="right">
                  <Text fontSize="lg" fontWeight="bold" color={"#b87f2d"}>
                    $2.50
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="lg" fontWeight="bold" color={"#6c4621"}>
                    Cappuccino
                  </Text>
                  <Text fontSize="md" color={"#6c4621"}>
                    Espresso with steamed milk and a layer of frothy foam.
                  </Text>
                </Box>
                <Box textAlign="right">
                  <Text fontSize="lg" fontWeight="bold" color={"#b87f2d"}>
                    $3.50
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="lg" fontWeight="bold" color={"#6c4621"}>
                    Latte
                  </Text>
                  <Text fontSize="md" color={"#6c4621"}>
                    Espresso with steamed milk and a small amount of foam.
                  </Text>
                </Box>
                <Box textAlign="right">
                  <Text fontSize="lg" fontWeight="bold" color={"#b87f2d"}>
                    $4.00
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="lg" fontWeight="bold" color={"#6c4621"}>
                    Americano
                  </Text>
                  <Text fontSize="md" color={"#6c4621"}>
                    Espresso diluted with hot water for a milder taste.
                  </Text>
                </Box>
                <Box textAlign="right">
                  <Text fontSize="lg" fontWeight="bold" color={"#b87f2d"}>
                    $3.00
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="lg" fontWeight="bold" color={"#6c4621"}>
                    Mocha
                  </Text>
                  <Text fontSize="md" color={"#6c4621"}>
                    Espresso with chocolate and steamed milk, topped with whipped cream.
                  </Text>
                </Box>
                <Box textAlign="right">
                  <Text fontSize="lg" fontWeight="bold" color={"#b87f2d"}>
                    $4.50
                  </Text>
                </Box>
              </Box>
    </Flex>
  );
};
