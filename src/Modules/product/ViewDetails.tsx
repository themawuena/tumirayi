"use client";
import {
  Box,
  Button,
  Flex,
  Grid,
  Group,
  Progress,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { IconCheck, IconPhoto } from "@tabler/icons-react";

interface Props {
  items: any;
  params: { id: string };
}

const ViewDetails = ({ items, params }: Props) => {
  let LabelStyle = {
    color: "#232321",
    fontWeight: "700",
    padding: "6px 0px",
  };

  let InputStyle = {
    borderColor: "#232321",
  };

  const Images = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];

  return (
    <Grid gutter={50} bg={"#ffffff"}  px={20} style={{borderRadius: 10}}>
      <Grid.Col span={7}>
        <Flex gap={20} direction={"column"}>
          <TextInput
            label="Product Name"
            placeholder="Jordan 2"
            styles={{
              label: LabelStyle,
              input: InputStyle,
            }}
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
          />
          <TextInput
            label="Category"
            placeholder="Sneakers"
            styles={{
              label: LabelStyle,
              input: InputStyle,
            }}
          />
          <TextInput
            label="Brand Name"
            placeholder="Nike"
            styles={{
              label: LabelStyle,
              input: InputStyle,
            }}
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
            />
            <TextInput
              w={"45%"}
              label="Stock Quantity"
              placeholder="100"
              styles={{
                label: LabelStyle,
                input: InputStyle,
              }}
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
            />
            <TextInput
              w={"45%"}
              label="Sale Price"
              placeholder="R100"
              styles={{
                label: LabelStyle,
                input: InputStyle,
              }}
            />
          </Flex>
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
          {/* Images */}
          <Flex direction={"column"} gap={20}>
            {Images.map((image) => (
              <Flex
                key={image.id}
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
                <Flex align={"center"} justify={"center"} style={{ borderRadius: 20 }} w={20} h={20} bg={"#003F62"}>
                  <IconCheck stroke={3} size={15} color="white" />
                </Flex>
              </Flex>
            ))}
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

export default ViewDetails;
