import React from 'react';

function UserDetails() {
  // Dummy user data
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'User' },
    { id: 4, name: 'Bob Williams', email: 'bob@example.com', role: 'User' },
  ];

  return (
    <div className="flex justify-end"> {/* Align to the right */}
      <div className="w-3/4 p-8"> {/* Adjust the width and padding as needed */}
        <h2 className="text-4xl font-semibold mb-4">User Details</h2> {/* Larger text size */}
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">ID</th> {/* Larger text size */}
              <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Name</th> {/* Larger text size */}
              <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Email</th> {/* Larger text size */}
              <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Role</th> {/* Larger text size */}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map(user => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserDetails;
