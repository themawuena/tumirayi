import { Menu, rem, Avatar } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
import { signOut } from "next-auth/react";

export function UserMenu() {
  const handleLogout = async () => {
    await signOut()
  };

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Avatar radius="xl" color="indigo" />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>User</Menu.Label>
        <Menu.Item
          onClick={handleLogout}
          leftSection={
            <IconLogout
              color="red"
              style={{ width: rem(14), height: rem(14) }}
            />
          }
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
