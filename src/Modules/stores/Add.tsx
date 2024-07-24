"use client";
import {
  Box,
  Button,
  Flex,
  Grid,
  Group,
  Image,
  Progress,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconCheck } from "@tabler/icons-react";
import CustomFileInput from "./Components/CustomFileInput";
import { useState } from "react";
import useCreateStoreMutation from "@/API/data/dashboard/stores/use-create-store.mutations";
import { notifications } from "@mantine/notifications";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "@/API/api/endpoints";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AddAStore = () => {
  const { data } = useSession();

  const LabelStyle = {
    color: "#232321",
    fontWeight: "700",
    padding: "6px 0px",
  };

  const InputStyle = {
    borderColor: "#232321",
  };

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      store: "",
      description: "",
      type: "",
      address: "",
    },

    validate: {
      store: (value) => (value.length === 0 ? `Store Name is required` : null),
      description: (value) =>
        value.length === 0 ? `Store description is required` : null,
      type: (value) => (value.length === 0 ? `Store type is required` : null),
      address: (value) =>
        value.length === 0 ? `Store address is required` : null,
    },
  });

  //• HOOKS
  const CREATE_STORE = useCreateStoreMutation();
  const router = useRouter();

  //* STATES
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);

  const convertToBase64 = (file: File | null): Promise<string | undefined> => {
    return new Promise((resolve, reject) => {
      if (file === null) {
        resolve(undefined);
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        if (typeof base64String === "string") {
          resolve(base64String);
        } else {
          resolve(undefined);
        }
      };
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleFileSelect = async (file: File) => {
    setSelectedFile(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    try {
      const base64Image = await convertToBase64(file);
      setImage(base64Image || null);
    } catch (error) {
      console.error("Error converting file to base64:", error);
    }
  };

  const mutation = useMutation({
    mutationFn: async (values: any) => {
      const formData = new FormData();
      formData.append("name", values.store);
      formData.append("description", values.description);
      formData.append("type", values.type);
      formData.append("address", values.address);
      if (selectedFile) {
        formData.append("image", selectedFile);
      }

      const response = await axios.post(
        // @ts-ignore
        `${API_ENDPOINT.CREATE_STORE}/${data?.userId}/stores`,
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
      notifications.show({
        title: "Store creation failed",
        message: error.message || "Creating store failed",
        color: "red",
      });
    },
    onSuccess: (data) => {
      notifications.show({
        title: "Store created successfully",
        message: data?.message || "Sign-in failed",
        color: "green",
      });
      router.push("/dashboard/stores");
    },
  });

  const handleSubmitForm2 = (values: any) => {
    mutation.mutate(values);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmitForm2)}>
      <Grid gutter={50} bg={"#ffffff"} style={{ borderRadius: 10 }} px={20}>
        <Grid.Col span={7}>
          <Flex gap={20} direction={"column"}>
            <TextInput
              label="Store Name"
              placeholder="eg: The Grace Store"
              styles={{
                label: LabelStyle,
                input: InputStyle,
              }}
              withAsterisk
              key={form.key("store")}
              {...form.getInputProps("store")}
            />
            <Textarea
              label="Store Description"
              placeholder="eg: We are the best in the industry"
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
            <TextInput
              label="Type/Category"
              placeholder="eg: grocery"
              styles={{
                label: LabelStyle,
                input: InputStyle,
              }}
              withAsterisk
              key={form.key("type")}
              {...form.getInputProps("type")}
            />
            <TextInput
              label="Store Address"
              placeholder="Input placeholder"
              styles={{
                label: LabelStyle,
                input: InputStyle,
              }}
              withAsterisk
              key={form.key("address")}
              {...form.getInputProps("address")}
            />
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
              <Image w={"100%"} h={"100%"} src={previewUrl} alt="logo" />
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
            {/* PHOTOS */}
            <Flex
              mt={10}
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
                ></Box>
                <Flex
                  gap={10}
                  justify={"flex-start"}
                  align={"flex-start"}
                  direction={"column"}
                >
                  <Text c={"dark"} ta={"center"}>
                    Photo.png
                  </Text>
                  <Progress bg={"#4A69E2"} w={300} value={50} color="#003F62" />
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
            {/* Buttons */}
            <Group justify="center" mt={10}>
              <Button
                loading={CREATE_STORE.isPending}
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
        </Grid.Col>
      </Grid>
    </form>
  );
};

export default AddAStore;
