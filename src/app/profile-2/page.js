"use client";

import { useEffect, useState } from "react";
import { UserCard } from "../Components/Profiles.js";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const localUsers = window.localStorage.getItem("users");

    setUsers(JSON.parse(localUsers) || []);

    if (!localUsers) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          const newUsers = data.map((user) => {
            return { ...user, isSave: false };
          });
          setUsers(newUsers);
        });
    }
  }, []);

  function handleOpenModal() {
    setIsOpen(!isOpen);
  }

  const filteredUsers = users.filter((user) => user.isSave);
  return (
    <div>
      <div className="relative">
        <div className="w-dvw flex justify-center">
          <button onClick={handleOpenModal} className="bg-gray-400 w-88 m-5">
            Saved Users
          </button>
        </div>

        {isOpen && (
          <div
            className={`w-100 h-100 bg-gray-300 rounded-2xl absolute left-10 ${isOpen ? "opacity-100" : "opacity-0"} transition-all flex flex-col gap-3 z-20 absolute left-88 overflow-scroll`}
          >
            {filteredUsers.map((user, index) => {
              return (
                <div
                  key={index}
                  className="bg-blue-300 flex justify-between p-2 items-center rounded-2xl z-20"
                >
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

                      window.localStorage.setItem(
                        "users",
                        JSON.stringify(newUsers),
                      );
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
