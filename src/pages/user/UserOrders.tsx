import { useMyOdersQuery } from "@/redux/features/order/orderApi";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
];

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
                      (order?.status === "Pending" && "bg-amber-500",
                      order?.status === "Shipped" && "bg-green-500")
                    }`}
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
