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
import { Menu, ShoppingCart, Trash2 } from "lucide-react";
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
import {
  clearCart,
  removeFromCart,
  selectCart,
  selectCartItems,
  updateQuantity,
} from "@/redux/features/cart/cartSlice";
import { Card, CardContent } from "../ui/card";
import { usePlaceOrderMutation } from "@/redux/features/order/orderApi";
import { toast } from "sonner";

const NavBar = () => {
  const user = useAppSelector(selectCurrentUser);
  const itemCount = useAppSelector(selectCartItems).length || 0;

  return (
    <nav className="py-4 sticky top-0 bg-white z-50">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="block lg:hidden">
              <NavSheet />
            </div>
            <NavLink to="/">
              <h3 className=" text-2xl font-semibold">
                Doodle<span className="text-cPrimary">. SS</span>
              </h3>
            </NavLink>
          </div>
          <div className="hidden lg:flex gap-4 items-center">
            <NavLink to="/products">
              <Button variant="link" className="text-lg font-medium">
                Products
              </Button>
            </NavLink>
            <NavLink to="/about-us">
              <Button variant="link" className="text-lg font-medium">
                About Us
              </Button>
            </NavLink>
          </div>
          <div className="flex items-center gap-10 lg:gap-12">
            <CartSheet itemCount={itemCount} />
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
              <NavLink to="/products">
                <Button variant="link" className="text-lg font-medium">
                  Products
                </Button>
              </NavLink>
              <NavLink to="/about-us">
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

const CartSheet = ({ itemCount }: { itemCount: number }) => {
  const [placeOrder] = usePlaceOrderMutation();
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const cart = useAppSelector(selectCart);

  const handlePlaceOrder = async () => {
    const orderData = {
      products: items.map((item) => {
        return {
          product: item?.product,
          quantity: item?.quantity,
        };
      }),
    };
    try {
      await placeOrder(orderData);
      toast.success("Order added successfully");
      dispatch(clearCart());
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to place order");
    }
  };

  return (
    <div>
      <Sheet key="right">
        <SheetTrigger asChild>
          <div className="cursor-pointer relative">
            <ShoppingCart color="#e11d48" />
            <span className="text-cPrimary absolute -right-2.5 -top-2.5">
              {itemCount}
            </span>
          </div>
        </SheetTrigger>
        <SheetContent side={"right"} className="w-full">
          <SheetHeader className="py-6">
            <div className="flex justify-between items-center">
              <div>
                <SheetTitle>Cart</SheetTitle>
                <SheetDescription></SheetDescription>
              </div>
              <div>
                <Button
                  onClick={() => dispatch(clearCart())}
                  size={"sm"}
                  className="bg-cPrimary"
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </SheetHeader>
          <div className="">
            <div className="space-y-4">
              {items.map((item) => (
                <Card key={item.product}>
                  <CardContent className="pt-6 grid grid-cols-10 gap-2">
                    <div className="flex items-center gap-2 col-span-4">
                      <div className="w-[40px]">
                        <img
                          src={item.image_url}
                          className="w-full object-cover"
                          alt="cart"
                        />
                      </div>
                      <div className="text-right">
                        <p>{item?.name}</p>
                        <small>{item?.price}$</small>
                      </div>
                    </div>
                    <div className="flex justify-between items-center col-span-4">
                      <Button
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item.product,
                              quantity: Math.max(item.quantity - 1, 1),
                            })
                          )
                        }
                        size={"sm"}
                      >
                        -
                      </Button>
                      <p>{item?.quantity}</p>
                      <Button
                        size={"sm"}
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              id: item.product,
                              quantity: Math.min(item.quantity + 1, item.stock),
                            })
                          )
                        }
                      >
                        +
                      </Button>
                    </div>
                    <div className="col-span-2 flex justify-center items-center">
                      <Button
                        onClick={() => dispatch(removeFromCart(item?.product))}
                        variant={"outline"}
                        size={"sm"}
                      >
                        <Trash2 size={24} color="#e11d48" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div>
              <Card>
                <CardContent className="space-y-3 mt-6">
                  <p>Total Quantity: {cart?.totalQuantity}</p>
                  <p>Total Price: {cart?.totalPrice.toFixed(2)}$</p>
                  <div className="pt-5">
                    <Button
                      disabled={!items?.length}
                      onClick={handlePlaceOrder}
                      className="w-full"
                    >
                      Place Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
