"use client";
import React, { useEffect } from "react";
import { Center, Text } from "@mantine/core";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  return (
    <Center style={{ height: "100vh" }}>
      <Text c={"dark"} onClick={() => router.push("/dashboard")}>
        Welcome To Tumirayi
      </Text>
    </Center>
  );
};

export default Page;
