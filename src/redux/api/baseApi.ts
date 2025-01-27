import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout } from "../features/auth/authSlice"; // Import your logout action

const baseQuery = fetchBaseQuery({
  baseUrl: "https://doodle-stationery-shop-backend.vercel.app/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `${token}`);
    }

    return headers;
  },
});

// Create a custom base query to handle 401/403 status codes
const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401 || result?.error?.status === 403) {
    // Dispatch the logout action
    api.dispatch(logout());
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Profile", "Users", "Products", "Orders", "My-Order"],
  endpoints: () => ({}),
});
