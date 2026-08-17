"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase/client";

export default function Home() {
  const [table, setTable] = useState([]);
  const [value, setValue] = useState("");

  const getData = async () => {
    const { data, error } = await supabase.from("messages").select();
    console.log("data", data);
    console.log("error", error);
    setTable(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handlePrint = async () => {
    const { data, error } = await supabase
      .from("messages")
      .insert({ text: value })
      .select();

    console.log("data", data);
    console.log("error", error);
  };

  return (
    <div>
      <input onChange={(event) => setValue(event.target.value)} />
      <button onClick={handlePrint}>Print</button>
      {table.map((each, index) => {
        return (
          <div key={index}>
            <p>{each.text}</p>
          </div>
        );
      })}
    </div>
  );
}
