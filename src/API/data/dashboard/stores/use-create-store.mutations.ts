import React from "react";
import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "@/API/api/endpoints";
import user from "@/API/repositories/user";

interface Props {
  variables: {
    name: string;
    description: string;
    type: string;
    address: string;
    image: any;
  };
}

export default function useCreateStoreMutation() {
  return useMutation({
    mutationFn: ({ variables }: Props) =>
      user.create(API_ENDPOINT.CREATE_STORE, variables),
  });
}
