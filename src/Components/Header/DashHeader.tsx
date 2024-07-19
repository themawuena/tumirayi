import { Avatar, Box, Button, Flex, Indicator, Text } from "@mantine/core";
import React from "react";
import { IconBell, IconCalendarMonth } from "@tabler/icons-react";
interface Props {
  title: string;
  section?: "Home" | "Product" | "Admin";
}
const MainHeader = ({ title, section = "Home" }: Props) => {
  return (
    <Flex
      mih={50}
      gap="0"
      justify="space-between"
      align="start"
      direction="column"
      wrap="wrap"
    >
      <Flex
        w={"100%"}
        direction={"row"}
        align={"center"}
        justify={"space-between"}
        gap={0}
      >
        <Text className="text-[24px] text-[#23272E] font-bold ">{title}</Text>
        <Text />
      </Flex>
      <Flex
        w={"100%"}
        direction={"row"}
        justify={"space-between"}
        align={"center"}
      >
        <Text className="text-[15px] text-[#23272E] font-medium ">{`${section} > ${title}`}</Text>
        <Flex align={"center"} justify={"center"} gap={2}>
          <IconCalendarMonth stroke={2} size={"20px"} color="#23272E" />
          <Text className="text-[15px] text-[#23272E] font-medium ">
            Oct 11,2023 - Nov 11,2022
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MainHeader;
