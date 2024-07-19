/* eslint-disable @next/next/no-img-element */
import { ProductCard } from "@/Components/Cards/ProductCard";
import MainHeader from "@/Components/Header/ProductHeader";
import { Flex, Pagination, SimpleGrid } from "@mantine/core";

const Products = () => {
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
      <Pagination total={10} />
    </Flex>
  );
};

export default Products;
