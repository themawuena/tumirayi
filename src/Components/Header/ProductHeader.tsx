import { Avatar, Box, Button, Flex, Indicator, Text } from "@mantine/core";
import { IconCirclePlus } from "@tabler/icons-react";
import React from "react";

interface Props {
  title: string;
  section?: "Home" | "Product" | "Admin";
}
const MainHeader = ({ title, section = "Home" }: Props) => {
  return (
    <Flex
      mih={50}
      //   bg="#fff"
      gap="md"
      justify="space-between"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <Flex direction={"column"} gap={0}>
        <Text className="text-[24px] text-[#23272E] font-bold ">{title}</Text>
        <Text className="text-[15px] text-[#23272E] font-medium ">{`${section} > ${title}`}</Text>
      </Flex>
      <Flex direction={"row"} gap={15} align={"center"}>
        <Button
          leftSection={<IconCirclePlus size={17} />}
          className={`gap-5`}
          size="md"
          bg={"#232321"}
        >
          <Text size="15">Add a New Product</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default MainHeader;
