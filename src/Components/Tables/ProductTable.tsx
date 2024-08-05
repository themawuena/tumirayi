import { Badge, Checkbox, Flex, Table } from "@mantine/core";
import { OrdersProductData } from "./_Data";
import { IconCircleCaretDown } from "@tabler/icons-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

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

function CustomTable({
  data,
}: {
  data: {
    order_id: number;
    quantity: string;
    id: string;
    total: number;
    name: string;
    price: number;
  }[];
}) {
  const router = useRouter();
  const pathName = usePathname();

  const [allSelected, setAllSelected] = useState(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.currentTarget.checked;
    setAllSelected(isChecked);
    setSelectedRows(
      isChecked ? OrdersProductData.map((element) => element.order_id) : []
    );
  };

  const handleRowSelect = (orderId: number, isChecked: boolean) => {
    setSelectedRows((prev) => {
      const newSelectedRows = isChecked
        ? [...prev, orderId]
        : prev.filter((id) => id !== orderId);
      setAllSelected(newSelectedRows.length === OrdersProductData.length);
      return newSelectedRows;
    });
  };

  const handleRowClick = (id: any, type: string) => {
    if (type === "view") {
      router.push(`${pathName}/view/${id}`);
    } else if (type === "edit") {
      router.push(`/edit/${id}`);
    }
  };

  const rows = data?.map((element) => {

    console.log(element, "hs");
    return (
      <Table.Tr key={element?.order_id}>
        <Table.Td>
          <Flex gap={10}>
            <Checkbox
              aria-label="Select row"
              checked={selectedRows.includes(element?.order_id)}
              onChange={(event) =>
                handleRowSelect(element?.order_id, event.currentTarget.checked)
              }
            />
            {element?.name}
          </Flex>
        </Table.Td>
        <Table.Td>#{element?.order_id}</Table.Td>
        <Table.Td>{element?.quantity}</Table.Td>
        <Table.Td>R {element?.price}</Table.Td>
        <Table.Td>R {element?.total}</Table.Td>
      </Table.Tr>
    );
  });

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
          fontSize: "14px",
          fontWeight: "500",
          padding: "10px",
        },
      }}
    >
      <Table.Thead>
        <Table.Tr>
          <Table.Th>PRODUCT NAME</Table.Th>
          <Table.Th>ORDER ID</Table.Th>
          <Table.Th>Quantity</Table.Th>
          <Table.Th>PRICE</Table.Th>
          <Table.Th>Total</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

export default CustomTable;
