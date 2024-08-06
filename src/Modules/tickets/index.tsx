"use client"
import MainHeader from "@/Components/Header/MainHeader3";
import { Flex } from "@mantine/core";

const Tickets = () => {
  return (
    <Flex direction={"column"} gap={20}>
      <MainHeader title="Tickets" />
    </Flex>
  );
};

export default Tickets;
