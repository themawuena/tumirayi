import { Flex, Indicator, Text } from "@mantine/core";
import { IconBell } from "@tabler/icons-react";
import React from "react";
import { UserMenu } from "./Components/MyMenu";

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
        <Indicator label={9} color="#EA5455" inline size={15}>
          <IconBell stroke={2} color="#4B465C" />
        </Indicator>
        <UserMenu />
      </Flex>
    </Flex>
  );
};

export default MainHeader;
