/* eslint-disable @next/next/no-img-element */
import { Flex } from "@mantine/core";
import MainHeader from "@/Components/Header/MainHeader3";

const Messages = () => {
  return (
    <Flex direction={"column"} gap={20}>
      <MainHeader title="Messages" />
    </Flex>
  );
};

export default Messages;
