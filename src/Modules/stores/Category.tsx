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

const AddACategory = () => {
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
      store_id: ""
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
        `${API_ENDPOINT.PRODUCTS}/${data?.userId}/categories`,
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
        title: "Category created successfully",
        message: error.message || "Category failed",
        color: "green",
      });
    },
    onSuccess: (data) => {
      notifications.show({
        title: "Category created successfully",
        message: data?.message || "Category failed",
        color: "green",
      });
      // router.push("/dashboard/stores");
    },
  });

  const handleSubmitForm2 = (values: any) => {
    mutation.mutate(values);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmitForm2)}>
      <Flex
        bg={"#ffffff"}
        className="h-screen"
        style={{ borderRadius: 10 }}
        direction={"column"}
        px={20}
        pt={100}
      >
        <Flex gap={20} direction={"column"}>
          <TextInput
            w={"50%"}
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
            w={"50%"}
            label="Select Store"
            placeholder="Pick value"
            styles={{
              label: LabelStyle,
              input: InputStyle,
              dropdown: {
                color: "#000000",
              },
            }}
            // value={form.getValues('cat_name', value)}
            // onChange={(_value, option) => setValue(option.value)}
            data={STORES}
            key={form.key("store_id")}
            {...form.getInputProps("store_id")}
          />
          <Group w={"50%"} justify="start" mt={0}>
            <Button type="submit" radius={6} size={"md"} bg={"#232321"}>
              <Text size="14px" fw={500}>
                CREATE
              </Text>
            </Button>
            {/* <Button radius={6} size={"md"} bg={"#003F62"}>
            <Text size="14px" fw={500}>
              DELETE
            </Text>
          </Button>
          <Button radius={6} size={"md"} variant="default">
            <Text size="14px" fw={500}>
              CANCEL
            </Text>
          </Button> */}
          </Group>
        </Flex>
      </Flex>
    </form>
  );
};

export default AddACategory;
