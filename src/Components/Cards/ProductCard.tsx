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
import { IconArrowUp, IconDots, IconEdit, IconEye } from "@tabler/icons-react";
import { usePathname, useRouter } from "next/navigation";

function MenuButton() {
  const router = useRouter();
  const pathName = usePathname();

  const HandleNavigation = (id: any) => {
    router.push(`${pathName}/view/${id}`);
  };

  return (
    <Menu shadow="0" position="bottom-end" width={150}>
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
        <Menu.Item
          onClick={() => HandleNavigation(3)}
          leftSection={<IconEye size={14} />}
        >
          View
        </Menu.Item>
        <Menu.Item
          onClick={() => HandleNavigation(3)}
          leftSection={<IconEdit size={14} />}
        >
          Edit
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
