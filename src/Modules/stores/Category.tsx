"use client";
import {
  Button,
  Flex,
  Group,
  Select,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";

const AddACategory = () => {
  let LabelStyle = {
    color: "#232321",
    fontWeight: "700",
    padding: "0px 0px 7px 0px",
  };

  let InputStyle = {
    borderColor: "#232321",
  };

  return (
    <Flex bg={"#ffffff"} className="h-screen" style={{borderRadius: 10}} direction={"column"} px={20} pt={100}>
      <Flex gap={20} direction={"column"}>
        <TextInput
          w={"50%"}
          label="Category Name"
          placeholder="Input placeholder"
          styles={{
            label: LabelStyle,
            input: InputStyle,
          }}
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
          data={[
            "Store A",
            "Store B",
            "Store C",
            "Store D",
            "Store E",
            "Store F",
          ]}
        />
        <Group w={"50%"} justify="start" mt={0}>
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
    </Flex>
  );
};

export default AddACategory;
