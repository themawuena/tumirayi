"use client";
import { Center, Flex, Text } from "@mantine/core";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

 
  // if (status === "loading") {
  //   return (
  //     <Flex align={"center"} justify={"center"} style={{ height: '100vh' }}>
  //       Please wait...
  //     </Flex>
  //   );
  // }

  if (status !== "loading" && session) {
    router.replace("/dashboard");
  }

  // useEffect(() => {
  //   if (status !== "loading" && session) {
  //     redirect("/dashboard");
  //   } 
  //    if (status === "unauthenticated") {
  //     redirect("/auth/signin");
  //   }
  // }, [session, status]);


  return (
    <Center style={{ height: "100vh" }}>
      <Text c={"dark"}>Welcome Back</Text>
    </Center>
  );
}
