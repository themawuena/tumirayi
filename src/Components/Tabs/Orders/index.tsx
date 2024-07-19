import { Box, Button, Flex, Tabs, Text, TextInput } from "@mantine/core";
import React from "react";

import CustomTable from "@/Components/Tables/Table";
import {
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
} from "@tabler/icons-react";

const SearchFilter = () => (
  <Flex direction={"row"} justify={"space-between"}>
    <TextInput
      style={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
        },
      }}
      w={"200px"}
      placeholder="Search by order id"
      withAsterisk
      rightSection={<IconSearch stroke={2} />}
    />
    <Button
      style={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
        },
      }}
      w={200}
      bg={"white"}
    >
      <Text size="15" c={"#8B909A"}>Filter by date range</Text>
    </Button>
  </Flex>
);

const OrderTabs = () => {
  return (
    <>
      <Tabs c={"#8B909A"} defaultValue="pending">
        <Tabs.List>
          <Tabs.Tab value="pending">Pending</Tabs.Tab>
          <Tabs.Tab value="confirmed">Confirmed</Tabs.Tab>
          <Tabs.Tab value="processing">Processing</Tabs.Tab>
          <Tabs.Tab value="picked">Picked</Tabs.Tab>
          <Tabs.Tab value="shipped">Shipped</Tabs.Tab>
          <Tabs.Tab value="delivered">Delivered</Tabs.Tab>
          <Tabs.Tab value="cancelled">Cancelled</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="pending" pt="md">
          <Flex gap={20} direction={"column"} mih={50}>
            <SearchFilter />
            <CustomTable />
          </Flex>
        </Tabs.Panel>

        <Tabs.Panel value="confirmed" pt="md">
          <Flex gap={20} direction={"column"} mih={50}>
            <SearchFilter />
            <CustomTable />
          </Flex>
        </Tabs.Panel>

        <Tabs.Panel value="processing" pt="md">
          <Flex gap={20} direction={"column"} mih={50}>
            <SearchFilter />
            <CustomTable />
          </Flex>
        </Tabs.Panel>

        <Tabs.Panel value="picked" pt="md">
          <Flex gap={20} direction={"column"} mih={50}>
            <SearchFilter />
            <CustomTable />
          </Flex>
        </Tabs.Panel>

        <Tabs.Panel value="shipped" pt="md">
          <Flex gap={20} direction={"column"} mih={50}>
            <SearchFilter />
            <CustomTable />
          </Flex>
        </Tabs.Panel>

        <Tabs.Panel value="delivered" pt="md">
          <Flex gap={20} direction={"column"} mih={50}>
            <SearchFilter />
            <CustomTable />
          </Flex>
        </Tabs.Panel>

        <Tabs.Panel value="cancelled" pt="md">
          <Flex gap={20} direction={"column"} mih={50}>
            <SearchFilter />
            <CustomTable />
          </Flex>
        </Tabs.Panel>
      </Tabs>
    </>
  );
};

export default OrderTabs;
