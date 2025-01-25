import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    myOders: builder.query({
      query: () => ({
        url: "/orders/my-orders",
        method: "GET",
      }),
    }),
    // updateProfile: builder.mutation({
    //   query: (payload) => ({
    //     url: "/users/update-user",
    //     method: "PATCH",
    //     body: payload,
    //   }),

    // }),
  }),
});

export const { useMyOdersQuery } = orderApi;
