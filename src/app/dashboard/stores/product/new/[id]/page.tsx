import AddProducts from "@/Modules/product/new/page";
import { useRouter } from "next/navigation";
import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  return <AddProducts params={params} />;
};

export default Page;
