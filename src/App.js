import React from "react";
import "./App.css";
import Header from "./components/header";
import OrderId from "./components/orderId";
import Supplier from "./components/supplier";
import DataTable from "./components/dataTable";
import MissingItemModal from "./components/missingItemModal";
import { DataProvider } from "./Provider/TableDataProvider";

function Dashboard() {
  return (
    <DataProvider>
      <Header />
      <OrderId />
      <Supplier />
      <DataTable />
      <MissingItemModal />
    </DataProvider>
  );
}

export default Dashboard;
