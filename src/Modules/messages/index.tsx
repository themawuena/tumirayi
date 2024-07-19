/* eslint-disable @next/next/no-img-element */
import { Flex } from "@mantine/core";
import MainHeader from "@/Components/Header/MainHeader";

const Messages = () => {
  return (
    <Flex direction={"column"} gap={20}>
      <MainHeader title="Messages" />
    </Flex>
  );
};

export default Messages;
