"use client";
import { API_ENDPOINT } from "@/API/api/endpoints";
import useGetAllCategoriesQuery from "@/API/data/dashboard/stores/use-get-my-category.query";
import useGetAllStoreQuery from "@/API/data/dashboard/stores/use-get-my-stores.query";
import CustomTable from "@/Components/Tables/CategoryTable";
import {
  Button,
  ComboboxItem,
  Flex,
  Group,
  Select,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface Props {
  param: { id: string };
}

const ViewCategory = ({ param }: Props) => {
  const {
    data: categories,
    isSuccess,
    isLoading,
    // @ts-ignore
  } = useGetAllCategoriesQuery({ id: param?.id, enable: true });

  // STATES
  const [CATEGORIES, setCATEGORIES] = useState<
    {
      name: string;
      createdDate: string;
      id: string;
      store_id: string;
    }[]
  >([]);

  useEffect(() => {
    let restructuredData = categories?.categories?.reduce(
      (
        acc: {
          name: string;
          createdDate: string;
          id: string;
          store_id: string;
        }[],
        item: any
      ) => {
        acc.push({
          name: item?.cat_name,
          createdDate: item?.created_at,
          id: item?.id,
          store_id: item?.store_id,
        });
        return acc;
      },
      []
    );

    setCATEGORIES(restructuredData);
  }, [categories]);

  return (
    <Flex
      bg={"white"}
      style={{ borderRadius: 10 }}
      direction={"column"}
      className="min-h-screen"
      px={20}
      pt={100}
    >
      <CustomTable data={CATEGORIES} />
    </Flex>
  );
};

export default ViewCategory;
