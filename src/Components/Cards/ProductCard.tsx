"use client";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
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

function MenuButton() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Flex
          style={{
            borderRadius: 5,
          }}
          align={"center"}
          justify={"center"}
          bg={"#2323210D"}
          w={35}
          h={25}
        >
          <IconDots stroke={1} />
        </Flex>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item leftSection={<IconSettings size={14} />}>Settings</Menu.Item>
        <Menu.Item leftSection={<IconMessageCircle size={14} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconPhoto size={14} />}>Gallery</Menu.Item>
        <Menu.Item
          leftSection={<IconSearch size={14} />}
          rightSection={
            <Text size="xs" c="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item leftSection={<IconArrowsLeftRight size={14} />}>
          Transfer my data
        </Menu.Item>
        <Menu.Item color="red" leftSection={<IconTrash size={14} />}>
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export function ProductCard() {
  return (
    <Card shadow="sm" p="xs" radius="md" withBorder>
      <Flex direction={"row"} gap={5}>
        <Box w={"30%"}>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            height={100}
            width={100}
            alt="Norway"
          />
        </Box>
        <Flex pl={"sm"} w={"70%"} justify={"space-between"}>
          <Flex direction={"column"} gap={10} justify={"space-between"}>
            <Box>
              <Text fw={"500"} fs={"16px"}>
                Lorem Ipsum
              </Text>
              <Text fw={"600"} fs={"14px"} c={"#4E4E4C"}>
                Battery
              </Text>
            </Box>
            <Text fw={"800"}>R10</Text>
          </Flex>
          <MenuButton />
        </Flex>
      </Flex>

      <Group mt="md" mb="xs" gap={0}>
        <Text fw={600} c="#232321">
          Summary
        </Text>
        <Text size="sm" fw={"400"} c="#5E5E5C">
          Lorem ipsum is placeholder text commonly used in the graphic.
        </Text>
      </Group>

      <Card shadow="0" withBorder mt="sm" mb="xs" p={10}>
        <Flex justify={"space-between"}>
          <Text fs="14" fw={500} c={"#4E4E4C"}>
            Sales
          </Text>
          <Group>
            <IconArrowUp stroke={2} color="#FFA52F" size={18} />
            <Text fs="14" fw={500} c={"#4E4E4C"}>
              1238
            </Text>
          </Group>
        </Flex>
        <Divider size="xs" />
        <Flex justify={"space-between"}>
          <Text fs="14" fw={500} c={"#4E4E4C"}>
            Remaining Products
          </Text>
          <Group>
            <Progress w={50} value={20} size={"5"} color="yellow" />
            <Text fs="14" fw={500} c={"#4E4E4C"}>
              1269
            </Text>
          </Group>
        </Flex>
      </Card>
    </Card>
  );
}
