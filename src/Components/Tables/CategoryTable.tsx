import {
  Button,
  Flex,
  Group,
  Modal,
  Select,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import dayjs from "dayjs";
import { useDisclosure } from "@mantine/hooks";
import { InputStyle, LabelStyle } from "@/Modules/stores/Category";
import { useForm } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { notifications } from "@mantine/notifications";
import useGetAllStoreQuery from "@/API/data/dashboard/stores/use-get-my-stores.query";
import { useSession } from "next-auth/react";
interface Props {
  data: {
    name: string;
    createdDate: string;
    id: string;
    store_id: string;
  }[];
}

function CustomTable({ data }: Props) {
  const [opened, { open, close }] = useDisclosure(false);
  const { data: user } = useSession();

  const {
    data: stores,
    isSuccess,
    isLoading,
    // @ts-ignore
  } = useGetAllStoreQuery({ id: user?.userId, enable: true });

  // STATES
  const [STORES, setSTORES] = useState<
    {
      value: string;
      label: string;
    }[]
  >([]);

  const [selectedCate, setSelectedCate] = useState<{
    cat_name: string;
    store_id: string;
  }>({ cat_name: "", store_id: "" });

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

  const editCate = (element: any) => {
    setSelectedCate({ cat_name: element?.name, store_id: element.store_id });
    open();
  };

  useEffect(() => {
    if (selectedCate.cat_name === "" && selectedCate.store_id === "") {
      return;
    }
    form.setValues({
      cat_name: selectedCate.cat_name,
      store_id: String(selectedCate.store_id),
    });
  }, [selectedCate]);


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

  let type = "modal";

  const rows = data?.map((element) => {
    return (
      <>
        <Table.Tr key={element?.id}>
          <Table.Td>{element?.name}</Table.Td>
          <Table.Td>
            {dayjs(element?.createdDate).format("D MMMM YYYY")}
          </Table.Td>
          <Flex align={"center"} gap={10} justify={"center"}>
            <IconEdit
              onClick={() => editCate(element)}
              size={20}
              color="#8B909A"
              stroke={1.5}
            />
            <IconTrash size={20} color="#8B909A" stroke={1.5} />
          </Flex>
        </Table.Tr>
        <Modal opened={opened} onClose={close} title="Edit Category">
          <form onSubmit={form.onSubmit(handleSubmitForm2)}>
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
                    EDIT CATEGORIES
                  </Text>
                </Button>
              </Group>
            </Flex>
          </form>
        </Modal>
      </>
    );
  });

  return (
    <Table
      bg={"white"}
      styles={{
        th: {
          color: "#8B909A",
          fontSize: "13px",
          fontWeight: "600",
        },
        td: {
          color: "#23272E",
          fontSize: "12px",
          fontWeight: "400",
          padding: "10px",
        },
      }}
      style={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Created</Table.Th>
          <Table.Th>Action</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

export default CustomTable;
