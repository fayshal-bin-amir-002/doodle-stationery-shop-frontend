import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => ({
        url: "/users/get-me",
        method: "GET",
      }),
      providesTags: ["Profile"],
    }),
    updateProfile: builder.mutation({
      query: (payload) => ({
        url: "/users/update-user",
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const { useGetMeQuery, useUpdateProfileMutation } = userApi;
