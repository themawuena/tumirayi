"use client";
import useGetAllStoreQuery from "@/API/data/dashboard/stores/use-get-my-stores.query";
import { StoresCard } from "@/Components/Cards/StoresCard";
import MainHeader from "@/Components/Header/MainHeader2";
import { Flex, Loader, Pagination, SimpleGrid } from "@mantine/core";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Stores = () => {
  const { data } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const {
    data: stores,
    isSuccess,
    isLoading,
    // @ts-ignore
  } = useGetAllStoreQuery({ id: data?.userId, enable: true });

  // STATES
  const [STORES, setSTORES] = useState<
    {
      address: string;
      description: string;
      id: number;
      image: string;
      name: string;
      type: string;
    }[]
  >([]);

  useEffect(() => {
    let restructuredData = stores?.stores?.reduce(
      (
        acc: {
          address: string;
          description: string;
          id: number;
          image: string;
          name: string;
          type: string;
        }[],
        item: any
      ) => {
        acc.push({
          id: item?.id,
          address: item?.address,
          description: item?.description,
          image: "https://tumi.mawuena.com/storage/" + item?.image,
          name: item?.name,
          type: item?.type,
        });

        return acc;
      },
      []
    );

    setSTORES(restructuredData);
  }, [stores]);

  const handleHavaigation = () => {
    router.push(`${pathname}/add`);
  };

  return (
    <Flex direction={"column"} gap={20} pt={40}>
      <MainHeader
        title="My Stores"
        showButton={true}
        buttonText="ADD NEW STORE"
        buttFunction={() => handleHavaigation()}
      />
      {isLoading && (
        <Flex className="h-screen" align={"center"} justify={"center"}>
          <Loader color="blue" />
        </Flex>
      )}
      <SimpleGrid cols={3}>
        {STORES?.map((store) => {
          return <StoresCard key={store?.id} store={store} />;
        })}
      </SimpleGrid>
      {stores?.stores?.length >= 10 && <Pagination size={"sm"} total={10} />}
    </Flex>
  );
};

export default Stores;
