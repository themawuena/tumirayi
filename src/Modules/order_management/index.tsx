import { SetStateAction, useState } from "react";
import MainHeader from "@/Components/Header/MainHeader3";
import OrderTabs from "@/Components/Tabs/Orders";
import { Box, Flex } from "@mantine/core";
import { useSession } from "next-auth/react";
import useGetAllOrdersQuery from "@/API/data/dashboard/orders/use-get-my-orders.query";

const OrderManagement = () => {
  const { data } = useSession();

  const { data: my_orders } = useGetAllOrdersQuery({
    // @ts-ignore
    id: data?.userId,
    enable: true,
  });

  console.log(my_orders);

  const [activeTab, setActiveTab] = useState("Pending");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Dummy data for demonstration
  const orders = Array.from({ length: 50 }, (_, index) => ({
    orderId: index + 1,
    created: "2023-07-16",
    customer: `Customer ${index + 1}`,
    total: `$${(index + 1) * 10}.00`,
    profit: `$${(index + 1) * 2}.00`,
    status: activeTab,
  }));

  const handleTabClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };

  const handleSearchChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  const handlePageChange = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  // Pagination logic
  const filteredOrders = orders.filter((order) =>
    order.orderId.toString().includes(searchTerm)
  );
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const currentOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Flex direction={"column"} gap={20}>
      <MainHeader title={"Order Managements"} />
      <Box h={50} bottom={10}>
        <OrderTabs />
      </Box>
    </Flex>
  );
};

export default OrderManagement;
