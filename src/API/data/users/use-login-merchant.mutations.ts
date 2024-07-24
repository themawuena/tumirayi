import { useMutation } from "@tanstack/react-query";
import user from "../../repositories/user";
import { API_ENDPOINT } from "@/API/api/endpoints";

export default function useLoginMutation() {
  return useMutation({
    mutationFn: ({ variables }: any) =>
      user.create(API_ENDPOINT.LOGIN_URL, variables),
  });
}
