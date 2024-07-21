/* eslint-disable @next/next/no-img-element */
"use client";
import { useMemo } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  IconSmartHome,
  IconShoppingCart,
  IconUsers,
  IconTicket,
  IconFileText,
  IconStar,
  IconSettings,
  IconUserCircle,
  IconCirclePlus,
  IconBox,
} from "@tabler/icons-react";
import { Text } from "@mantine/core";

interface Props {
  className?: string;
  menuHeight: string;
  menuOverflow: string;
}

const SideBar = ({ className = "", menuHeight, menuOverflow }: Props) => {
  const menuStyle = useMemo(
    () => ({
      height: menuHeight,
      overflow: menuOverflow,
    }),
    [menuHeight, menuOverflow]
  );

  const pathName = usePathname();

  const MainLinks: { id: number; name: string; route: string; icon: any }[] = [
    { id: 1, name: "Dashboard", route: "/dashboard", icon: IconSmartHome },
    {
      id: 2,
      name: "Order Management",
      route: "/dashboard/order_management",
      icon: IconShoppingCart,
    },
    {
      id: 3,
      name: "Customers",
      route: "/dashboard/customers",
      icon: IconUsers,
    },
    {
      id: 4,
      name: "Marketing",
      route: "/dashboard/marketing",
      icon: IconTicket,
    },
    { id: 5, name: "Reports", route: "/dashboard/report", icon: IconFileText },
    { id: 6, name: "Messages", route: "/dashboard/messages", icon: IconStar },
  ];

  const ProductLinks = [
    {
      id: 9,
      name: "Add Store",
      route: "/dashboard/stores/add",
      icon: IconCirclePlus,
    },
    { id: 9, name: "My Stores", route: "/dashboard/stores", icon: IconBox },
    {
      id: 9,
      name: "Add Category",
      route: "/dashboard/stores/category",
      icon: IconUserCircle,
    },
    // {
    //   id: 7,
    //   name: "Add Products",
    //   route: "/dashboard/product/new",
    //   icon: IconSmartHome,
    // },
    // {
    //   id: 8,
    //   name: "Product List",
    //   route: "/dashboard/product",
    //   icon: IconShoppingCart,
    // },
  ];

  const AdminLinks = [
    {
      id: 10,
      name: "Admin Roles",
      route: "/dashboard/roles",
      icon: IconUserCircle,
    },
    {
      id: 11,
      name: "Manage Admins",
      route: "/dashboard/manage",
      icon: IconUserCircle,
    },
    { id: 12, name: "Tickets", route: "/dashboard/tickets", icon: IconUserCircle },
    {
      id: 13,
      name: "Settings",
      route: "/dashboard/settings",
      icon: IconSettings,
    },
  ];

  const renderLinks = (
    links: { id: number; name: string; route: string; icon: any }[]
  ) => {
    return links?.map((link) => {
      const isActive = link.route === pathName;
      return (
        <Link
          className={`flex items-center justify-start p-2 rounded ${
            isActive ? "bg-[#F3F4F8] text-[#23272E]" : "bg-white text-[#8B909A]"
          } hover:text-blue-500 gap-3`}
          href={link.route}
          key={link.id}
        >
          <link.icon className="h-5 w-5" />
          <div className="flex-1 text-xs">{link.name}</div>
        </Link>
      );
    });
  };

  return (
    <div
      className={`flex flex-col ${className}  border-r-2 h-full`}
      style={menuStyle}
    >
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-start p-6">
          <Image
            className="h-14 w-36 object-cover"
            loading="lazy"
            alt=""
            src="/tumirayi-5@2x.png"
            width={150}
            height={56.7}
          />
        </div>
        {/* MAIN MENU */}
        <div className="flex items-center justify-start px-2.5 pt-2.5">
          <Text c={"#8B909A"} size="12px">
            MAIN MENU
          </Text>
        </div>
        <div className="flex flex-col gap-2 p-2.5">
          {renderLinks(MainLinks)}
        </div>
        <div className="flex items-center justify-start px-2.5 pt-2.5 mt-3">
          <Text c={"#8B909A"} size="12px">
          STORES
          </Text>
        </div>
        <div className="flex flex-col gap-2 p-2.5">
          {renderLinks(ProductLinks)}
        </div>
        <div className="flex items-center justify-start px-2.5 pt-2.5 mt-3">
          <Text c={"#8B909A"} size="12px">
            ADMIN
          </Text>
        </div>
        <div className="flex flex-col gap-2 p-2.5">
          {renderLinks(AdminLinks)}
        </div>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  className: PropTypes.string,
  menuHeight: PropTypes.string.isRequired,
  menuOverflow: PropTypes.string.isRequired,
};

export default SideBar;
