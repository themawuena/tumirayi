import { setOrderDetails } from "@/Providers/Store/orderSlice";
import { Badge, Pagination, Table, Text } from "@mantine/core";
import { IconCircleCaretDown } from "@tabler/icons-react";
import { log } from "console";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

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

interface Props {
  data: {
    order_id: string;
    createdAt: string;
    customer: string;
    total: string;
    status: string;
    profit: string;
    customerDetails: {} | any;
    address: string;
  }[];
}

function CustomTable({ data }: Props) {
  const router = useRouter();
  const pathName = usePathname();
  const dispatch = useDispatch();

  const handleRowClick = (id: string, type: string, query: any) => {
    if (type === "view") {
      dispatch(setOrderDetails(query));
      router.push(`${pathName}/view/${id}?${query}`);
    } else if (type === "edit") {
      router.push(`/edit/${id}`);
    }
  };

  const rows = data?.map((element) => {
    return (
      <Table.Tr
        key={element?.order_id}
        onClick={() => handleRowClick(element.order_id, "view", element)}
        style={{ cursor: "pointer" }}
      >
        <Table.Td>#{`${element.order_id}`}</Table.Td>
        <Table.Td>{element.createdAt}</Table.Td>
        <Table.Td>{element.customer}</Table.Td>
        <Table.Td>{element.total}</Table.Td>
        {/* <Table.Td>
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
        </Table.Td> */}
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
    );
  });

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
            {/* <Table.Th>PROFIT</Table.Th> */}
            <Table.Th>STATUS</Table.Th>
            <Table.Th></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <Table.Tr>
              <Table.Td
                colSpan={7}
                style={{ textAlign: "center", padding: "20px" }}
              >
                No orders found
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
      <Pagination total={20} size={"sm"} />
    </>
  );
}

export default CustomTable;
