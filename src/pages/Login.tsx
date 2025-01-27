import DoodleForm from "@/components/form/DoodleForm";
import DoodleInput from "@/components/form/DoodleInput";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useLoginMutation,
  useRegisterMutation,
} from "@/redux/features/auth/authApi";
import {
  selectCurrentUser,
  setUser,
  TUser,
} from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { Loader2 } from "lucide-react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Navigate, useNavigate } from "react-router";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [register, { isLoading: rLoading }] = useRegisterMutation();
  const [login, { isLoading: lLoading }] = useLoginMutation();

  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const handleLogin: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await login(data).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ token: res.data.accessToken, user: user }));
      toast.success("Logged in successfully");
      navigate("/");
    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  };

  const handleRegister: SubmitHandler<FieldValues> = async (data) => {
    try {
      await register(data).unwrap();
      toast.success("Registered successfully. Please Login now.");
    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  };

  if (user) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <div className="max-w-sm w-full">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login Here</CardTitle>
                <CardDescription>
                  Don't have an account? Register first.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <DoodleForm onSubmit={handleLogin}>
                  <DoodleInput name="email" label="Email" type="text" />
                  <DoodleInput
                    name="password"
                    label="Password"
                    type="password"
                  />
                  <Button type="submit" disabled={lLoading}>
                    {lLoading && <Loader2 className="animate-spin" />}
                    Login
                  </Button>
                </DoodleForm>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>
                  Already have an account? Go to login.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <DoodleForm onSubmit={handleRegister}>
                  <DoodleInput name="name" label="Name" type="text" />
                  <DoodleInput name="email" label="Email" type="text" />
                  <DoodleInput
                    name="password"
                    label="Password"
                    type="password"
                  />
                  <Button type="submit" disabled={rLoading}>
                    {rLoading && <Loader2 className="animate-spin" />}
                    Register
                  </Button>
                </DoodleForm>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
