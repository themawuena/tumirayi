import MainHeader from "@/Components/Header/MainHeader3";
import OrderTabs from "@/Components/Tabs/Orders";
import { Box, Flex } from "@mantine/core";

const OrderManagement = () => {
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
