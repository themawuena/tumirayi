type StatusType =
  | "confirmed"
  | "processing"
  | "shipped"
  | "pending"
  | "delivered"
  | "picked";

interface ElementType {
  order_id: number;
  createdAt: string;
  customer: string;
  total: number;
  profit: number;
  status: StatusType;
}

interface ProductElementType {
  order_id: number;
  name: string;
  quantity: number;
  total: number;
}

interface ElementType2 {
  order_id: number;
  createdAt: string;
  customer: string;
  total: number;
  profit: string;
  status: StatusType;
}

export const OrdersData: ElementType[] = [
  {
    order_id: 2929,
    createdAt: "2 minutes ago",
    customer: "Joseph Wheeler",
    total: 654,
    profit: 100,
    status: "confirmed",
  },
  {
    order_id: 7733,
    createdAt: "10 minutes ago",
    customer: "Joseph Wheeler",
    total: 654,
    profit: 100,
    status: "pending",
  },
  {
    order_id: 7374,
    createdAt: "10 minutes ago",
    customer: "Nitrogen",
    total: 654,
    profit: 100,
    status: "shipped",
  },
  {
    order_id: 734574,
    createdAt: "10 minutes ago",
    customer: "Nitrogen",
    total: 654,
    profit: 100,
    status: "processing",
  },
  {
    order_id: 737454,
    createdAt: "10 minutes ago",
    customer: "Nitrogen",
    total: 654,
    profit: 100,
    status: "delivered",
  },
  {
    order_id: 73974,
    createdAt: "10 minutes ago",
    customer: "Nitrogen",
    total: 654,
    profit: 100,
    status: "picked",
  },
  {
    order_id: 73774,
    createdAt: "10 minutes ago",
    customer: "Nitrogen",
    total: 654,
    profit: 100,
    status: "pending",
  },
  {
    order_id: 73474,
    createdAt: "10 minutes ago",
    customer: "Nitrogen",
    total: 654,
    profit: 100,
    status: "pending",
  },
  {
    order_id: 73744,
    createdAt: "10 minutes ago",
    customer: "Nitrogen",
    total: 654,
    profit: 100,
    status: "pending",
  },
  {
    order_id: 73734,
    createdAt: "10 minutes ago",
    customer: "Nitrogen",
    total: 654,
    profit: 100,
    status: "pending",
  },
];

export const RecentData: ElementType2[] = [
  {
    order_id: 2929,
    createdAt: "2 minutes ago",
    customer: "Joseph Wheeler",
    total: 654,
    profit: "Lorem Ipsum",
    status: "confirmed",
  },
  {
    order_id: 7374,
    createdAt: "10 minutes ago",
    customer: "Nitrogen",
    total: 654,
    profit: "Lorem Ipsum",
    status: "picked",
  },
  {
    order_id: 73742,
    createdAt: "10 minutes ago",
    customer: "Nitrogen",
    total: 654,
    profit: "Lorem Ipsum",
    status: "pending",
  },
  {
    order_id: 7374342,
    createdAt: "10 minutes ago",
    customer: "Nitrogen",
    total: 654,
    profit: "Lorem Ipsum",
    status: "pending",
  },
];

export const CustomersData = [
  {
    name: "Robert Fox",
    email: "robertFox@gmail.com",
    number: "(201) 555-0124",
    createdAt: "6 April 2024",
  },
  {
    name: "Robert Fox",
    email: "robertFox@gmail.com",
    number: "(201) 555-0124",
    createdAt: "6 April 2024",
  },
  {
    name: "Robert Fox",
    email: "robertFox@gmail.com",
    number: "(201) 555-0124",
    createdAt: "6 April 2024",
  },
  {
    name: "Robert Fox",
    email: "robertFox@gmail.com",
    number: "(201) 555-0124",
    createdAt: "6 April 2024",
  },
  {
    name: "Robert Fox",
    email: "robertFox@gmail.com",
    number: "(201) 555-0124",
    createdAt: "6 April 2024",
  },

  {
    name: "Robert Fox",
    email: "robertFox@gmail.com",
    number: "(201) 555-0124",
    createdAt: "6 April 2024",
  },
  {
    name: "Robert Fox",
    email: "robertFox@gmail.com",
    number: "(201) 555-0124",
    createdAt: "6 April 2024",
  },
  {
    name: "Robert Fox",
    email: "robertFox@gmail.com",
    number: "(201) 555-0124",
    createdAt: "6 April 2024",
  },
  {
    name: "Robert Fox",
    email: "robertFox@gmail.com",
    number: "(201) 555-0124",
    createdAt: "6 April 2024",
  },
];

export const OrdersProductData: ProductElementType[] = [
  {
    order_id: 2929,
    name: "Bread",
    total: 654,
    quantity: 5,
  },
  {
    order_id: 7733,
    name: "Joseph Wheeler",
    total: 654,
    quantity: 100,
  },
  {
    order_id: 7374,
    name: "Nitrogen",
    total: 654,
    quantity: 100,
  },
];
