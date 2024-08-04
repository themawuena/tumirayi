"use client";
import {
  Card,
  Image,
  Text,
  Group,
  Box,
  Flex,
  Menu,
  Divider,
  Progress,
} from "@mantine/core";
import { IconArrowUp, IconDots, IconEdit, IconEye } from "@tabler/icons-react";
import { usePathname, useRouter } from "next/navigation";

function MenuButton({ product, store }: { product: any; store: any }) {
  const router = useRouter();
  const pathName = usePathname();

  const HandleNavigation = (store: any) => {
    router.push(`/dashboard/stores/product/view/${store}/${product.id}`);
  };

  return (
    <Menu shadow="0" position="bottom-end" width={150}>
      <Menu.Target>
        <Flex
          style={{
            borderRadius: 5,
          }}
          align={"center"}
          justify={"center"}
          bg={"#2323210D"}
          w={35}
          h={25}
        >
          <IconDots stroke={1} />
        </Flex>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          onClick={() => HandleNavigation(store)}
          leftSection={<IconEye size={14} />}
        >
          View
        </Menu.Item>
        <Menu.Item
          onClick={() => HandleNavigation(store)}
          leftSection={<IconEdit size={14} />}
        >
          Edit
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

interface Props {
  product: {
    id: number | string;
    product_name: string;
    description: string;
    SKU: string;
    regular_price: string;
    sale_price: string;
    quantity: string;
    brand_name: string;
    category: string;
    image: string;
  };
  store: string;
}

export function ProductCard({ product, store }: Props) {
  return (
    <Card shadow="sm" p="xs" radius="md" withBorder>
      <Flex direction={"row"} gap={5}>
        <Box w={"30%"} h={110}>
          <Image
            radius={10}
            src={product.image}
            style={{
              height: "100%",
              width: "100%",
            }}
            fit="fill"
            alt="Norway"
          />
        </Box>
        <Flex pl={"sm"} w={"70%"} justify={"space-between"}>
          <Flex direction={"column"} gap={10} justify={"space-between"}>
            <Box>
              <Text fw={"500"} fs={"16px"}>
                {product?.product_name}
              </Text>
              <Text fw={"600"} fs={"14px"} c={"#4E4E4C"}>
                {product.category}
              </Text>
            </Box>
            <Text fw={"800"}>R{product.regular_price}</Text>
          </Flex>
          <MenuButton product={product} store={store} />
        </Flex>
      </Flex>

      <Flex direction={"column"} mt="md" mb="xs" gap={0}>
        <Text fw={600} c="#232321">
          Summary
        </Text>
        <Text size="sm" fw={"400"} c="#5E5E5C">
          {product?.description}
        </Text>
      </Flex>

      <Card shadow="0" withBorder mt="sm" mb="xs" p={10}>
        <Flex justify={"space-between"}>
          <Text fs="14" fw={500} c={"#4E4E4C"}>
            Sales
          </Text>
          <Group>
            <IconArrowUp stroke={2} color="#FFA52F" size={18} />
            <Text fs="14" fw={500} c={"#4E4E4C"}>
              {0}
            </Text>
          </Group>
        </Flex>
        <Divider size="xs" />
        <Flex justify={"space-between"}>
          <Text fs="14" fw={500} c={"#4E4E4C"}>
            Remaining Products
          </Text>
          <Group>
            <Progress
              w={50}
              value={parseInt(product?.quantity)}
              size={"5"}
              color="yellow"
            />
            <Text fs="14" fw={500} c={"#4E4E4C"}>
              {parseInt(product?.quantity)}
            </Text>
          </Group>
        </Flex>
      </Card>
    </Card>
  );
}
