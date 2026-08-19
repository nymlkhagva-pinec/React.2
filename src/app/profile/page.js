"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase/client";

export default function Home() {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const gotUserName = window.localStorage.getItem("username") || "";
    const gotPass = window.localStorage.getItem("password") || "";
    const gotId = window.localStorage.getItem("id") || "";

    setUser({ name: gotUserName, password: gotPass, id: gotId });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditToggle = () => {
    if (!isDisabled) {
      window.localStorage.setItem("username", user.name);
      window.localStorage.setItem("password", user.password);
    }
    setIsDisabled((prev) => !prev);
  };

  const supamen1 = async () => {
    const { data, error } = await supabase
      .from("nym.2.login")
      .update({ name: user.name })
      .eq("id", user.id)
      .select();
    console.log(data, error);
  };
  const supamen2 = async () => {
    const { data, error } = await supabase
      .from("nym.2.login")
      .update({ password: user.password })
      .eq("id", user.id)
      .select();
    console.log(data, error);
  };

  const supamen = () => {
    supamen1();
    supamen2();
  };

  console.log(user.name);

  return (
    <div className="m-5 p-4 bg-gray-300 w-96 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <input
          name="name"
          disabled={isDisabled}
          value={user.name}
          onChange={handleChange}
          placeholder="Username"
          className="p-1 border rounded disabled:bg-gray-200"
        />
        {/* <button
          onClick={handleEditToggle}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          {isDisabled ? "Edit" : "Save"}
        </button> */}
        {isDisabled ? (
          <button onClick={handleEditToggle}>Edit</button>
        ) : (
          <button onClick={supamen}>save</button>
        )}
      </div>
    </div>
  );
}
