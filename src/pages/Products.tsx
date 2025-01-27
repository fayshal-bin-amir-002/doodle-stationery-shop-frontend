import ProductCard from "@/components/Home/ProductCard";
import ProductCardSkeleton from "@/components/Loader/ProductCardSkeleton";
import FilterSheet from "@/components/products/FilterSheet";
import Container from "@/components/shared/Container";
import NotFoundItem from "@/components/shared/NotFoundItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";

import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Products = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState({
    range: 0,
    category: "",
    instock: "",
  });
  const { data, isLoading, isFetching } = useGetAllProductsQuery({
    page,
    search,
    filterData,
  });
  const products = data?.data?.data || [];
  const meta = data?.data?.meta || {};
  const pageNumbers = Array.from(
    { length: meta?.totalPage },
    (_, index) => index
  );

  const handleSearch: SubmitHandler<FieldValues> = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    setPage(1);
  };

  return (
    <div className="my-8 md:my-10 lg:my-12">
      <Container>
        <div className="flex lg:justify-between flex-col lg:flex-row lg:items-center gap-4 mb-4">
          <div className="max-w-sm">
            <form onSubmit={handleSearch}>
              <div className="flex items-center gap-2">
                <Input
                  name="search"
                  placeholder="Search your product"
                  type="search"
                />
                <Button size="sm" type="submit">
                  Search
                </Button>
              </div>
            </form>
          </div>
          <div>
            <FilterSheet
              setFilterData={setFilterData}
              filterData={filterData}
              setPage={setPage}
            />
          </div>
        </div>
        <div>
          {/* products will be here */}
          {isFetching || isLoading ? (
            <ProductCardSkeleton />
          ) : !isLoading && !isFetching && products.length === 0 ? (
            <NotFoundItem title="Products not found" />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {products &&
                products.map((product: any) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>
          )}
        </div>
        {products.length > 0 && (
          <div className="my-5 flex justify-center items-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    className="cursor-pointer"
                    onClick={() => {
                      if (page > 1) {
                        setPage(page - 1);
                      }
                    }}
                  />
                </PaginationItem>
                {pageNumbers &&
                  pageNumbers.map((i) => (
                    <PaginationItem className="cursor-pointer" key={i}>
                      <PaginationLink
                        onClick={() => setPage(i + 1)}
                        isActive={page === i + 1}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                <PaginationItem>
                  <PaginationNext
                    className="cursor-pointer"
                    onClick={() => {
                      if (page < pageNumbers?.length) {
                        setPage(page + 1);
                      }
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Products;
