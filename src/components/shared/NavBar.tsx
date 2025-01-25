import { Link, NavLink } from "react-router";
import { Button } from "../ui/button";
import Container from "./Container";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  logout,
  selectCurrentToken,
  selectCurrentUser,
  TUser,
} from "@/redux/features/auth/authSlice";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { verifyToken } from "@/utils/verifyToken";

const NavBar = () => {
  const user = useAppSelector(selectCurrentUser);
  return (
    <nav className="py-4 sticky top-0 bg-white z-50">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="block lg:hidden">
              <NavSheet />
            </div>
            <Link to="/">
              <h3 className=" text-2xl font-semibold">
                Doodle<span className="text-cPrimary">. SS</span>
              </h3>
            </Link>
          </div>
          <div className="hidden lg:flex gap-4 items-center">
            <NavLink to="/">
              <Button variant="link" className="text-lg font-medium">
                Products
              </Button>
            </NavLink>
            <NavLink to="/">
              <Button variant="link" className="text-lg font-medium">
                About Us
              </Button>
            </NavLink>
          </div>
          <div className="flex items-center gap-10 lg:gap-12">
            <CartSheet />
            {user ? (
              <DropdownMenuElement />
            ) : (
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

const NavSheet = () => {
  return (
    <div>
      <Sheet key="left">
        <SheetTrigger asChild>
          {/* <Button variant="outline"> */}
          <Menu color="#e11d48" size={24} />
          {/* </Button> */}
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            {/* here will be the navlinks */}
            <div className="flex flex-col gap-6 items-center">
              <NavLink to="/">
                <Button variant="link" className="text-lg font-medium">
                  Products
                </Button>
              </NavLink>
              <NavLink to="/">
                <Button variant="link" className="text-lg font-medium">
                  About Us
                </Button>
              </NavLink>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const CartSheet = () => {
  return (
    <div>
      <Sheet key="right">
        <SheetTrigger asChild>
          <div className="cursor-pointer relative">
            <ShoppingCart color="#e11d48" />
            <span className="text-cPrimary absolute -right-2.5 -top-2.5">
              0
            </span>
          </div>
        </SheetTrigger>
        <SheetContent side={"right"} className="w-full">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            {/* here will be the navlinks */}
            <div className="flex flex-col gap-6 items-center">
              <NavLink to="/">
                <Button variant="link" className="text-lg font-medium">
                  Products
                </Button>
              </NavLink>
              <NavLink to="/">
                <Button variant="link" className="text-lg font-medium">
                  About Us
                </Button>
              </NavLink>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const DropdownMenuElement = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectCurrentToken);
  let role = "user";
  if (token) {
    const user = verifyToken(token) as TUser;
    if (user) {
      role = user?.role;
    }
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link to="/profile">
            <DropdownMenuItem>Profile</DropdownMenuItem>
          </Link>
          <Link to={`/${role}/dashboard`}>
            <DropdownMenuItem>Dashboard</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuItem onClick={() => dispatch(logout())}>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavBar;
