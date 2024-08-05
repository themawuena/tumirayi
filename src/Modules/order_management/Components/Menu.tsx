import { Menu, Button, Text, rem } from "@mantine/core";
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconCaretDownFilled,
  IconPointFilled,
} from "@tabler/icons-react";

interface Props {
  title: string;
}

export function MyMenu({ title }: Props) {
  let Status: { name: string; color: string }[] = [
    { name: "confirmed", color: "#28C76F" },
    { name: "processing", color: "#0FB7FF" },
    { name: "shipped", color: "#BD00FF" },
    { name: "pending", color: "#FFC600" },
    { name: "delivered", color: "#33189D" },
    { name: "picked", color: "#0F60FF" },
  ];

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
        {Status?.map((status, index) => {
          return (
            <Menu.Item
              key={index}
              leftSection={
                <IconPointFilled
                  style={{
                    width: rem(14),
                    height: rem(14),
                    color: status?.color,
                  }}
                />
              }
            >
              {status.name}
            </Menu.Item>
          );
        })}
      </Menu.Dropdown>
    </Menu>
  );
}
