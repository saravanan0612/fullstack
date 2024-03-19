import React from 'react';
import { Link } from 'react-router-dom';

function AdminSidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 h-full flex flex-col justify-between">
      {/* Sidebar Header */}
      <div className="py-4 px-6">
        <h2 className="text-2xl font-semibold">Admin Panel</h2>
        <p className="text-sm mt-2">Welcome, Admin</p>
      </div>
      
      {/* Sidebar Menu */}
      <div className="px-6">
        <ul className="space-y-2">
          <li>
            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Recharge History</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700"><Link to={"/solidpay/admin/userdetails"}>Users</Link></a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Settings</a>
          </li>
        </ul>
      </div>
      
      {/* Sidebar Footer */}
      <div className="py-4 px-6 border-t border-gray-700">
        <p className="text-xs">&copy; 2024 Recharge App</p>
      </div>
    </div>
  );
}

export default AdminSidebar;
