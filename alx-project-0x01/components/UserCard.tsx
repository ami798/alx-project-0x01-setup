// components/UserCard.jsx

import React from "react";

export default function UserCard({ user }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300">
      <img
        src={user.avatar}
        alt={`${user.full_name}'s avatar`}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          {user.full_name}
        </h2>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>
    </div>
  );
}
