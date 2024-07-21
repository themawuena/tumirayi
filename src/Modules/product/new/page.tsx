/* eslint-disable @next/next/no-img-element */
import MainHeader from "@/Components/Header/MainHeader3";
import { Flex } from "@mantine/core";
import React from "react";

const AddProducts = () => {
  return (
    <Flex direction={"column"} gap={20}>
      <MainHeader title="Add Product" />
    </Flex>
  );
};

export default AddProducts;
