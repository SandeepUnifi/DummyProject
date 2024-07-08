// src/components/UserTable.tsx
import React, { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  imageUrl: string;
}

const initialUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
    imageUrl: "https://picsum.photos/50",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    password: "password456",
    imageUrl: "https://picsum.photos/50",
  },
];

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [editIdx, setEditIdx] = useState<number | null>(null);
  const [formData, setFormData] = useState<User>({
    id: 0,
    name: "",
    email: "",
    password: "",
    imageUrl: "",
  });

  const handleEdit = (user: User) => {
    setEditIdx(user.id);
    setFormData(user);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    setUsers(users.map((user) => (user.id === formData.id ? formData : user)));
    setEditIdx(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User's Dashboard</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="py-2 px-4 border border-gray-300 text-left">SR</th>
            <th className="py-2 px-4 border border-gray-300 text-left">
              Image
            </th>
            <th className="py-2 px-4 border border-gray-300 text-left">Name</th>
            <th className="py-2 px-4 border border-gray-300 text-left">
              Email
            </th>
            <th className="py-2 px-4 border border-gray-300 text-left">
              Password
            </th>
            <th className="py-2 px-4 border border-gray-300 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.id}
              className={editIdx === user.id ? "bg-gray-100" : "bg-white"}
            >
              <td className="py-2 px-4 border border-gray-300">{index + 1}</td>
              <td className="py-2 px-4 border border-gray-300">
                <img
                  src={user.imageUrl}
                  alt={user.name}
                  className="w-10 h-10 rounded-full mx-auto"
                />
              </td>
              {editIdx === user.id ? (
                <>
                  <td className="py-2 px-4 border border-gray-300">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </td>
                  <td className="py-2 px-4 border border-gray-300">
                    <input
                      type="text"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-center">
                    <button
                      onClick={handleSave}
                      className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                    >
                      Save
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="py-2 px-4 border border-gray-300 text-gray-600">
                    {user.name}
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-gray-600">
                    {user.email}
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-gray-600">
                    {user.password}
                  </td>
                  <td className="py-2 px-4 border border-gray-300 text-center">
                    <button
                      onClick={() => handleEdit(user)}
                      className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
