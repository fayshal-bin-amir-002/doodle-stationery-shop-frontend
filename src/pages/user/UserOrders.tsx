import { useMyOdersQuery } from "@/redux/features/order/orderApi";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TableLoader from "@/components/Loader/TableLoader";
import NotFoundItem from "@/components/shared/NotFoundItem";

const UserOrders = () => {
  const { data, isLoading, isFetching } = useMyOdersQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const orders = data?.data?.data || [];

  return (
    <div className="overflow-x-auto">
      <Card className="p-4 w-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product Name</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Total Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          {isFetching || isLoading ? (
            <TableBody>
              <TableRow>
                <TableCell>
                  <TableLoader />
                </TableCell>
                <TableCell>
                  <TableLoader />
                </TableCell>
                <TableCell>
                  <TableLoader />
                </TableCell>
                <TableCell>
                  <TableLoader />
                </TableCell>
                <TableCell>
                  <TableLoader />
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (!isFetching || !isLoading) && orders.length === 0 ? (
            <NotFoundItem title="No Orders" />
          ) : (
            <TableBody>
              {orders &&
                orders.map((order: any, i: number) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">
                      {order?.products?.map((product: any) => (
                        <p key={product?._id}>{product?.product?.name}</p>
                      ))}
                    </TableCell>
                    <TableCell className="font-medium">
                      {order?.products?.map((product: any) => (
                        <p key={product?._id}>{product?.quantity}</p>
                      ))}
                    </TableCell>
                    <TableCell className="font-medium">
                      {order?.products?.map((product: any) => (
                        <p key={product?._id}>{product?.product?.price}$</p>
                      ))}
                    </TableCell>
                    <TableCell>{order?.totalPrice}$</TableCell>
                    <TableCell>
                      <Badge
                        className={`${
                          order?.status === "Pending" && "bg-amber-500"
                        } ${order?.status === "Shipped" && "bg-green-500"}`}
                      >
                        {order?.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          )}
        </Table>
      </Card>
    </div>
  );
};

export default UserOrders;
