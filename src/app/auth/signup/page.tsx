/* eslint-disable @next/next/no-img-element */
"use client";
import { redirect, useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  Box,
  Button,
  Card,
  Center,
  Checkbox,
  Flex,
  Group,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import useRegisterMutation from "@/API/data/users/use-register-merchant.mutations";
import { notifications } from "@mantine/notifications";

export default function Home() {
  // * HOOKS
  const session = useSession();
  const router = useRouter();

  // * STATES
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // if (session.data?.user) {
  //   redirect("/dashboard");
  // }

  const handleRgisterNav = () => {
    router.push("/auth/signin");
  };

  // FORMS
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      name: "",
      password: "",
      termsOfService: false,
    },

    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 characters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length == 0
          ? "Password is required"
          : value.length < 8
          ? "Password is too weak"
          : null,
      termsOfService: (value) =>
        !value ? "Accept thses terms of service" : null,
    },
  });
  const REGISTER = useRegisterMutation();

  async function handleRegister(values: any) {
    setIsLoading(true);
    try {
      const { email, password, name, termsOfService } = values;
      REGISTER.mutate(
        { variables: { full_name: name, email, password } },
        {
          onSuccess: (res) => {
            setIsLoading(false);
            notifications.show({
              title: "Sign-in Successful",
              message: "Sign-in was successful",
              color: "green",
            });
            signIn("credentials", {
              redirect: false,
              email,
              password,
            }).then((result) => {
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
            });
          },
          onError: (error: any) => {
            setIsLoading(false);
            notifications.show({
              title: "Signup failed",
              message: error || "Signup was not completed",
              color: "red",
            });
          },
        }
      );
    } catch (e: any) {
      setIsLoading(false);
      console.error(e);
    }
  }

  return (
    <form onSubmit={form.onSubmit(handleRegister)}>
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
                REGISTER
              </Text>
              <Text size="15px" fw={"400"}>
                Create a new account
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
                placeholder="Full Name"
                key={form.key("name")}
                {...form.getInputProps("name")}
              />
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
                <Flex align={"center"} gap={10}>
                  <Checkbox
                    defaultChecked
                    key={form.key("termsOfService")}
                    {...form.getInputProps("termsOfService", {
                      type: "checkbox",
                    })}
                  />
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
                    I accept
                    <Text ml={4} c={"#438AFE"}>
                      Terms & Conditions
                    </Text>
                  </Text>
                </Flex>
              </Flex>
              <Group justify="flex-end" mt="md">
                <Button loading={isLoading} type="submit">
                  Register
                </Button>
              </Group>
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
                Already have an Account?
                <Text ml={4} c={"#438AFE"} onClick={handleRgisterNav}>
                  Login Here
                </Text>
              </Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </form>
  );
}

{
  /* <Flex px={30} gap={30} direction={"column"}>
<TextInput
  withAsterisk
  w={"100%"}
  variant="unstyled"
  style={{
    borderBottomWidth: 1,
    borderColor: "#E6E6E6",
  }}
  placeholder="Full Name"
  key={form.key("name")}
  {...form.getInputProps("name")}
/>
<TextInput
  w={"100%"}
  variant="unstyled"
  withAsterisk
  style={{
    borderBottomWidth: 1,
    borderColor: "#E6E6E6",
  }}
  placeholder="Email Address"
  key={form.key("email")}
  {...form.getInputProps("email")}
/>
<Flex direction={"column"} gap={10}>
  <PasswordInput
    w={"100%"}
    variant="unstyled"
    style={{
      borderBottomWidth: 1,
      borderColor: "#E6E6E6",
    }}
    placeholder="Password"
    key={form.key("password")}
    {...form.getInputProps("password")}
  />
  <Flex align={"center"} gap={10}>
    <Checkbox defaultChecked />
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
      I accept
      <Text ml={4} c={"#438AFE"}>
        Terms & Conditions
      </Text>
    </Text>
  </Flex>
</Flex>
<Flex justify={"end"}>
  <Button
    type="submit"
    onClick={(e) => handleRegister(e)}
    size="lg"
    bg={"#438AFE"}
  >
    REGISTER
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
  Already have an Account?
  <Text ml={4} c={"#438AFE"} onClick={handleRgisterNav}>
    Login Here */
}
//   </Text>
// </Text>
// </Flex>
