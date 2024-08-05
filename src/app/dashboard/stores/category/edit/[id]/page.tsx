import EditCategory from "@/Modules/stores/EditCategory";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return <EditCategory param={params} />;
};

export default page;
