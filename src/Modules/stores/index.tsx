/* eslint-disable @next/next/no-img-element */
import MainHeader from "@/Components/Header/MainHeader";
import { Flex } from "@mantine/core";

const Stores = () => {
  return (
    <Flex direction={"column"} gap={20}>
      <MainHeader title="Stores" />
    </Flex>
  );
};

export default Stores;
