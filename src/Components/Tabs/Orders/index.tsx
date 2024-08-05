import { Button, Flex, Tabs, Text, TextInput } from "@mantine/core";
import React, { useEffect, useState } from "react";
import CustomTable from "@/Components/Tables/Table";
import { IconSearch } from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import useGetAllOrdersQuery from "@/API/data/dashboard/orders/use-get-my-orders.query";

export const SearchFilter = () => (
  <Flex direction={"row"} justify={"space-between"}>
    <TextInput
      style={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
        },
      }}
      w={"200px"}
      placeholder="Search by order id"
      withAsterisk
      rightSection={<IconSearch stroke={2} />}
    />
    <Button
      style={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
        },
      }}
      w={200}
      bg={"white"}
    >
      <Text size="15" c={"#8B909A"}>
        Filter by date range
      </Text>
    </Button>
  </Flex>
);

const OrderTabs = () => {
  const [ordersData, setOrdersData] = useState<
    {
      order_id: string;
      createdAt: string;
      customer: string;
      total: string;
      status: string;
      profit: string;
    }[]
  >([]);
  const [filteredData, setFilteredData] = useState<
    {
      order_id: string;
      createdAt: string;
      customer: string;
      total: string;
      status: string;
      profit: string;
    }[]
  >([]);
  const [currentStatus, setCurrentStatus] = useState<string | null>("pending");

  const { data: sessionData } = useSession();

  const { data: my_orders } = useGetAllOrdersQuery({
    // @ts-ignore
    id: sessionData?.userId,
    enable: true,
  });

  useEffect(() => {
    if (my_orders?.orders) {
      const transformedData = my_orders.orders.reduce(
        (
          acc: {
            order_id: string;
            createdAt: string;
            customer: string;
            total: string;
            status: string;
            profit: string;
          }[],
          order: any
        ) => {
          acc.push({
            order_id: order.id,
            createdAt: new Date(order.created_at).toLocaleDateString(),
            customer: `${order.customer.firstname} ${order.customer.lastname}`,
            total: order.total_price,
            profit: "N/A", // Adjust this as per your profit data
            status: order.status,
          });
          return acc;
        },
        []
      );
      setOrdersData(transformedData);
    }
  }, [my_orders]);

  useEffect(() => {
    setFilteredData(
      ordersData.filter((order) => order.status === currentStatus)
    );
  }, [ordersData, currentStatus]);

  return (
    <>
      <Tabs
        c={"#8B909A"}
        defaultValue="pending"
        onChange={(value) => setCurrentStatus(value)}
      >
        <Tabs.List>
          <Tabs.Tab value="pending">Pending</Tabs.Tab>
          <Tabs.Tab value="confirmed">Confirmed</Tabs.Tab>
          <Tabs.Tab value="processing">Processing</Tabs.Tab>
          <Tabs.Tab value="picked">Picked</Tabs.Tab>
          <Tabs.Tab value="shipped">Shipped</Tabs.Tab>
          <Tabs.Tab value="delivered">Delivered</Tabs.Tab>
          <Tabs.Tab value="cancelled">Cancelled</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="pending" pt="md">
          <Flex gap={20} direction={"column"} mih={50}>
            <SearchFilter />
            <CustomTable data={filteredData} />
          </Flex>
        </Tabs.Panel>

        <Tabs.Panel value="confirmed" pt="md">
          <Flex gap={20} direction={"column"} mih={50}>
            <SearchFilter />
            <CustomTable data={filteredData} />
          </Flex>
        </Tabs.Panel>

        <Tabs.Panel value="processing" pt="md">
          <Flex gap={20} direction={"column"} mih={50}>
            <SearchFilter />
            <CustomTable data={filteredData} />
          </Flex>
        </Tabs.Panel>

        <Tabs.Panel value="picked" pt="md">
          <Flex gap={20} direction={"column"} mih={50}>
            <SearchFilter />
            <CustomTable data={filteredData} />
          </Flex>
        </Tabs.Panel>

        <Tabs.Panel value="shipped" pt="md">
          <Flex gap={20} direction={"column"} mih={50}>
            <SearchFilter />
            <CustomTable data={filteredData} />
          </Flex>
        </Tabs.Panel>

        <Tabs.Panel value="delivered" pt="md">
          <Flex gap={20} direction={"column"} mih={50}>
            <SearchFilter />
            <CustomTable data={filteredData} />
          </Flex>
        </Tabs.Panel>

        <Tabs.Panel value="cancelled" pt="md">
          <Flex gap={20} direction={"column"} mih={50}>
            <SearchFilter />
            <CustomTable data={filteredData} />
          </Flex>
        </Tabs.Panel>
      </Tabs>
    </>
  );
};

export default OrderTabs;
