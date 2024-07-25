import Products from "@/Modules/product";
import ViewAStore from "@/Modules/stores/View";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return <ViewAStore params={params} />;
};

export default page;
