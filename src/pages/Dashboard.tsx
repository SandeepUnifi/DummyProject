// pages/Dashboard.tsx
import React from "react";
import UserTable from "../component/UserTable";
const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center my-8">This is the Dashboard page</h1>
      <UserTable />
    </div>
  );
};

export default Dashboard;
