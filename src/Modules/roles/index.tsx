/* eslint-disable @next/next/no-img-element */
import MainHeader from "@/Components/Header/MainHeader";
import { Flex } from "@mantine/core";

const Roles = () => {
  return (
    <Flex direction={"column"} gap={20}>
      <MainHeader title="Roles" />
    </Flex>
  );
};

export default Roles;
