/* eslint-disable @next/next/no-img-element */
import { Flex } from "@mantine/core";
import MainHeader from "@/Components/Header/MainHeader3";

const ManageAdmins = () => {
  return (
    <Flex direction={"column"} gap={20}>
      <MainHeader title="Manage Admins" />
    </Flex>
  );
};

export default ManageAdmins;
