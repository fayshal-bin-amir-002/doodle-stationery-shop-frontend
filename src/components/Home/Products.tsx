import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import Container from "../shared/Container";
import ProductCard from "./ProductCard";
import { Button } from "../ui/button";
import { Link } from "react-router";
import ProductCardSkeleton from "../Loader/ProductCardSkeleton";
import NotFoundItem from "../shared/NotFoundItem";

const Products = () => {
  const { data, isLoading, isFetching } = useGetAllProductsQuery({});

  const products = data?.data?.data?.slice(0, 6) || [];

  return (
    <div className="mt-12 md:mt-16 lg:mt-20">
      <Container>
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 md:mb-8 lg:mb-10">
            Featured Products
          </h3>
        </div>
        <div>
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
        <div className="mt-5 lg:mt-8 text-center">
          <Link to="/products">
            <Button className="bg-cPrimary">View All Products</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Products;
