"use client";
import MainHeader from "@/Components/Header/MainHeader";
import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Group,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { IconArrowRight, IconDownload, IconPhoto } from "@tabler/icons-react";

const AddAStore = () => {
  let LabelStyle = {
    color: "#232321",
    fontWeight: "700",
    padding: "6px 0px",
  };

  let InputStyle = {
    borderColor: "#232321",
  };

  return (
    <Grid gutter={50} bg={"#ffffff"} h={"100%"} px={20}>
      <Grid.Col span={7}>
        <Flex gap={20} direction={"column"}>
          <TextInput
            label="Store Name"
            placeholder="Input placeholder"
            styles={{
              label: LabelStyle,
              input: InputStyle,
            }}
          />
          <Textarea
            label="Store Description"
            placeholder="Input placeholder"
            styles={{
              label: LabelStyle,
              input: {
                height: 150,
                ...InputStyle,
              },
            }}
          />
          <TextInput
            label="Type/Category"
            placeholder="Input placeholder"
            styles={{
              label: LabelStyle,
              input: InputStyle,
            }}
          />
          <TextInput
            label="Store Address"
            placeholder="Input placeholder"
            styles={{
              label: LabelStyle,
              input: InputStyle,
            }}
          />
        </Flex>
      </Grid.Col>
      <Grid.Col span={5}>
        <Flex gap={8} direction={"column"}>
          <Box
            h={365}
            style={{ borderRadius: 10, borderWidth: 7, borderColor: "#fafafa" }}
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
              <Flex
                direction={"column"}
                gap={1}
                justify="center"
                align="center"
              >
                <IconPhoto stroke={1} size={50} color="#003F62" />
                <Text c={"#70706E"}>
                  Drop your imager here, or browse
                  <Text ta={"center"} c={"#70706E"}>
                    Jpeg, png are allowed
                  </Text>
                </Text>
              </Flex>
            </Group>
          </Flex>
          {/* Buttons */}
          <Group justify="center" mt={10}>
            <Button radius={6} size={"md"} bg={"#232321"}>
              <Text size="14px" fw={500}>
                UPDATE
              </Text>
            </Button>
            <Button radius={6} size={"md"} bg={"#003F62"}>
              <Text size="14px" fw={500}>
                DELETE
              </Text>
            </Button>
            <Button radius={6} size={"md"} variant="default">
              <Text size="14px" fw={500}>
                CANCEL
              </Text>
            </Button>
          </Group>
        </Flex>
      </Grid.Col>
    </Grid>
  );
};

export default AddAStore;
