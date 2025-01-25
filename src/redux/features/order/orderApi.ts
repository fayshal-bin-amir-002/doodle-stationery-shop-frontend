import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    myOders: builder.query({
      query: () => ({
        url: "/orders/my-orders",
        method: "GET",
      }),
    }),
    getAllOrders: builder.query({
      query: () => ({
        url: "/orders",
        method: "GET",
      }),
      providesTags: ["Orders"],
    }),
    approveOrder: builder.mutation({
      query: (id) => ({
        url: `/orders/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});

export const {
  useMyOdersQuery,
  useGetAllOrdersQuery,
  useApproveOrderMutation,
} = orderApi;
