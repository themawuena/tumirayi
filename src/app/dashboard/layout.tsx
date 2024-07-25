"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import SideBar from "@/Components/SideBar/Menu";
import { Grid } from "@mantine/core";
import { useEffect } from "react";

const Layout = ({ children }: { children: any }) => {
  const { data, status } = useSession();

  if (status === "unauthenticated") {
    redirect("/auth/signin");
  }

  return (
    <Grid gutter={0} style={{ display: "flex", flexDirection: "row" }}>
      <Grid.Col span={2.1} className="bg-white h-full">
        <SideBar menuHeight={""} menuOverflow={""} />
      </Grid.Col>
      <Grid.Col span={9.9} className="bg-[#FAFAFA] min-h-screen px-10 py-5">
        {children}
      </Grid.Col>
    </Grid>
  );
};

export default Layout;
