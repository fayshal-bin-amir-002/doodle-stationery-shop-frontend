import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    myOders: builder.query({
      query: () => ({
        url: "/orders/my-orders",
        method: "GET",
      }),
      providesTags: ["My-Order"],
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
    placeOrder: builder.mutation({
      query: (data) => ({
        url: "/orders/place-order",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["My-Order"],
    }),
  }),
});

export const {
  useMyOdersQuery,
  useGetAllOrdersQuery,
  useApproveOrderMutation,
  usePlaceOrderMutation,
} = orderApi;
