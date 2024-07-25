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
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

interface Props {
  store: {
    address: string;
    description: string;
    id: number;
    image: string;
    name: string;
    type: string;
  };
}
export function StoresCard({ store }: Props) {
  const router = useRouter();
  const pathName = usePathname();

  const handleViewProducts = () => {
    router.push(`${pathName}/products/${store.id}`);
  };

  const handleViewStore = () => {
    router.push(`${pathName}/view/${store.id}`);
  };

  return (
    <Card bg={"#FAFAFA"} shadow="0" p="xs" radius="md">
      <Flex direction={"row"} gap={5}>
        <Box w={"30%"}>
          <Image
            src={store.image}
            h={100}
            alt="Norway"
            radius={10}
            fit="cover"
          />
        </Box>
        <Flex pl={"sm"} w={"70%"} justify={"space-between"}>
          <Flex direction={"column"} gap={10} justify={"space-between"}>
            <Box>
              <Text fw={"600"} size={"16x"} c={"#232321"}>
                {store.name}
              </Text>
              <Text fw={"600"} size={"14px"} c={"#646464"}>
                {store.type}
              </Text>
            </Box>
          </Flex>
          <></>
        </Flex>
      </Flex>

      <Flex direction={"column"} mt="md" mb="xs" gap={0}>
        <Text fw={600} c="#232321">
          Description
        </Text>
        <Text size="sm" fw={"400"} c="#797978">
          {store.description}
        </Text>
      </Flex>

      <Card shadow="0" withBorder bg="#FAFAFA" mt="sm" mb="xs" p={5} px={10}>
        <Text
          style={{
            cursor: "pointer",
          }}
          ta={"end"}
          py={6}
          size="14px"
          fw={600}
          c={"#646464"}
          onClick={() => handleViewStore()}
        >
          Edit Store
        </Text>
        <Divider size="xs" />
        <Text
          style={{
            cursor: "pointer",
          }}
          onClick={() => handleViewProducts()}
          ta={"end"}
          py={6}
          size="14px"
          fw={600}
          c={"#646464"}
        >
          Store Products
        </Text>
      </Card>
    </Card>
  );
}
