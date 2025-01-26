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
    getAllUsers: builder.query({
      query: () => ({
        url: "/users/get-all-users",
        method: "GET",
      }),
      providesTags: ["Users"],
    }),
    blockUser: builder.mutation({
      query: (email) => ({
        url: `/users/block-user/${email}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetMeQuery,
  useUpdateProfileMutation,
  useGetAllUsersQuery,
  useBlockUserMutation,
} = userApi;
