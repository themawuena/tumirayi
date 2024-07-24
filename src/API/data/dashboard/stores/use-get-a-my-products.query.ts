import { API_ENDPOINT } from "@/API/api/endpoints";
import user from "@/API/repositories/user";
import { useMutation, useQuery } from "@tanstack/react-query";

export default function useGetAProductsQuery({
  id,
  product_id,
  enable,
}: {
  id: string;
  product_id: string;
  enable: boolean;
}) {
  let queryParam = id;
  return useQuery({
    queryKey: [API_ENDPOINT.PRODUCTS+"aproduct", queryParam],
    enabled: enable,
    queryFn: async () => {
      let response = await user.all(
        API_ENDPOINT.PRODUCTS + "/" + id + "/products/"  + product_id
      );
      return response?.data;
    },
  });
}
