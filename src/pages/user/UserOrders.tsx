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

const UserOrders = () => {
  const { data } = useMyOdersQuery(undefined);

  const orders = data?.data?.data || [];

  return (
    <Card className="p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Product Name</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Total Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
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
      </Table>
    </Card>
  );
};

export default UserOrders;
