import { Avatar, Badge, Checkbox, Flex, Indicator, Table } from "@mantine/core";
import { RecentData } from "./_Data";
import { useState } from "react";

function CustomTable() {
  const COLORS = {
    confirmed: { name: "Confirmed", color: "#28C76F", bg: "#28C76F29" },
    processing: { name: "Processing", color: "#0FB7FF", bg: "#0FB7FF29" },
    shipped: { name: "Shipped", color: "#BD00FF", bg: "#BD00FF29" },
    pending: { name: "Pending", color: "#FFC600", bg: "#FFC60029" },
    delivered: { name: "Delivery", color: "#33189D", bg: "#33189D29" },
    picked: { name: "Picked", color: "#0F60FF", bg: "#0F60FF29" },
  };

  const [allSelected, setAllSelected] = useState(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.currentTarget.checked;
    setAllSelected(isChecked);
    setSelectedRows(isChecked ? RecentData.map(element => element.order_id) : []);
  };

  const handleRowSelect = (orderId: number, isChecked: boolean) => {
    setSelectedRows(prev => {
      const newSelectedRows = isChecked ? [...prev, orderId] : prev.filter(id => id !== orderId);
      setAllSelected(newSelectedRows.length === RecentData.length);
      return newSelectedRows;
    });
  };

  const rows = RecentData?.map((element) => (
    <Table.Tr key={element.order_id}>
      <Table.Th w={80}>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(element.order_id)}
          onChange={(event) => handleRowSelect(element.order_id, event.currentTarget.checked)}
        />
      </Table.Th>
      <Table.Td>{element.profit}</Table.Td>
      <Table.Td>#{element.order_id}</Table.Td>
      <Table.Td>{element.createdAt}</Table.Td>
      <Table.Td style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Avatar radius="xl" size={"sm"} />
        {element.customer}
      </Table.Td>
      <Table.Td>
        <Flex gap={10}>
          <Indicator inline size={7} offset={0} position="middle-center" color={COLORS[element.status].color} />
          {COLORS[element.status].name}
        </Flex>
      </Table.Td>
      <Table.Td>R{element.total}</Table.Td>
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
          padding: "10px",
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
          <Table.Th>
            <Checkbox checked={allSelected} onChange={handleSelectAll} />
          </Table.Th>
          <Table.Th>Product</Table.Th>
          <Table.Th>Order Id</Table.Th>
          <Table.Th>Date</Table.Th>
          <Table.Th>Customer Name</Table.Th>
          <Table.Th>Status</Table.Th>
          <Table.Th>Amount</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

export default CustomTable;
