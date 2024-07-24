import { API_ENDPOINT } from "@/API/api/endpoints";
import user from "@/API/repositories/user";
import { useQuery } from "@tanstack/react-query";

export default function useGetAllCategoriesQuery({
  id,
  enable,
}: {
  id: string;
  enable: boolean;
}) {
  let queryParam = id;
  return useQuery({
    queryKey: [API_ENDPOINT.PRODUCTS + "categories", queryParam],
    enabled: enable,
    queryFn: async () => {
      let response = await user.all(
        API_ENDPOINT.PRODUCTS + "/" + id + "/categories"
      );
      return response?.data;
    },
  });
}
