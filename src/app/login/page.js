"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabase/client";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const lengthValid = password.length >= 8;
  const upperCase = /[A-Z]/.test(password);
  const lowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const userLengthValid = username.length >= 4;

  async function handleSupa() {
    const { data, error } = await supabase
      .from("nym.2.login")
      .insert({ name: username, password: password })
      .select();
    console.log("data", data);
    console.log("error", error);
  }

  function localSave() {
    window.localStorage.setItem("username", username);
    window.localStorage.setItem("password", password);
  }

  function handleValidation() {
    if (username.trim() === "") return;
    if (password.length < 8) return;
    if (!/[A-Z]/.test(password)) return;
    if (!/[a-z]/.test(password)) return;
    if (!/[0-9]/.test(password)) return;

    handleSupa();

    localSave();

    toast.success("User Successfully Saved!");
  }

  return (
    <div className="flex flex-col w-lg gap-4 p-10">
      <p className="text-2xl font-bold">Create User</p>
      <input
        onChange={(event) => setUsername(event.target.value)}
        type="text"
        className="border-2"
        placeholder=" Username"
      />

      {!userLengthValid && (
        <p className="text-red-700">At least 4 characters required</p>
      )}

      <input
        onChange={(event) => setPassword(event.target.value)}
        type="password"
        className="border-2"
        placeholder=" Password"
      />
      {!lengthValid && (
        <p className="text-red-700">At least 8 characters required</p>
      )}

      {!upperCase && (
        <p className="text-red-700">At least 1 uppercase letter required</p>
      )}

      {!lowerCase && (
        <p className="text-red-700">At least 1 lowercase letter required</p>
      )}
      {!hasNumber && <p className="text-red-700">At least 1 number required</p>}

      {lengthValid && upperCase && lowerCase && hasNumber ? (
        <p className="text-green-600">Strong Password</p>
      ) : (
        ""
      )}
      <button onClick={handleValidation} className="bg-black text-white">
        Create User
      </button>
    </div>
  );
}
