import Products from "@/Modules/product";
import React from "react";

const page = () => {
  const items = [
    { title: "Stores", href: "/dashboard/stores" },
    { title: "Store", href: "/dashboard/stores/store" },
    { title: "Products", href: "#" },
  ];
  return <Products items={items} />;
};

export default page;
