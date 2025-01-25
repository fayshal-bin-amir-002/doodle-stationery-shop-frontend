import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";
import NavMain from "./NavMain";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentToken, TUser } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import { adminSidebarItems, userSidebarItems } from "./sidebar.items";
import NavUser from "./NavUser";

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const token = useAppSelector(selectCurrentToken);

  let role = "user";
  let user;

  if (token) {
    user = verifyToken(token) as TUser;
    if (user) {
      role = user.role;
    }
  }

  const userData = {
    email: user?.email as string,
    avatar: "/avatars/shadcn.jpg",
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain
          items={role === "user" ? userSidebarItems : adminSidebarItems}
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
