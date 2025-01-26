import { Link } from "react-router";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className="group">
      <CardContent>
        <div className="flex justify-center mb-5 overflow-hidden rounded-lg mt-6">
          <img
            src={product?.image_url}
            alt="product"
            className="h-[270px] w-full object-cover group-hover:scale-105 duration-200 rounded-lg"
          />
        </div>
        <div className="flex justify-between items-center">
          <h4 className="text-xl font-medium uppercase">{product?.name}</h4>
          <p className="text-gray-600">{product?.price}$</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link to={`/products/${product?._id}`}>
          <Button>View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
