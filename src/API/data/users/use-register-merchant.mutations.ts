import { useMutation } from "@tanstack/react-query";
import user from "../../repositories/user";
import { API_ENDPOINT } from "@/API/api/endpoints";

interface Props {
  variables: RegisterProps;
}

export default function useRegisterMutation() {
  return useMutation({
    mutationFn: ({ variables }: Props) => {
      return user.create(API_ENDPOINT.REGISTER_URL, variables);
    },
  });
}
