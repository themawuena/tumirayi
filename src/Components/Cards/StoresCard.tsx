"use client";
import {
  Card,
  Image,
  Text,
  Group,
  Box,
  Flex,
  Menu,
  Divider,
  Progress,
} from "@mantine/core";
import {
  IconArrowsLeftRight,
  IconArrowUp,
  IconDots,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTrash,
} from "@tabler/icons-react";

export function StoresCard() {
  return (
    <Card bg={"#FAFAFA"} shadow="0" p="xs" radius="md">
      <Flex direction={"row"} gap={5}>
        <Box w={"30%"}>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            height={100}
            width={100}
            alt="Norway"
            radius={10}
          />
        </Box>
        <Flex pl={"sm"} w={"70%"} justify={"space-between"}>
          <Flex direction={"column"} gap={10} justify={"space-between"}>
            <Box>
              <Text fw={"600"} size={"16x"} c={"#232321"}>
                Store Name
              </Text>
              <Text fw={"600"} size={"14px"} c={"#646464"}>
                store type
              </Text>
            </Box>
          </Flex>
          <></>
        </Flex>
      </Flex>

      <Group mt="md" mb="xs" gap={0}>
        <Text fw={600} c="#232321">
          Description
        </Text>
        <Text size="sm" fw={"400"} c="#797978">
          Lorem ipsum is placeholder text commonly used in the graphic.
        </Text>
      </Group>

      <Card shadow="0" withBorder bg="#FAFAFA" mt="sm" mb="xs" p={5} px={10}>
        <Text ta={"end"} py={6} size="14px" fw={600} c={"#646464"}>
          Edit Store
        </Text>
        <Divider size="xs" />
        <Text ta={"end"} py={6} size="14px" fw={600} c={"#646464"}>
          Store Products
        </Text>
      </Card>
    </Card>
  );
}
