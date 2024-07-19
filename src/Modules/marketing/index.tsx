import React from "react";
import { Flex } from "@mantine/core";
import MainHeader from "@/Components/Header/MainHeader";

const Marketing = () => {
  return (
    <Flex direction={"column"} gap={20}>
      <MainHeader title={"Marketing"} />
    </Flex>
  );
};

export default Marketing;
