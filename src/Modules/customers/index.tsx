"use client"
import React from "react";
import MainHeader from "@/Components/Header/MainHeader";
import { Flex, Pagination } from "@mantine/core";
import { CustomerTable } from "@/Components/Tables/Customers";
import { SearchFilter } from "@/Components/Tabs/Orders";

const Customers = () => {
  return (
    <Flex direction={"column"} gap={20}>
      <MainHeader title={"Customers"} />
      <SearchFilter />
      <CustomerTable />
      <Pagination size={"sm"} total={10} />
    </Flex>
  );
};

export default Customers;
