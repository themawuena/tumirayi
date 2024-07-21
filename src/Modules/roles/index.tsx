/* eslint-disable @next/next/no-img-element */
import MainHeader from "@/Components/Header/MainHeader3";
import { Flex } from "@mantine/core";

const Roles = () => {
  return (
    <Flex direction={"column"} gap={20}>
      <MainHeader title="Roles" />
    </Flex>
  );
};

export default Roles;
