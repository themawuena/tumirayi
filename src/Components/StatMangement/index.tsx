import React from "react";
import Lottie from "lottie-react";
import EmptyData from "../../../public/animations/emptycart.json";
import { Stack, Text } from "@mantine/core";

interface Props {
  message?: string;
}
export const EmptyState = ({ message = "No Data" }: Props) => {
  return (
    <Stack flex={1} w={"100%"} align="center">
      <Lottie
        style={{
          width: 200,
        }}
        animationData={EmptyData}
      />
      <Text mt={-30} c={"black"}>
        {message}
      </Text>
    </Stack>
  );
};
