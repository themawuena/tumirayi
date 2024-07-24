/* eslint-disable @next/next/no-img-element */
"use client";
import { redirect, useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import {
  Box,
  Button,
  Card,
  Center,
  Flex,
  Notification,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { authenticate } from "@/app/actions";
import { notifications } from "@mantine/notifications";

export default function Home() {
  // * HOOKS
  const session = useSession();
  const router = useRouter();

  // if (session.status == "authenticated") {
  //   redirect("/dashboard");
  // }

  const handleRgisterNav = () => {
    router.push("/auth/signup");
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [show, setshow] = useState<boolean>(false);

  // FORMS
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value.length == 0 ? "Password is required" : null),
    },
  });

  const handleLogin = async (values: any) => {
    setIsLoading(true);
    const { email, password } = values;
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result && !result.error) {
        notifications.show({
          title: "Sign-in Successful",
          message: "Sign-in was successful",
          color: "green",
        });
        router.push("/dashboard");
      } else {
        notifications.show({
          title: "Sign-in failed",
          message: result?.error || "Sign-in failed",
          color: "red",
        });
      }
      setIsLoading(false);
      return result;
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
    setIsLoading(false);
  };

  
  return (
    <form onSubmit={form.onSubmit(handleLogin)}>
      <Flex
        direction={"column"}
        w={"100%"}
        className="flex items-center justify-center h-screen w-screen"
      >
        <Card w={"500px"} withBorder style={{ gap: 60 }}>
          <Box>
            <Center>
              <img
                className="h-14 w-38 object-cover"
                loading="lazy"
                alt=""
                src="/tumirayi-3@2x.png"
              />
            </Center>
          </Box>
          <Flex direction={"column"} gap={20}>
            <Flex gap={15} px={30} direction={"column"}>
              <Text size="15px" fw={"bold"}>
                LOGIN
              </Text>
              <Text size="15px" fw={"400"}>
                Sign into your account
              </Text>
            </Flex>
            <Flex px={30} gap={30} direction={"column"}>
              <TextInput
                withAsterisk
                w={"100%"}
                variant="unstyled"
                styles={{
                  input: {
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderBottomWidth: 1,
                    borderColor: "#E6E6E6",
                  },
                }}
                placeholder="your@email.com"
                key={form.key("email")}
                {...form.getInputProps("email")}
              />

              <Flex direction={"column"} gap={10}>
                <PasswordInput
                  w={"100%"}
                  variant="unstyled"
                  withAsterisk
                  styles={{
                    input: {
                      borderTopWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderBottomWidth: 1,
                      borderColor: "#E6E6E6",
                    },
                  }}
                  placeholder="Password"
                  key={form.key("password")}
                  {...form.getInputProps("password")}
                />
              </Flex>
              <Flex justify={"end"}>
                <Button loading={isLoading} type="submit">
                  Sign In
                </Button>
              </Flex>
              <Text
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
                c={"#7C7C7C"}
                ta={"center"}
              >
                Don`t have an Account Yet?
                <Text ml={4} c={"#438AFE"} onClick={handleRgisterNav}>
                  Register Here
                </Text>
              </Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </form>
  );
}
