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
import TableLoader from "@/components/Loader/TableLoader";
import NotFoundItem from "@/components/shared/NotFoundItem";

const ManageUsers = () => {
  const { data, isLoading, isFetching } = useGetAllUsersQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
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
    <div className="overflow-x-auto">
      <Card className="p-4 w-full">
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
          ) : (!isFetching || !isLoading) && users.length === 0 ? (
            <NotFoundItem title="No Orders" />
          ) : (
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
                        size="sm"
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
          )}
        </Table>
      </Card>
    </div>
  );
};

export default ManageUsers;
