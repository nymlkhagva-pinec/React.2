"use client";

import { useState } from "react";

const products = [
  { id: 1, title: "Laptop", price: 2500, category: "electronics" },
  { id: 2, title: "Phone", price: 1200, category: "electronics" },
  { id: 3, title: "T-Shirt", price: 80, category: "clothes" },
  { id: 4, title: "Shoes", price: 150, category: "clothes" },
  { id: 5, title: "Keyboard", price: 200, category: "electronics" },
];

function ProductCard(props) {
  const { product } = props;
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.price}₮</p>
    </div>
  );
}

export default function Page() {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    if (category === "all") {
      return true;
    }

    return product.category === category;
  });

  const searchedProducts = filteredProducts.filter((product) => {
    return product.title.toLowerCase().includes(search);
  });

  function handleCategory(selectedCategory) {
    setCategory(selectedCategory);
  }

  return (
    <main>
      <h1>Product Store</h1>

      <input
        placeholder="Search product..."
        onChange={(event) => setSearch(event.target.value)}
      />

      <button onClick={() => handleCategory("all")}>All</button>

      <button onClick={() => handleCategory("electronics")}>Electronics</button>

      <button onClick={() => handleCategory("clothes")}>Clothes</button>

      <section>
        {searchedProducts.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </section>
    </main>
  );
}
