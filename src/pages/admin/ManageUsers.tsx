import {
  useBlockUserMutation,
  useGetAllUsersQuery,
} from "@/redux/features/user/userApi";
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

const ManageUsers = () => {
  const { data } = useGetAllUsersQuery(undefined);
  const [blockUser] = useBlockUserMutation();

  const users = data?.data?.data || [];

  const handleBlock = async (email: string) => {
    try {
      await blockUser(email);
      toast.success("User blocked successfully!");
    } catch (error) {
      toast.error("Failed to block user!");
    }
  };

  return (
    <Card className="p-4">
      <Table>
        <TableHeader>
          <TableRow className="">
            <TableHead className="">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users &&
            users.map((user: any, i: number) => (
              <TableRow key={i} className="">
                <TableCell>{user?.name}</TableCell>
                <TableCell>{user?.email}</TableCell>
                <TableCell>
                  {user?.role === "admin" ? (
                    <Badge>{user?.role}</Badge>
                  ) : (
                    user?.role
                  )}
                </TableCell>
                <TableCell
                  className={`${
                    user?.isBlocked ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {user?.isBlocked ? "Blocked" : "Active"}
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleBlock(user?.email)}
                    disabled={user?.isBlocked}
                    className="bg-red-500"
                  >
                    Block
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ManageUsers;
