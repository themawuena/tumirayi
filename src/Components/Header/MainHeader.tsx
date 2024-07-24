import {
  Anchor,
  Avatar,
  Box,
  Breadcrumbs,
  Flex,
  Indicator,
  Text,
} from "@mantine/core";
import React from "react";
import { IconBell } from "@tabler/icons-react";
import { UserMenu } from "./Components/MyMenu";
interface Props {
  title: string;
  section?: "Home" | "Product" | "Admin" | "Stores";
  BreadcrumbsItems?: { title: string; href: string }[] | any[];
}
const MainHeader = ({ title, section = "Home", BreadcrumbsItems }: Props) => {
  const items = BreadcrumbsItems?.map((item, index) => (
    <Anchor href={item.href} c={"#323232"} key={index}>
      <Text size="16px" fw={"600"}>
        {item.title}
      </Text>
    </Anchor>
  ));

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
        <Box>
          {BreadcrumbsItems && (
            <Breadcrumbs separator=">" separatorMargin="5">
              {items}
            </Breadcrumbs>
          )}
        </Box>
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
