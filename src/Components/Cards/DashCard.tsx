import { Box, Card, Flex, Group, Text } from "@mantine/core";
import {
  IconArrowUp,
  IconCalendarMonth,
  IconDotsVertical,
} from "@tabler/icons-react";
import React from "react";

const DashCard = () => {
  return (
    <Card w={"25%"} shadow="0" p="lg" radius="md">
      <Flex justify={"space-between"} pb={10} align={"center"}>
        <Text c="blue">DashCard</Text>
        <IconDotsVertical stroke={2} size={"20px"} />
      </Flex>
      <Group justify="space-between" pb={10}>
        <Flex gap={15} align={"center"}>
          <Box bg={"#003F62"} p={5} style={{ borderRadius: 5 }}>
            <IconCalendarMonth stroke={2} color="white" />
          </Box>
          <Text fw={"600"} c="#000000">
            R126.500
          </Text>
        </Flex>
        <Flex gap={5} align={"center"}>
          <Box>
            <IconArrowUp stroke={2} color="#000000" />
          </Box>
          <Text c="#000000" size={"14px"}>
            34.7%
          </Text>
        </Flex>
      </Group>
      <Group align="end" justify="end">
        <Text fw={"400"} size="12px">
          Compared to Oct 2023
        </Text>
      </Group>
    </Card>
  );
};

export default DashCard;
