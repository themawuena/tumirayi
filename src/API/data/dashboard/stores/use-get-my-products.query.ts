import { API_ENDPOINT } from "@/API/api/endpoints";
import user from "@/API/repositories/user";
import { useMutation, useQuery } from "@tanstack/react-query";

export default function useGetAllProductsQuery({
  id,
  enable,
}: {
  id: string;
  enable: boolean;
}) {
  let queryParam = id;
  return useQuery({
    queryKey: [API_ENDPOINT.PRODUCTS, queryParam],
    enabled: enable,
    queryFn: async () => {
      let response = await user.all(
        API_ENDPOINT.PRODUCTS + "/" + id + "/products"
      );
      return response?.data;
    },
  });
}
