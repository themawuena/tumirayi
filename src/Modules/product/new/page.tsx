"use client";
import { API_ENDPOINT } from "@/API/api/endpoints";
import MainHeader from "@/Components/Header/MainHeader3";
import {
  Box,
  Button,
  Flex,
  Grid,
  Group,
  Image,
  Progress,
  Select,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconPhoto } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CustomFileInput from "../Components/CustomFileInput";
import { useSession } from "next-auth/react";
import useGetAllCategoriesQuery from "@/API/data/dashboard/stores/use-get-my-category.query";

export interface FilePreview {
  name: string;
  url: string;
}

const AddProducts = ({ params }: { params: { id: string } }) => {
  let LabelStyle = {
    color: "#232321",
    fontWeight: "700",
    padding: "6px 0px",
  };

  let InputStyle = {
    borderColor: "#232321",
  };

  // * HOOKS
  const router = useRouter();
  const { data } = useSession();

  //  API
  const {
    data: categories,
    isSuccess,
    isLoading,
    // @ts-ignore
  } = useGetAllCategoriesQuery({ id: params?.id, enable: true });

  // * STATES
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [filePreviews, setFilePreviews] = useState<FilePreview[]>([]);

  const handleFileSelect = (files: File[]) => {
    setSelectedFiles(files);
    const previews = files.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setFilePreviews(previews);
  };

  const [CATEGORIES, setCATEGORIES] = useState<
    {
      value: string;
      label: string;
    }[]
  >([]);

  useEffect(() => {
    let restructuredData = categories?.categories?.reduce(
      (
        acc: {
          value: string;
          label: string;
        }[],
        item: any
      ) => {
        acc.push({
          value: `${item?.id}`,
          label: item?.cat_name,
        });
        return acc;
      },
      []
    );

    setCATEGORIES(restructuredData);
  }, [categories]);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      product_name: "",
      description: "",
      SKU: "",
      regular_price: "",
      sale_price: "",
      quantity: "",
      brand_name: "",
      category: "",
    },

    validate: {
      product_name: (value) =>
        value.length === 0 ? `Product Name is required` : null,
      description: (value) =>
        value.length === 0 ? `Product description is required` : null,
      SKU: (value) => (value.length === 0 ? `SKU is required` : null),
      regular_price: (value) =>
        value.length === 0 ? `Regular Price of product is required` : null,
      sale_price: (value) =>
        value.length === 0 ? `Sale Price of product is required` : null,
      quantity: (value) =>
        value.length === 0 ? `Quantity of product is required` : null,
      brand_name: (value) =>
        value.length === 0 ? `Brand of product is required` : null,
      category: (value) =>
        value.length === 0 ? `Product category is required` : null,
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: any) => {
      const formData = new FormData();
      formData.append("category_id", values?.category);
      formData.append("product_name", values.product_name);
      formData.append("description", values.description);
      formData.append("SKU", values.SKU);
      formData.append("sale_price", values.sale_price);
      formData.append("quantity", values.quantity);
      formData.append("brand_name", values.brand_name);
      formData.append("regular_price", values.regular_price);
      selectedFiles.forEach((file) => {
        formData.append("images[]", file);
      });
      console.log("selectedFiles");

      const response = await axios.post(
        // @ts-ignore
        `${API_ENDPOINT.ADDPRODUCT}/${params?.id}/products`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      return response.data;
    },

    onError: (error) => {
      console.log(error, "error");

      notifications.show({
        title: "Creating a product failed",
        message: error.message || "Adding a product failed",
        color: "red",
      });
    },
    onSuccess: (data) => {
      notifications.show({
        title: "Product created successfully",
        message: data?.message || "Product added successfully",
        color: "green",
      });
      router.back();
    },
  });

  const handleSubmitForm2 = (values: any) => {
    mutation.mutate(values);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmitForm2)}>
      <Grid gutter={50} bg={"#ffffff"} px={20} style={{ borderRadius: 10 }}>
        <Grid.Col span={7}>
          <Flex gap={20} direction={"column"}>
            <TextInput
              label="Product Name"
              placeholder="Jordan 2"
              styles={{
                label: LabelStyle,
                input: InputStyle,
              }}
              withAsterisk
              key={form.key("product_name")}
              {...form.getInputProps("product_name")}
            />
            <Textarea
              label="Store Description"
              placeholder="We give you a  the best"
              styles={{
                label: LabelStyle,
                input: {
                  height: 150,
                  ...InputStyle,
                },
              }}
              withAsterisk
              key={form.key("description")}
              {...form.getInputProps("description")}
            />
            <Select
              label="Category"
              placeholder={
                CATEGORIES.length === 0
                  ? "No Categories found for this store"
                  : "Sneakers"
              }
              styles={{
                label: LabelStyle,
                input: InputStyle,
                dropdown: {
                  color: "#000000",
                },
              }}
              searchable
              data={CATEGORIES}
              withAsterisk
              key={form.key("category")}
              {...form.getInputProps("category")}
            />
            <TextInput
              label="Brand Name"
              placeholder="Nike"
              styles={{
                label: LabelStyle,
                input: InputStyle,
              }}
              withAsterisk
              key={form.key("brand_name")}
              {...form.getInputProps("brand_name")}
            />
            <Flex justify={"space-between"}>
              <TextInput
                w={"45%"}
                label="SKU"
                placeholder="#29S490"
                styles={{
                  label: LabelStyle,
                  input: InputStyle,
                }}
                withAsterisk
                key={form.key("SKU")}
                {...form.getInputProps("SKU")}
              />
              <TextInput
                w={"45%"}
                label="Stock Quantity"
                placeholder="100"
                styles={{
                  label: LabelStyle,
                  input: InputStyle,
                }}
                withAsterisk
                key={form.key("quantity")}
                {...form.getInputProps("quantity")}
              />
            </Flex>
            <Flex justify={"space-between"}>
              <TextInput
                w={"45%"}
                label="Regular Price"
                placeholder="R80"
                styles={{
                  label: LabelStyle,
                  input: InputStyle,
                }}
                withAsterisk
                key={form.key("regular_price")}
                {...form.getInputProps("regular_price")}
              />
              <TextInput
                w={"45%"}
                label="Sale Price"
                placeholder="R100"
                styles={{
                  label: LabelStyle,
                  input: InputStyle,
                }}
                withAsterisk
                key={form.key("sale_price")}
                {...form.getInputProps("sale_price")}
              />
            </Flex>
          </Flex>
        </Grid.Col>
        <Grid.Col span={5}>
          <Flex gap={8} direction={"column"}>
            <Box
              h={365}
              style={{
                borderRadius: 10,
                borderWidth: 7,
                borderColor: "#fafafa",
              }}
              bg={"#00000033"}
            ></Box>
            <Flex direction={"column"}>
              <Text style={LabelStyle}>Store Logo</Text>
              <Group
                style={{
                  borderWidth: 2,
                  borderStyle: "dashed",
                  borderSpacing: "10px",
                  borderColor: "#000000",
                  borderRadius: 10,
                }}
                justify="center"
                align="center"
                h={160}
                gap={0}
              >
                <CustomFileInput onFileSelect={handleFileSelect} />
              </Group>
            </Flex>
            {/* Images */}
            <Flex direction={"column"} gap={20}>
              {filePreviews?.map((image, index) => (
                <Flex
                  key={index}
                  gap={10}
                  bg={"#FAFAFA"}
                  p={10}
                  justify={"space-between"}
                  align={"center"}
                >
                  <Flex gap={10}>
                    <Box
                      style={{ borderRadius: 8 }}
                      w={50}
                      h={50}
                      bg={"#00000033"}
                    >
                      {image?.url && (
                        <Image
                          w={"100%"}
                          h={"100%"}
                          src={image.url}
                          alt={`Preview ${index}`}
                        />
                      )}
                    </Box>
                    <Flex
                      gap={10}
                      justify={"flex-start"}
                      align={"flex-start"}
                      direction={"column"}
                    >
                      <Text c={"dark"} ta={"center"}>
                        {image?.name}
                      </Text>
                      <Progress
                        bg={"#4A69E2"}
                        w={300}
                        value={100}
                        color="#003F62"
                      />
                    </Flex>
                  </Flex>
                  <Flex
                    align={"center"}
                    justify={"center"}
                    style={{ borderRadius: 20 }}
                    w={20}
                    h={20}
                    bg={"#003F62"}
                  >
                    <IconCheck stroke={3} size={15} color="white" />
                  </Flex>
                </Flex>
              ))}
            </Flex>
            {/* Buttons */}
            <Group justify="center" mt={10}>
              <Button
                loading={mutation.isPending}
                type="submit"
                radius={6}
                size={"md"}
                bg={"#232321"}
              >
                <Text size="14px" fw={500}>
                  CREATE PRODUCT
                </Text>
              </Button>
            </Group>
          </Flex>
        </Grid.Col>
      </Grid>
    </form>
  );
};

export default AddProducts;
