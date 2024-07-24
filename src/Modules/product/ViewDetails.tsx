"use client";
import useGetAProductsQuery from "@/API/data/dashboard/stores/use-get-a-my-products.query";
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
import { IconCheck, IconPhoto } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import axios from "axios";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import useGetAllCategoriesQuery from "@/API/data/dashboard/stores/use-get-my-category.query";
import CustomFileInput from "./Components/CustomFileInput";
import { API_ENDPOINT } from "@/API/api/endpoints";

interface Props {
  items: any;
  params: { id: string; product_id: any };
}

interface FilePreview {
  name: string;
  url: string;
  isOld?: boolean; // To indicate whether the file is old or new
}

const formatOldFiles = (files: string[]): FilePreview[] => {
  return files.map((file, index) => ({
    name: `old-file-${index}`,
    url: `https://tumi.mawuena.com/${file}`,
    isOld: true,
  }));
};

const ViewDetails = ({ items, params }: Props) => {
  const router = useRouter();

  let LabelStyle = {
    color: "#232321",
    fontWeight: "700",
    padding: "6px 0px",
  };

  let InputStyle = {
    borderColor: "#232321",
  };

  const {
    data: product,
    isSuccess,
    isLoading,
    // @ts-ignore
  } = useGetAProductsQuery({
    id: params?.id,
    product_id: params?.product_id,
    enable: true,
  });
  //  API
  const {
    data: categories,
    // @ts-ignore
  } = useGetAllCategoriesQuery({ id: params?.id, enable: true });

  // STATES
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [filePreviews, setFilePreviews] = useState<FilePreview[]>([]);
  const [PRODUCT, setPRODUCT] = useState<
    {
      product_name: string;
      description: string;
      SKU: string;
      regular_price: string;
      sale_price: string;
      quantity: string;
      brand_name: string;
      category: string;
    }[]
  >([]);

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

  const handleFileSelect = (files: File[]) => {
    const newFiles = [...selectedFiles, ...files];
    setSelectedFiles(newFiles);
    const newPreviews = files.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setFilePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const handleFileRemove = (fileName: string) => {
    const updatedPreviews = filePreviews.filter(
      (file) => file.name !== fileName
    );
    setFilePreviews(updatedPreviews);

    if (!fileName.startsWith("old-file")) {
      const updatedFiles = selectedFiles.filter(
        (file) => file.name !== fileName
      );
      setSelectedFiles(updatedFiles);
    }
  };

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
      product_name: (value: string | any[]) =>
        value.length === 0 ? `Product Name is required` : null,
      description: (value: string | any[]) =>
        value.length === 0 ? `Product description is required` : null,
      SKU: (value: string | any[]) =>
        value.length === 0 ? `SKU is required` : null,
      regular_price: (value: string | any[]) =>
        value.length === 0 ? `Regular Price of product is required` : null,
      sale_price: (value: string | any[]) =>
        value.length === 0 ? `Sale Price of product is required` : null,
      quantity: (value: string | any[]) =>
        value.length === 0 ? `Quantity of product is required` : null,
      brand_name: (value: string | any[]) =>
        value.length === 0 ? `Brand of product is required` : null,
      category: (value: string | any[]) =>
        value.length === 0 ? `Product category is required` : null,
    },
  });

  let PROD = product?.product;
  let PROD_IMAGES = product?.images;
  useEffect(() => {
    if (PROD) {
      form.setValues({
        product_name: PROD.product_name || "",
        description: PROD.description || "",
        SKU: PROD.SKU || "",
        regular_price: PROD.regular_price || "",
        sale_price: PROD.sale_price || "",
        quantity: PROD.quantity || "",
        brand_name: PROD.brand_name || "",
        category: `${PROD.category_id}` || "",
      });
    }
  }, [PROD]);

  useEffect(() => {
    if (PROD_IMAGES) {
      let Images: any = formatOldFiles(PROD_IMAGES);
      setSelectedFiles(Images);
      setFilePreviews(Images);
    }
  }, [PROD_IMAGES, product]);


  const mutation = useMutation({
    mutationFn: async (values: any) => {
      const formData = new FormData();
      formData.append("category_id", values.category);
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

      const response = await axios.put(
        // @ts-ignore
        `${API_ENDPOINT.ADDPRODUCT}/${params?.id}/products/${params.product_id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    },

    onError: (error) => {
      console.log(error, "error");

      notifications.show({
        title: "Updating a product failed",
        message: error.message || "Adding a product failed",
        color: "red",
      });
    },
    onSuccess: (data) => {
      notifications.show({
        title: "Updated successfully",
        message: data?.message || "Product added successfully",
        color: "green",
      });
      router.back();
    },
  });

  const handleSubmitForm2 = (values: any) => {
    mutation.mutate(values);
  };

  console.log(form.getValues());
  
  console.log(CATEGORIES, PROD?.category_id);
  

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
              placeholder="Sneakers"
              styles={{
                label: LabelStyle,
                input: InputStyle,
                dropdown: {
                  color: "#000000",
                },
              }}
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
            >
              <Image w={"100%"} h={"100%"} src={filePreviews?.[0]?.url} alt="logo" />
            </Box>
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
                  UPDATE
                </Text>
              </Button>
              <Button radius={6} size={"md"} bg={"#003F62"}>
                <Text size="14px" fw={500}>
                  DELETE
                </Text>
              </Button>
              <Button
                onClick={() => router.back()}
                radius={6}
                size={"md"}
                variant="default"
              >
                <Text size="14px" fw={500}>
                  CANCEL
                </Text>
              </Button>
            </Group>
          </Flex>
        </Grid.Col>
      </Grid>
    </form>
  );
};

export default ViewDetails;
