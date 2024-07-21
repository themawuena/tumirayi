import ViewDetails from "@/Modules/product/ViewDetails";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  const items = [
    { title: "Stores", href: "/dashboard/stores" },
    { title: "Store", href: "/dashboard/stores/store" },
    { title: "Product", href: "#" },
  ];

  return <ViewDetails items={items} params={params} />;
};

export default page;
