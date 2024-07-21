"use client";
import { StoresCard } from "@/Components/Cards/StoresCard";
import MainHeader from "@/Components/Header/MainHeader2";
import { Flex, Pagination, SimpleGrid } from "@mantine/core";

const Stores = () => {
  return (
    <Flex direction={"column"} gap={20} pt={40}>
      <MainHeader
        title="My Stores"
        showButton={true}
        buttonText="ADD NEW STORE"
        buttFunction={() => console.log("Mani")}
      />
      <SimpleGrid cols={3}>
        <StoresCard />
        <StoresCard />
        <StoresCard />
        <StoresCard />
        <StoresCard />
        <StoresCard />
      </SimpleGrid>
      <Pagination size={"sm"} total={10} />
    </Flex>
  );
};

export default Stores;
