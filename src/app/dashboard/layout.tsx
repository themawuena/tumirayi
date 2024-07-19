"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import SideBar from "@/Components/SideBar/Menu";
import { Box, Flex, Grid } from "@mantine/core";

const Layout = ({ children }: { children: any }) => {
  const session = useSession();

  if (!session.data?.user) {
    redirect("/");
  }

  return (
    <Grid gutter={0} style={{ display: "flex", flexDirection: "row" }}>
      <Grid.Col span={2.1} className="bg-white h-screen">
        <SideBar menuHeight={""} menuOverflow={""} />
      </Grid.Col>
      <Grid.Col span={9.9} className="bg-[#FAFAFA] h-screen px-10 py-5">
        {children}
      </Grid.Col>
    </Grid>
  );
};

export default Layout;
