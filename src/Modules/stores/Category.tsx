"use client";
import { API_ENDPOINT } from "@/API/api/endpoints";
import useGetAllStoreQuery from "@/API/data/dashboard/stores/use-get-my-stores.query";
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
  type: "modal" | "page";
}

const AddACategory = ({ type }: Props) => {
  let LabelStyle = {
    color: "#232321",
    fontWeight: "700",
    padding: "0px 0px 7px 0px",
  };

  let InputStyle = {
    borderColor: "#232321",
  };

  const { data } = useSession();

  const {
    data: stores,
    isSuccess,
    isLoading,
    // @ts-ignore
  } = useGetAllStoreQuery({ id: data?.userId, enable: true });

  // STATES
  const [STORES, setSTORES] = useState<
    {
      value: string;
      label: string;
    }[]
  >([]);

  useEffect(() => {
    let restructuredData = stores?.stores?.reduce(
      (
        acc: {
          value: string;
          label: string;
        }[],
        item: any
      ) => {
        acc.push({
          value: `${item?.id}`,
          label: item?.name,
        });
        return acc;
      },
      []
    );

    setSTORES(restructuredData);
  }, [stores]);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      cat_name: "",
      store_id: "",
    },

    validate: {
      cat_name: (value) =>
        value.length === 0 ? `Category Name is required` : null,
      store_id: (value) =>
        value.length === 0 ? `Store Name is required` : null,
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: any) => {
      const formData = new FormData();
      formData.append("cat_name", values.cat_name);
      const response = await axios.post(
        // @ts-ignore
        `${API_ENDPOINT.PRODUCTS}/${values?.store_id}/categories`,
        formData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    },
    onError: (error) => {
      notifications.show({
        title: "Category",
        message: error.message || "Creating category failed",
        color: "green",
      });
    },
    onSuccess: (data) => {
      notifications.show({
        title: "Category",
        message: data?.message || "Category created successfully",
        color: "green",
      });
      form.reset();
    },
  });

  const handleSubmitForm2 = (values: any) => {
    mutation.mutate(values);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmitForm2)}>
      <Flex
        bg={"#ffffff"}
        className={`${type === "modal" ? "h-fit" : "h-screen"}`}
        style={{ borderRadius: 10 }}
        direction={"column"}
        px={20}
        pt={type === "modal" ? 10 : 100}
      >
        <Flex gap={20} direction={"column"}>
          <TextInput
            w={type === "modal" ? "100%" : "50%"}
            label="Category Name"
            placeholder="Input placeholder"
            styles={{
              label: LabelStyle,
              input: InputStyle,
            }}
            withAsterisk
            key={form.key("cat_name")}
            {...form.getInputProps("cat_name")}
          />
          <Select
            w={type === "modal" ? "100%" : "50%"}
            label="Select Store"
            placeholder="Pick value"
            styles={{
              label: LabelStyle,
              input: InputStyle,
              dropdown: {
                color: "#000000",
              },
            }}
            data={STORES}
            key={form.key("store_id")}
            {...form.getInputProps("store_id")}
          />
          <Group w={"50%"} justify="start" mt={0}>
            <Button
              loading={mutation.isPending}
              type="submit"
              radius={6}
              size={"md"}
              bg={"#232321"}
            >
              <Text size="14px" fw={500}>
                CREATE
              </Text>
            </Button>
          </Group>
        </Flex>
      </Flex>
    </form>
  );
};

export default AddACategory;
