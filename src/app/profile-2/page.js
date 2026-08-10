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

  const filteredUsers = users.filter((user) => user.isSave);
  return (
    <div>
      <div>
        <button onClick={handleOpenModal} className="bg-gray-400">
          Saved Users
        </button>

        {isOpen && (
          <div
            className={`w-100 h-100 bg-gray-200 rounded-2xl absolute left-10 ${isOpen ? "opacity-100" : "opacity-0"} transition-all flex flex-col gap-3`}
          >
            {filteredUsers.map((user) => {
              return (
                <div className="bg-blue-300 flex justify-between p-2 items-center rounded-2xl">
                  <p>{user.name}</p>
                  <button
                    className="bg-red-500 rounded-lg p-1"
                    onClick={() => {
                      const newUsers = users.map((mapUser) => {
                        if (mapUser.id === user.id) {
                          return { ...mapUser, isSave: false };
                        } else {
                          return mapUser;
                        }
                      });
                      setUsers(newUsers);
                    }}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

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
