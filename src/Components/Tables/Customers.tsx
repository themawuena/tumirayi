import { Avatar, Box, Flex, Table, Text } from "@mantine/core";
import { IconEdit, IconLock, IconTrash } from "@tabler/icons-react";
import { CustomersData } from "./_Data";


export function CustomerTable() {
  const rows = CustomersData.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>
        <Flex gap={10} align={"center"}>
          <Avatar radius="xl" size={"sm"} color="#00CFE8" />
          <Flex direction={"column"}>
            <Text size="12px" fw={"500"}>
              {element.name}
            </Text>
            <Text size="10px" c={"#8B909A"}>
              {element.email}
            </Text>
          </Flex>
        </Flex>
      </Table.Td>
      <Table.Td>{element.number}</Table.Td>
      <Table.Td>{element.createdAt}</Table.Td>
      <Table.Td>
        <Flex align={"center"} gap={10}>
          <IconEdit size={20} color="#8B909A" stroke={1.5} />
          <IconLock size={20} color="#8B909A" stroke={1.5} />
          <IconTrash size={20} color="#8B909A" stroke={1.5} />
        </Flex>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table
      bg={"white"}
      styles={{
        th: {
          color: "#8B909A",
          fontSize: "13px",
          fontWeight: "600",
        },
        td: {
          color: "#23272E",
          fontSize: "12px",
          fontWeight: "400",
          padding: "15px",
        },
      }}
      style={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <thead>
        <Table.Tr>
          <Table.Th>NAME</Table.Th>
          <Table.Th>PHONE NUMBER</Table.Th>
          <Table.Th>CREATED</Table.Th>
          <Table.Th>ACTION</Table.Th>
        </Table.Tr>
      </thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
