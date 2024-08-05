"use client";
import MainHeader from "@/Components/Header/MainHeader";
import { COLORS } from "@/Components/Tables/Table";
import {
  ActionIcon,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Text,
  Textarea,
} from "@mantine/core";
import {
  IconCalendarMonth,
  IconPrinter,
  IconUser,
  IconShoppingBag,
} from "@tabler/icons-react";
import React, { useEffect, useMemo, useState } from "react";
import { MyMenu } from "./Components/Menu";
import CustomTable from "@/Components/Tables/ProductTable";
import { useSelector } from "react-redux";

interface Props {
  items: any;
  params: { id: string };
}

interface UserInfo {
  name?: "Customer";
  fullName: string;
  email: string;
  phone: string;
}

interface PaymentInfo {
  name?: "Order Info";
  shipping: string;
  paymentMethod: string;
  status: string;
}

interface AddressInfo {
  name?: "Deliver to";
  address: string;
}

type Info = UserInfo | PaymentInfo | AddressInfo;

type DataItem = {
  id: number;
  icon: any;
  Info: Info;
  button: "View" | "Download";
};

const ViewDetails = ({ items, params }: Props) => {
  const orderDetails = useSelector((state: any) => state.order.orderDetails);

  let PRODUCTS = orderDetails?.products;

  const Details: DataItem[] = [
    {
      id: 1,
      icon: <IconUser stroke={2} color="white" />,
      Info: {
        name: "Customer",
        email: orderDetails?.customerDetails?.email || "customer@example.com",
        fullName: orderDetails?.customer,
        phone: orderDetails?.customerDetails?.mobile || "N/A",
      },
      button: "View",
    },
    {
      id: 2,
      icon: <IconShoppingBag color="white" stroke={2} />,

      Info: {
        name: "Order Info",
        paymentMethod: "Card",
        shipping: "Next express",
        status: "Pending",
      },
      button: "Download",
    },
    {
      id: 3,
      icon: <IconShoppingBag color="white" stroke={2} />,
      Info: {
        name: "Deliver to",
        address: orderDetails?.address || "Delivery Address",
      },
      button: "View",
    },
  ];

  // STATES
  const [ORDER_PRODUCTS, setORDER_PRODUCTS] = useState<
    {
      order_id: number;
      quantity: string;
      id: string;
      total: number;
      name: string;
      price: number;
    }[]
  >([]);

  useEffect(() => {
    if (PRODUCTS) {
      let restructuredData = PRODUCTS?.reduce(
        (
          acc: {
            order_id: string;
            quantity: string;
            id: number;
            total: number;
            name: string;
            price: number;
          }[],
          item: any
        ) => {
          acc.push({
            order_id: item?.order_id,
            quantity: item?.quantity,
            id: Number(item?.id),
            total: item?.quantity * Number(item?.sale_price),
            name: item?.product?.product_name,
            price: Number(item?.sale_price),
          });
          return acc;
        },
        []
      );

      setORDER_PRODUCTS(restructuredData);
    }
  }, [PRODUCTS]);

  const totalSum = useMemo(() => {
    return ORDER_PRODUCTS.reduce((acc, product) => acc + product.total, 0);
  }, [ORDER_PRODUCTS]);

  const percentageValue = useMemo(() => {
    return totalSum * 0.015; // 1.5% of the total sum
  }, [totalSum]);

  const Account = [
    { name: "Subtotal", amount: totalSum.toFixed(2) },
    { name: "Tax", amount: percentageValue.toFixed(3) },
    { name: "Discount", amount: 0 },
    { name: "Shipping Rate", amount: 0 },
  ];

  return (
    <Flex direction={"column"} gap={20}>
      <MainHeader title="Order Details" BreadcrumbsItems={items} />
      <Card style={{ gap: 30 }} radius={8}>
        <Flex gap={10} align={"center"}>
          <Text size="24px" c={"#232321"} fw={"600"}>
            Orders ID: #{orderDetails?.order_id || ""}
          </Text>
          <Button h={30} bg={COLORS["pending"].color} c={"black"}>
            Pending
          </Button>
        </Flex>
        <Flex align={"center"} justify={"space-between"} gap={2}>
          <Flex align={"center"} gap={2}>
            {/* <IconCalendarMonth stroke={2} size={"20px"} color="#23272E" />
            <Text className="text-[15px] text-[#23272E] font-medium ">
              Oct 11,2023 - Nov 11,2022
            </Text> */}
          </Flex>
          <Flex gap={20}>
            <MyMenu title="Change Satus" />
            <ActionIcon
              variant="filled"
              aria-label="Settings"
              bg={"#F4F2F2"}
              c={"#232321"}
              w={60}
              h={50}
              p={0}
              px={5}
              radius={8}
            >
              <IconPrinter stroke={1} />
            </ActionIcon>
            <ActionIcon
              variant="filled"
              aria-label="Settings"
              bg={"#F4F2F2"}
              c={"#232321"}
              w={60}
              h={50}
              p={0}
              px={5}
              radius={8}
            >
              <Text>Track</Text>
            </ActionIcon>
          </Flex>
        </Flex>
        {/* CARDS */}
        <Grid gutter={20}>
          {Details?.map((details) => (
            <Grid.Col span={4} key={details.id}>
              <Card
                radius={8}
                withBorder
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 20,
                }}
                h={170}
              >
                <Flex gap={10}>
                  <Box
                    mah="50"
                    maw={50}
                    style={{
                      display: "flex",
                      borderRadius: 8,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    bg={"#232321"}
                    p={15}
                  >
                    {details.icon}
                  </Box>
                  <Flex direction={"column"} gap={7}>
                    <Text size="20px" fw={"600"}>
                      {details.Info.name}
                    </Text>
                    {details.Info.name === "Customer" && (
                      <>
                        <Text size="14px" c={"#70706E"} fw={"500"}>
                          Full Name: {details.Info.fullName}
                        </Text>
                        <Text size="14px" c={"#70706E"} fw={"500"}>
                          Email: {details.Info?.email}
                        </Text>
                        <Text size="14px" c={"#70706E"} fw={"500"}>
                          Phone: {details.Info?.phone}
                        </Text>
                      </>
                    )}
                    {details.Info?.name === "Order Info" && (
                      <>
                        <Text size="14px" c={"#70706E"} fw={"500"}>
                          Shipping: {details.Info?.shipping}
                        </Text>
                        <Text size="14px" c={"#70706E"} fw={"500"}>
                          Payment Method: {details.Info?.paymentMethod}
                        </Text>
                        <Text size="14px" c={"#70706E"} fw={"500"}>
                          Status: {details.Info?.status}
                        </Text>
                      </>
                    )}

                    {details.Info?.name === "Deliver to" && (
                      <>
                        <Text size="14px" c={"#70706E"} fw={"500"}>
                          {details.Info?.address}
                        </Text>
                      </>
                    )}
                  </Flex>
                </Flex>
                <Button bg={"#003F62"} h={30} radius={8}>
                  <Text size="14px" c="white">
                    {details.button}
                  </Text>
                </Button>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
        <Grid>
          <Grid.Col span={4}>
            <Card withBorder p={10} h={"150px"}>
              <Text size="16px" fw={"700"}>
                Payment Info
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={8}>
            <Text size="16px" fw={"700"}>
              Notes
            </Text>
            <Textarea
              mt={10}
              placeholder="notes"
              styles={{
                input: {
                  height: 124,
                },
              }}
            />
          </Grid.Col>
        </Grid>
      </Card>
      <Card style={{ gap: 30 }} radius={8}>
        <CustomTable data={ORDER_PRODUCTS} />
        <Flex direction={"column"} align={"end"} gap={15}>
          {Account.map((account) => (
            <Flex
              gap={20}
              w={200}
              justify={"space-between"}
              align={"center"}
              key={account.name}
            >
              <Text>{account.name}</Text>
              <Text>₹{account.amount}</Text>
            </Flex>
          ))}
          <Flex w={200} justify={"space-between"} align={"center"}>
            <Text size="24px" fw={"600"}>
              Total
            </Text>
            <Text size="24px" fw={"600"}>
              ₹{(totalSum + percentageValue).toFixed(2)}
            </Text>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};

export default ViewDetails;
