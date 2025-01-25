import {
  useApproveOrderMutation,
  useGetAllOrdersQuery,
} from "@/redux/features/order/orderApi";

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
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const OrderManagement = () => {
  const { data } = useGetAllOrdersQuery(undefined);
  const [approveOrder] = useApproveOrderMutation();

  const orders = data?.data?.data || [];

  const handleApprove = async (id: string) => {
    try {
      await approveOrder(id);
      toast.success("Order approved successfully!");
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to approve order!");
    }
  };

  return (
    <div className="overflow-x-auto">
      <Card className="p-4 w-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Total Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders &&
              orders.map((order: any, i: number) => (
                <TableRow key={i}>
                  <TableCell>{order?.user?.name}</TableCell>
                  <TableCell>{order?.user?.email}</TableCell>
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
                  <TableCell>
                    <Button
                      onClick={() => handleApprove(order?._id)}
                      disabled={order?.status !== "Pending"}
                      size="sm"
                    >
                      Approve
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default OrderManagement;
