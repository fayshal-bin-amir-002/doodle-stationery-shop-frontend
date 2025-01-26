import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ page, search, filterData }) => {
        const params = new URLSearchParams();
        if (page) params.append("page", String(page));
        if (search) params.append("searchTerm", String(search));
        if (filterData?.category)
          params.append("category", filterData?.category);
        if (filterData?.range > 0)
          params.append("price", String(filterData?.range));

        if (filterData?.instock !== "" && filterData?.instock !== undefined) {
          params.append("inStock", filterData?.instock);
        }
        // params.append("price", String(filterData?.range));
        // console.log(params);
        return {
          url: `/products`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Products"],
    }),
    getAProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: `/products`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetAProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
