"use client"
import MainHeader from "@/Components/Header/MainHeader3";
import { Flex } from "@mantine/core";

const Settings = () => {
  return (
    <Flex direction={"column"} gap={20}>
      <MainHeader title="Settings" />
    </Flex>
  );
};

export default Settings;
