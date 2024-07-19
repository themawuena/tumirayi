"use client";
import DashCard from "@/Components/Cards/DashCard";
import LineCart from "@/Components/Chart/Line";
import MainHeader from "@/Components/Header/DashHeader";
import CustomTable from "@/Components/Tables/RecentTable";
import { Box, Card, Flex, Group, Text } from "@mantine/core";
import React from "react";

function Page() {
  return (
    <Flex direction={"column"} gap={20}>
      <MainHeader title="Dashboard" section="Home" />
      <Flex>
        <DashCard />
        <DashCard />
        <DashCard />
        <DashCard />
      </Flex>
      <Flex gap={20}>
        <Box w={"70%"}>
          <Card>
            <Text>Hello</Text>
          </Card>
          <LineCart />
        </Box>
        <Box w={"40%"}>
          <Card>
            <Text>Hello</Text>
          </Card>
        </Box>
      </Flex>
      <Flex direction="column">
        <Text c={"#000000"} fw={"600"} my={10}>
          Recent Orders
        </Text>
        <CustomTable />
      </Flex>
    </Flex>
  );
}

export default Page;
