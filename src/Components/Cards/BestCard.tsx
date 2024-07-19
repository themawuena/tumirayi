import { Box, Card, Flex, Group, Text } from "@mantine/core";
import {
  IconArrowUp,
  IconCalendarMonth,
  IconDotsVertical,
} from "@tabler/icons-react";
import React from "react";

interface Props {
  item: {
    name: string;
    amount: number;
    saleAmount: number;
    totalSales: number;
  };
}

const BestSellerCard = ({ item }: Props) => {
  return (
    <Flex w={"100%"} justify={"space-between"}>
      <Flex gap={15} align={"center"}>
        <Box bg={"#00000033"} w={65} h={60} style={{ borderRadius: 5 }}></Box>
        <Flex direction={"column"} gap={5}>
          <Text c="#000000"  size="16px">
            {item.name}
          </Text>
          <Text size="12px" c="#000000">
            R{item.amount}
          </Text>
        </Flex>
      </Flex>
      <Flex gap={5} justify={"center"} direction={"column"}>
        <Box>
          <Text size="14px" fw={"800"} c="#000000">
            R{item.amount}
          </Text>
        </Box>
        <Text c="#000000" size={"12px"}>
          {item.saleAmount} Sales
        </Text>
      </Flex>
    </Flex>
  );
};

export default BestSellerCard;
