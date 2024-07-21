import ViewDetails from "@/Modules/order_management/ViewDetails";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  const items = [
    { title: "Home", href: "/dashboard" },
    { title: "Order Management", href: "/dashboard/order_management" },
    { title: "Order details", href: "#" },
  ];

  return <ViewDetails items={items} params={params} />;
};

export default page;
