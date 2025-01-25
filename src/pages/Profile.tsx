import DoodleForm from "@/components/form/DoodleForm";
import DoodleInput from "@/components/form/DoodleInput";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  useGetMeQuery,
  useUpdateProfileMutation,
} from "@/redux/features/user/userApi";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const Profile = () => {
  const { data, isFetching, isLoading: loading1 } = useGetMeQuery(undefined);

  const [updateProfile, { isLoading: loading2 }] = useUpdateProfileMutation();

  const defaultValues = {
    name: data?.data?.name,
    email: data?.data?.email,
    shippingAddress: data?.data?.shippingAddress,
  };

  if (isFetching || loading1) {
    return;
  }

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const updatedData = {
      shippingAddress: data.shippingAddress,
    };
    try {
      await updateProfile(updatedData).unwrap();
      toast.success("Profile updated successfully");
    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  };

  return (
    <Container>
      <div className="h-[70vh] w-full flex justify-center items-center">
        <Card className="max-w-sm w-full mx-auto p-4">
          <DoodleForm onSubmit={handleSubmit} defaultValues={defaultValues}>
            <DoodleInput name="name" label="Name" type="text" readOnly={true} />
            <DoodleInput
              name="email"
              label="Email"
              type="text"
              readOnly={true}
            />
            <DoodleInput
              name="shippingAddress"
              label="Shipping Address"
              type="text"
            />
            <Button type="submit">Update Profile</Button>
          </DoodleForm>
        </Card>
      </div>
    </Container>
  );
};

export default Profile;
