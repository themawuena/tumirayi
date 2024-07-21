import { Badge, Pagination, Table, Text } from "@mantine/core";
import { OrdersData } from "./_Data";
import { IconCircleCaretDown } from "@tabler/icons-react";
import { usePathname, useRouter } from "next/navigation";

export const COLORS: {
  confirmed: { name: string; color: string; bg: string };
  processing: { name: string; color: "#0FB7FF"; bg: string };
  shipped: { name: string; color: string; bg: string };
  pending: { name: string; color: string; bg: string };
  delivered: { name: string; color: string; bg: string };
  picked: { name: string; color: string; bg: string };
} = {
  confirmed: { name: "Confirmed", color: "#28C76F", bg: "#28C76F29" },
  processing: { name: "Processing", color: "#0FB7FF", bg: "#0FB7FF29" },
  shipped: { name: "Shipped", color: "#BD00FF", bg: "#BD00FF29" },
  pending: { name: "Pending", color: "#FFC600", bg: "#FFC60029" },
  delivered: { name: "Delivery", color: "#33189D", bg: "#33189D29" },
  picked: { name: "Picked", color: "#0F60FF", bg: "#0F60FF29" },
};

function CustomTable() {
  const router = useRouter();
  const pathName = usePathname();

  const handleRowClick = (id: any, type: string) => {
    if (type === "view") {
      router.push(`${pathName}/view/${id}`);
    } else if (type === "edit") {
      router.push(`/edit/${id}`);
    }
  };

  const rows = OrdersData?.map((element) => (
    <Table.Tr
      key={element.order_id}
      onClick={() => handleRowClick(element.order_id, "view")}
    >
      <Table.Td>#{element.order_id}</Table.Td>
      <Table.Td>{element.createdAt}</Table.Td>
      <Table.Td>{element.customer}</Table.Td>
      <Table.Td>{element.total}</Table.Td>
      <Table.Td>
        {element.profit}
        <Badge
          variant="light"
          bg={"#28C76F29"}
          color="#28C76F"
          radius="sm"
          size="xs"
        >
          16%
        </Badge>
      </Table.Td>
      <Table.Td>
        <Badge
          variant="filled"
          c={COLORS?.[element.status].color}
          bg={COLORS?.[element.status].bg}
          radius="sm"
          size="sm"
        >
          <Text size="10px">{COLORS?.[element.status].name}</Text>
        </Badge>
      </Table.Td>
      <Table.Td>
        <IconCircleCaretDown size={20} stroke={2} color="#8B909A" />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
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
        <Table.Thead>
          <Table.Tr>
            <Table.Th>ORDER ID</Table.Th>
            <Table.Th>CREATED</Table.Th>
            <Table.Th>CUSTOMER</Table.Th>
            <Table.Th>TOTAL</Table.Th>
            <Table.Th>PROFIT</Table.Th>
            <Table.Th>STATUS</Table.Th>
            <Table.Th></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <Pagination total={20} size={"sm"} />
    </>
  );
}

export default CustomTable;
