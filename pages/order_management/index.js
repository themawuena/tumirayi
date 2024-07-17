// pages/order_management.js

import { useState } from "react";
import styles from "./order_management.module.css";
import Header from "../../components/Header/Header";

const Page = () => {
  const [activeTab, setActiveTab] = useState("Pending");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const tabs = [
    "Pending",
    "Confirmed",
    "Processing",
    "Picked",
    "Shipped",
    "Delivered",
    "Cancelled",
  ];
  const tableHeaders = [
    "Order ID",
    "Created",
    "Customer",
    "Total",
    "Profit",
    "Status",
  ];

  // Dummy data for demonstration
  const orders = Array.from({ length: 50 }, (_, index) => ({
    orderId: index + 1,
    created: "2023-07-16",
    customer: `Customer ${index + 1}`,
    total: `$${(index + 1) * 10}.00`,
    profit: `$${(index + 1) * 2}.00`,
    status: activeTab,
  }));

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Pagination logic
  const filteredOrders = orders.filter((order) =>
    order.orderId.toString().includes(searchTerm)
  );
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const currentOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className={styles.container}>
      <main className={styles.rectangleParent}>
        <Header title={"Order Management"} />
        <div>
          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <div
                key={tab}
                className={activeTab === tab ? styles.active : ""}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
          <div className={styles.searchFilter}>
            <input
              type="text"
              placeholder="Search by ID"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <select>
              <option value="">Filter</option>
            </select>
          </div>
          <table>
            <thead>
              <tr>
                {tableHeaders.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((order) => (
                <tr key={order.orderId}>
                  <td>{order.orderId}</td>
                  <td>{order.created}</td>
                  <td>{order.customer}</td>
                  <td>{order.total}</td>
                  <td>{order.profit}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ul className={styles.pagination}>
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index + 1}>
                <button
                  className={currentPage === index + 1 ? styles.active : ""}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Page;
