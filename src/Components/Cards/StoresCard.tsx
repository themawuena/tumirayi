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

  const handleCategoryStore = () => {
    router.push(`${pathName}/category/view/${store.id}`);
  };

  return (
    <Card bg={"#FAFAFA"} shadow="0" p="xs" radius="md" withBorder>
      <Card.Section p={"md"}>
        <Image src={store.image} alt="Norway" radius={10} fit="cover" h={180} />
      </Card.Section>
      <Flex direction={"column"} mb="xs" gap={10}>
        <Text fw={"500"} size={"16x"} c={"#232321"}>
          {store.name}
        </Text>
        <Flex direction={"column"}>
          <Text fw={500} c="#232321">
            Description
          </Text>
          <Text size="sm" fw={"400"} c="#797978">
            {store.description}
          </Text>
        </Flex>
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
        <Divider size="xs" />
        <Text
          style={{
            cursor: "pointer",
          }}
          onClick={() => handleCategoryStore()}
          ta={"end"}
          py={6}
          size="14px"
          fw={600}
          c={"#646464"}
        >
          Products Categories
        </Text>
      </Card>
    </Card>
  );
}
