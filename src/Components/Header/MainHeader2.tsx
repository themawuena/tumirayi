import { Avatar, Box, Button, Flex, Indicator, Text } from "@mantine/core";
import { IconCirclePlus } from "@tabler/icons-react";
import React from "react";

interface Props {
  title: string;
  section?: "Home" | "Product" | "Admin";
  showButton?: boolean;
  buttonText?: string;
  buttFunction?: () => void;
}
const MainHeader = ({
  title,
  section = "Home",
  showButton = false,
  buttonText = "Add",
  buttFunction = () => console.log(buttonText),
}: Props) => {
  return (
    <Flex
      mih={50}
      //   bg="#fff"
      gap="md"
      justify="space-between"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <Flex direction={"column"} gap={0}>
        <Text className="text-[24px] text-[#23272E] font-bold ">{title}</Text>
      </Flex>
      <Flex direction={"row"} gap={15} align={"center"}>
        {showButton && (
          <Button
            onClick={buttFunction}
            leftSection={<IconCirclePlus size={17} />}
            className={`gap-5`}
            size="md"
            bg={"#232321"}
            miw={200}
            radius={10}
          >
            <Text size="14px" fw={"500"}>
              {buttonText}
            </Text>
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default MainHeader;
