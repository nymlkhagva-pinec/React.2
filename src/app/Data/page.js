"use client";

import { responseCookiesToRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [type, setType] = useState("all");
  const [value, setValue] = useState("");
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  const filteredProducts = products.filter((product) => {
    if (type === "cheap") {
      return product.price < 50;
    } else if (type === "medium") {
      return product.price >= 50 && product.price <= 200;
    } else if (type === "expensive") {
      return product.price > 200;
    } else if (type === "search") {
      return product.title.toLowerCase().includes(value.toLowerCase());
    } else {
      return product;
    }
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          style={{ backgroundColor: "gainsboro", borderRadius: "5px" }}
          onChange={(event) => setValue(event.target.value)}
        />
        <button onClick={() => setType("search")}>Search</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "20px",
        }}
      >
        <button
          onClick={() => setType("cheap")}
          style={{
            backgroundColor: "lightseagreen",
            width: "100px",
            borderRadius: "5px",
          }}
        >
          -$50
        </button>
        <button
          onClick={() => setType("medium")}
          style={{
            backgroundColor: "lightseagreen",
            width: "100px",
            borderRadius: "5px",
          }}
        >
          $50-$200
        </button>
        <button
          onClick={() => setType("expensive")}
          style={{
            backgroundColor: "lightseagreen",
            width: "100px",
            borderRadius: "5px",
          }}
        >
          $200+
        </button>
        <button
          onClick={() => setType("all")}
          style={{
            backgroundColor: "lightseagreen",
            width: "100px",
            borderRadius: "5px",
          }}
        >
          Show All
        </button>
      </div>
      <div
        style={{ display: "grid", gridTemplateColumns: "auto auto auto auto" }}
      >
        {filteredProducts.map((product, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "3px solid gray",
                margin: "10px",
              }}
            >
              {product.title}
              <img src={product.thumbnail} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "200px",
                }}
              >
                <p>${product.price}</p>
                <p>{product.stock} left</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
