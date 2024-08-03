"use client";
import { API_ENDPOINT } from "@/API/api/endpoints";
import useGetAllProductsQuery from "@/API/data/dashboard/stores/use-get-my-products.query";
import useGetAllStoreQuery from "@/API/data/dashboard/stores/use-get-my-stores.query";
import { ProductCard } from "@/Components/Cards/ProductCard";
import MainHeader from "@/Components/Header/ProductHeader";
import { EmptyState } from "@/Components/StatMangement";
import { Flex, Loader, Pagination, SimpleGrid } from "@mantine/core";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface Props {
  items: {}[];
  param: any;
}

const Products = ({ items, param }: Props) => {
  const {
    data: products,
    isSuccess,
    isLoading,
    // @ts-ignore
  } = useGetAllProductsQuery({ id: param?.id, enable: true });

  // STATES
  const [PRODUCTS, setPRODUCTS] = useState<
    {
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
    }[]
  >([]);

  useEffect(() => {
    let restructuredData = products?.products?.reduce(
      (
        acc: {
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
        }[],
        item: any
      ) => {
        console.log(item);

        acc.push({
          id: item?.id,
          product_name: item?.product_name,
          description: item?.description,
          image:
            "https://tumi.mawuena.com/storage/" + item?.images?.[0].image_path,
          SKU: item?.SKU,
          regular_price: item?.regular_price,
          sale_price: item?.sale_price,
          quantity: item?.quantity,
          brand_name: item?.brand_name,
          category: item?.category_id,
        });

        return acc;
      },
      []
    );

    setPRODUCTS(restructuredData);
  }, [products]);

  return (
    <Flex direction={"column"} gap={20}>
      <MainHeader storeId={param?.id} title="Products" section="Product" />
      {isLoading && (
        <Flex className="h-screen" align={"center"} justify={"center"}>
          <Loader color="blue" />
        </Flex>
      )}
      <Flex>
        {PRODUCTS?.length === 0 && <EmptyState message="No Products Found" />}
      </Flex>
      {PRODUCTS?.length == 0 ||
        (PRODUCTS !== undefined && (
          <SimpleGrid cols={3}>
            {PRODUCTS?.map((product) => {
              return (
                <ProductCard
                  product={product}
                  store={param?.id}
                  key={product.id}
                />
              );
            })}
          </SimpleGrid>
        ))}
      {PRODUCTS?.length >= 10 && <Pagination size={"sm"} total={10} />}
    </Flex>
  );
};

export default Products;
