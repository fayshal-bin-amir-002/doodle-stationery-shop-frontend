import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useGetAProductQuery } from "@/redux/features/product/productApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useNavigate, useParams } from "react-router";

const Product = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);
  const navigate = useNavigate();
  const { id } = useParams();

  const { data } = useGetAProductQuery(id, {
    skip: !id,
  });

  const product = data?.data || {};

  const handleAddToCart = () => {
    if (!user) {
      navigate("/login");
    }
    dispatch(
      addToCart({
        product: product._id,
        name: product.name,
        price: product.price,
        quantity: 1,
        stock: product.quantity,
        image_url: product.image_url,
      })
    );
  };

  return (
    <div className="my-12 md:my-16 lg:my-20">
      <Container>
        <Card>
          <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mt-6">
            <div>
              <img
                src={product?.image_url}
                alt="product"
                className="w-full object-cover rounded-lg"
              />
            </div>
            <div className="flex items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">{product?.name}</h3>
                <p className="text-gray-600 mb-2">{product?.description}</p>
                <p className="text-lg font-medium text-gray-600">
                  Category: {product?.category}
                </p>
                <p className="text-lg font-medium text-gray-600">
                  Price: {product?.price}$
                </p>
                <p className="text-lg font-medium text-gray-600">
                  Quantity: {product?.quantity}
                </p>
                <p
                  className={`${
                    product?.inStock ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {product?.inStock ? "Available" : "Not Available"}
                </p>
                <div className="mt-5">
                  <Button
                    disabled={!product?.inStock}
                    onClick={() => handleAddToCart()}
                  >
                    Add To Cart
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Product;
