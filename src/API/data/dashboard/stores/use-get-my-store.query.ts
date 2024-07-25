import { API_ENDPOINT } from "@/API/api/endpoints";
import user from "@/API/repositories/user";
import { useMutation, useQuery } from "@tanstack/react-query";

export default function useGetAStoreQuery({
  id,
  store_id,
  enable,
}: {
  id: string;
  store_id: string;
  enable: boolean;
}) {
  let queryParam = id;
  return useQuery({
    queryKey: [API_ENDPOINT.GET_ALL_STORE, queryParam],
    enabled: enable,
    queryFn: async () => {
      let response = await user.all(
        API_ENDPOINT.GET_ALL_STORE + "/" + id + "/stores/" + store_id
      );
      return response?.data;
    },
  });
}
