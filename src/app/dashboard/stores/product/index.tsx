import Products from "@/Modules/product";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  console.log(params.id, "Hello");

  const items = [
    { title: "Stores", href: "/dashboard/stores" },
    { title: "Store", href: "/dashboard/stores/store" },
    { title: "Products", href: "#" },
  ];
  return <Products param={params} items={items} />;
};

export default page;
