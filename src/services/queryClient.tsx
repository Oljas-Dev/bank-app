import { QueryClient, QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "https://v1.apiplugin.io/v1/currency/LiSRxweZ/rates";
// const eurLink = "source=EUR";

const apiInstance = axios.create({
  baseURL: BASE_URL,
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey, signal }: QueryFunctionContext) => {
        const { data } = await apiInstance(`${queryKey[0]}`, { signal });
        return data;
      },
    },
  },
});

export default apiInstance;
