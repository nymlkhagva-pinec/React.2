"use client";

import { useEffect, useState } from "react";
import { UserCard } from "../Components/Profiles.js";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const newUsers = data.map((user) => {
          return { ...user, isSave: false };
        });
        setUsers(newUsers);
      });
  }, []);

  function handleOpenModal() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <button onClick={handleOpenModal}>Saved Users</button>

      {}
      <div
        className={`w-100 h-100 bg-gray-200 absolute left-10 ${isOpen ? "opacity-100" : "opacity-0"} transition-all`}
      ></div>
      <div className="flex flex-wrap gap-10 m-4">
        {users.map((user) => {
          return (
            <UserCard
              key={user.id}
              user={user}
              setUsers={setUsers}
              users={users}
            />
          );
        })}
      </div>
    </div>
  );
}
