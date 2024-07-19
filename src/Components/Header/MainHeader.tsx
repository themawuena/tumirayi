import { Avatar, Box, Button, Flex, Indicator, Text } from "@mantine/core";
import React from "react";
import { IconBell } from "@tabler/icons-react";
interface Props {
  title: string;
  section?: "Home" | "Product" | "Admin";
}
const MainHeader = ({ title, section = "Home" }: Props) => {
  return (
    <Flex
      mih={50}
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
        <Indicator label={9} color="#EA5455" inline size={15}>
          <IconBell stroke={2} color="#4B465C" />
        </Indicator>
        <Avatar radius="xl" color="indigo" />
      </Flex>
    </Flex>
  );
};

export default MainHeader;
