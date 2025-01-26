import { baseApi } from "@/redux/api/baseApi";

const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardData: builder.query({
      query: () => ({
        url: "/orders/dashboard-data",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetDashboardDataQuery } = dashboardApi;
