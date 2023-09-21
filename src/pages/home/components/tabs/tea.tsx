import { Box, Flex, Text } from "@chakra-ui/react";

export const Tea = () => {
    return (
        <Flex flexDir={'column'}>
            <Text fontSize="xl" fontWeight="bold" color={"#b87f2d"} paddingRight={"10%"} paddingLeft={"10%"}>
                Discover Our Tea Selection
              </Text>
              <Text fontSize="lg" fontWeight="regular" color={"#6c4621"} paddingRight={"10%"} paddingLeft={"10%"}>
                Tea lovers, rejoice! [Coffee Shop Name] offers a curated collection of premium teas from around the globe. From soothing herbal blends to traditional black teas, our tea menu is designed to provide the perfect infusion of warmth and
                flavor. Explore our tea selection and experience the art of tea brewing.
              </Text>
              <br />

              <Text fontSize="xl" fontWeight="bold" color={"#b87f2d"} marginTop={"10%"} paddingRight={"10%"} paddingLeft={"10%"}>
                Tea Menu
              </Text>
              <Box display="grid" gridTemplateColumns="1fr 1fr" gridGap="20px" margin="20px" padding="20px" border="1px solid #ccc" borderRadius="8px">
                <Box>
                  <Text fontSize="lg" fontWeight="bold" color={"#6c4621"}>
                    Chamomile Tea
                  </Text>
                  <Text fontSize="md" color={"#6c4621"}>
                    A soothing herbal tea known for its calming properties.
                  </Text>
                </Box>
                <Box textAlign="right">
                  <Text fontSize="lg" fontWeight="bold" color={"#b87f2d"}>
                    $3.00
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="lg" fontWeight="bold" color={"#6c4621"}>
                    Earl Grey Tea
                  </Text>
                  <Text fontSize="md" color={"#6c4621"}>
                    A classic black tea with a hint of bergamot flavor.
                  </Text>
                </Box>
                <Box textAlign="right">
                  <Text fontSize="lg" fontWeight="bold" color={"#b87f2d"}>
                    $2.75
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="lg" fontWeight="bold" color={"#6c4621"}>
                    Green Tea
                  </Text>
                  <Text fontSize="md" color={"#6c4621"}>
                    Light and refreshing, a popular choice for health-conscious individuals.
                  </Text>
                </Box>
                <Box textAlign="right">
                  <Text fontSize="lg" fontWeight="bold" color={"#b87f2d"}>
                    $2.50
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="lg" fontWeight="bold" color={"#6c4621"}>
                    Peppermint Tea
                  </Text>
                  <Text fontSize="md" color={"#6c4621"}>
                    A minty and invigorating herbal tea perfect for relaxation.
                  </Text>
                </Box>
                <Box textAlign="right">
                  <Text fontSize="lg" fontWeight="bold" color={"#b87f2d"}>
                    $3.25
                  </Text>
                </Box>
              </Box>
        </Flex>
    )
}