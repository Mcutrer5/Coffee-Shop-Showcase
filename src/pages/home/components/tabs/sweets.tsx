import { Box, Flex, Text } from "@chakra-ui/react";

export const Sweets = () => {
    return (
        <Flex flexDir={'column'}>
            <Text fontSize="xl" fontWeight="bold" color={"#b87f2d"} paddingRight={"10%"} paddingLeft={"10%"}>
                Indulge in Sweet Delights
              </Text>
              <Text fontSize="lg" fontWeight="regular" color={"#6c4621"} paddingRight={"10%"} paddingLeft={"10%"}>
                Treat yourself to delectable sweets and desserts at [Coffee Shop Name]. Our pastry chefs craft mouthwatering treats that pair perfectly with your favorite coffee or tea. From flaky pastries to creamy cakes, our sweets menu is a
                delightful journey for your taste buds. Join us for a sweet experience like no other.
              </Text>
              <br />

              <Text fontSize="xl" fontWeight="bold" color={"#b87f2d"} marginTop={"10%"} paddingRight={"10%"} paddingLeft={"10%"}>
                Sweets Menu
              </Text>
              <Box display="grid" gridTemplateColumns="1fr 1fr" gridGap="20px" margin="20px" padding="20px" border="1px solid #ccc" borderRadius="8px">
                <Box>
                  <Text fontSize="lg" fontWeight="bold" color={"#6c4621"}>
                    Chocolate Croissant
                  </Text>
                  <Text fontSize="md" color={"#6c4621"}>
                    A buttery croissant filled with rich chocolate.
                  </Text>
                </Box>
                <Box textAlign="right">
                  <Text fontSize="lg" fontWeight="bold" color={"#b87f2d"}>
                    $3.50
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="lg" fontWeight="bold" color={"#6c4621"}>
                    Red Velvet Cupcake
                  </Text>
                  <Text fontSize="md" color={"#6c4621"}>
                    Moist and fluffy, topped with cream cheese frosting.
                  </Text>
                </Box>
                <Box textAlign="right">
                  <Text fontSize="lg" fontWeight="bold" color={"#b87f2d"}>
                    $3.00
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="lg" fontWeight="bold" color={"#6c4621"}>
                    Lemon Tart
                  </Text>
                  <Text fontSize="md" color={"#6c4621"}>
                    Tangy lemon filling in a sweet pastry crust.
                  </Text>
                </Box>
                <Box textAlign="right">
                  <Text fontSize="lg" fontWeight="bold" color={"#b87f2d"}>
                    $4.25
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="lg" fontWeight="bold" color={"#6c4621"}>
                    Chocolate Brownie
                  </Text>
                  <Text fontSize="md" color={"#6c4621"}>
                    A fudgy and indulgent chocolate brownie.
                  </Text>
                </Box>
                <Box textAlign="right">
                  <Text fontSize="lg" fontWeight="bold" color={"#b87f2d"}>
                    $2.75
                  </Text>
                </Box>
              </Box>
        </Flex>
    )
}
