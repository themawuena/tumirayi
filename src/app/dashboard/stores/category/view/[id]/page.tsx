import ViewCategory from "@/Modules/stores/ViewCategory";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return <ViewCategory param={params} />;
};

export default page;
