import React, { useState, useEffect } from "react";

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
  {
    id: 3,
    name: "Vishal Doe",
    email: "vishal@example.com",
    password: "password123",
    imageUrl: "https://picsum.photos/50",
  },
  {
    id: 4,
    name: "Lorven Smith",
    email: "lorven@example.com",
    password: "password456",
    imageUrl: "https://picsum.photos/50",
  },
];

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(initialUsers);
  const [editIdx, setEditIdx] = useState<number | null>(null);
  const [formData, setFormData] = useState<User>({
    id: 0,
    name: "",
    email: "",
    password: "",
    imageUrl: "",
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const filtered = users.filter((user) =>
        Object.values(user).some((value) =>
          value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setFilteredUsers(filtered);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, users]);

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

  const handleAddUser = () => {
    setFormData({ id: 0, name: "", email: "", password: "", imageUrl: "" });
    setIsPopupOpen(true);
  };

  const handleSaveNewUser = () => {
    const newUser = {
      ...formData,
      id: users.length ? users[users.length - 1].id + 1 : 1,
      imageUrl: "https://picsum.photos/50",
    };
    setUsers([...users, newUser]);
    setIsPopupOpen(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    const filtered = users.filter((user) =>
      Object.values(user).some((value) =>
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">User's Dashboard</h1>
        <button
          onClick={handleAddUser}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Add Data
        </button>
      </div>
      <div className="relative mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          className="pl-8 pr-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:bg-gray-600"
          placeholder="Search..."
        />
        <button
          onClick={handleSearchClick}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ml-2"
        >
          Search
        </button>
      </div>
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
          {filteredUsers.map((user, index) => (
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

      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Add New User</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <input
              type="text"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsPopupOpen(false)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveNewUser}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;
