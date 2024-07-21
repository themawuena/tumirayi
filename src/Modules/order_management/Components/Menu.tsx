import { Menu, Button, Text, rem } from "@mantine/core";
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconCaretDownFilled,
} from "@tabler/icons-react";

interface Props {
  title: string;
}

export function MyMenu({ title }: Props) {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button
          w={200}
          rightSection={<IconCaretDownFilled stroke={2} />}
          bg={"#F4F2F2"}
          c={"#232321"}
          h={50}
          p={0}
          px={5}
          radius={8}
          styles={{
            inner: {
              alignItems: "center",
              justifyContent: "space-between",
              padding: 5,
              fontSize: "14px",
            },
          }}
        >
          <Text size="14px">{title}</Text>
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item
          leftSection={
            <IconSettings style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Settings
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconMessageCircle style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Messages
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconPhoto style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Gallery
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconSearch style={{ width: rem(14), height: rem(14) }} />
          }
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
        <Menu.Item
          leftSection={
            <IconArrowsLeftRight style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Transfer my data
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={
            <IconTrash style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
