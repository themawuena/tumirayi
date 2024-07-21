/* eslint-disable @next/next/no-img-element */
import { ProductCard } from "@/Components/Cards/ProductCard";
import MainHeader from "@/Components/Header/ProductHeader";
import { Flex, Pagination, SimpleGrid } from "@mantine/core";

interface Props {
  items: {}[]
}

const Products = ({items}:Props) => {
  return (
    <Flex direction={"column"} gap={20}>
      <MainHeader title="Products" section="Product" />
      <SimpleGrid cols={3}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </SimpleGrid>
      <Pagination size={"sm"} total={10} />
    </Flex>
  );
};

export default Products;
