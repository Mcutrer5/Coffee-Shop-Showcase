import React from "react";
import { Flex, TabIndicator, Tab, Tabs, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import { Sweets } from "./tabs/sweets";
import { Coffee } from "./tabs/coffee";
import { Tea } from "./tabs/tea";
import { HomeTab } from "./tabs/HomeTab";

class Body extends React.Component {
  render() {
    const selected = {
      color: "#6c4621",
      borderBottom: "2px solid #6c4621",
    };
    return (
      <Flex
        flexDirection="column" // This ensures that elements stack vertically
        height={"100%"}
        width={"100%"}
      >
        <Tabs variant="enclosed" color="#6c4621" isFitted>
          <TabList>
            <Tab _selected={selected}>Home</Tab>
            <Tab _selected={selected}>Coffee</Tab>
            <Tab _selected={selected}>Tea</Tab>
            <Tab _selected={selected}>Sweets</Tab>
          </TabList>
          <TabIndicator color="#6c4621" />
          <TabPanels>
            <TabPanel>
              <HomeTab />
            </TabPanel>
            <TabPanel>
              <Coffee />
            </TabPanel>
            <TabPanel>
              <Tea />
            </TabPanel>
            <TabPanel>
              <Sweets />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    );
  }
}

export default Body;
