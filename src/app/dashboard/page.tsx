"use client";
import BestSellerCard from "@/Components/Cards/BestCard";
import DashCard from "@/Components/Cards/DashCard";
import LineCart from "@/Components/Chart/Line";
import MainHeader from "@/Components/Header/DashHeader";
import CustomTable from "@/Components/Tables/RecentTable";
import { Box, Button, Card, Flex, Group, Text } from "@mantine/core";
import { IconDotsVertical } from "@tabler/icons-react";
import React from "react";

function Page() {
  const DATA: {
    id: number;
    title: string;
    amount: number;
    percentage: number;
    date: string;
  }[] = [
    {
      id: 1,
      amount: 100,
      date: "Oct 2014",
      percentage: 23.6,
      title: "Total Oders",
    },
    {
      id: 2,
      title: "Active Orders",
      amount: 126.5,
      percentage: 34.7,
      date: "Oct 2014",
    },
    {
      id: 3,
      amount: 100,
      date: "Oct 2014",
      percentage: 23.6,
      title: "Total Oders",
    },
    {
      id: 4,
      title: "Active Orders",
      amount: 126.5,
      percentage: 34.7,
      date: "Oct 2014",
    },
  ];

  const DATA2: {
    id: number;
    name: string;
    amount: number;
    saleAmount: number;
    totalSales: number;
  }[] = [
    {
      id: 1,
      amount: 100,
      totalSales: 2014,
      saleAmount: 23.6,
      name: "Total Oders",
    },
    {
      id: 2,
      name: "Active Orders",
      amount: 126.5,
      saleAmount: 34.7,
      totalSales: 2014,
    },
    {
      id: 3,
      name: "Total Oders",
      amount: 100,
      saleAmount: 201,
      totalSales: 230,
    },
  ];
  return (
    <Flex direction={"column"} gap={20}>
      <MainHeader title="Dashboard" section="Home" />
      <Flex>
        {DATA.map((item) => (
          <DashCard key={item.id} item={item} />
        ))}
      </Flex>
      <Flex gap={20}>
        <Box w={"80%"}>
          <Card
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text fw={"600"}>Sale Graph</Text>
            <Box>
              <Button.Group >
                <Button variant="default">First</Button>
                <Button variant="default">Second</Button>
                <Button variant="default">Third</Button>
              </Button.Group>
            </Box>
          </Card>
          <LineCart />
        </Box>
        <Box w={"30%"}>
          <Card
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text fw={"600"}>Best Sellers</Text>
            <IconDotsVertical stroke={2} size={"20px"} />
          </Card>
          <Flex mt={10} gap={15} direction={"column"}>
            {DATA2.map((item) => (
              <BestSellerCard key={item.id} item={item} />
            ))}
            <Button w={"40%"} bg={"#003F62"}>
              REPORT
            </Button>
          </Flex>
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
