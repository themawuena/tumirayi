/* eslint-disable @next/next/no-img-element */
import MainHeader from "@/Components/Header/MainHeader";
import { Flex } from "@mantine/core";

const Settings = () => {
  return (
    <Flex direction={"column"} gap={20}>
      <MainHeader title="Settings" />
    </Flex>
  );
};

export default Settings;
