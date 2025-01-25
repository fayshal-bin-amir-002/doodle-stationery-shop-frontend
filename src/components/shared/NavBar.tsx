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
import { Menu } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="py-4 bg-slate-50 sticky top-0">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="block lg:hidden">
              <NavSheet />
            </div>
            <Link to="/">
              <h3 className="text-cPrimary text-2xl font-semibold">
                Doodle. SS
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
          <div>
            <Button>Login</Button>
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
          <Button variant="outline">
            <Menu color="#e11d48" size={24} />
          </Button>
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

export default NavBar;
