"use client";
import { Flex } from "@mantine/core";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <Flex align={"center"} justify={"center"}>
        Please wait...
      </Flex>
    );
  }

  if (!session?.user) {
    redirect("/auth/signin");
  }

  if (session?.user) {
    console.log(status, "ahah");
    redirect("/dashboard");
  }

  return (
    <>
      {status === "authenticated"
        ? "I am loggded in as  " + session.user?.name
        : "Hello World!"}
    </>
  );
}
