"use client"
import { useState } from "react";
export default function Home() {
  const tops = {
  sunny: ["👕 T-Shirt", "👚 Crop Top", "👕 Polo"],
  cloudy: ["🧥 Jacket", "👕 Hoodie", "👕 Long Sleeve"],
  rainy: ["🧥 Raincoat", "☂️ Hoodie", "🧥 Windbreaker"],
  };
 
  const bottoms = {
  sunny: ["🩳 Shorts", "👖 Jeans", "👖 Skirt"],
  cloudy: ["👖 Jeans", "👖 Cargo", "👖 Joggers"],
  rainy: ["👖 Waterproof Pants", "👖 Jeans", "👖 Black Pants"],
  };
 
  const shoes = {
  sunny: ["👟 Sneakers", "🩴 Sandals", "👟 Converse"],
  cloudy: ["👟 Running Shoes", "🥾 Boots", "👟 Sneakers"],
  rainy: ["🥾 Rain Boots", "👟 Waterproof Shoes", "🥾 Boots"],
  };

  const [Weather, setWeather] = useState("")
  const [top, setTop] = useState("")
  const [bottom, setBottom] = useState("")
  const [shoe, setShoe] = useState("")

  
  function handleWeather(HowItIs) {
    setWeather(HowItIs)
    let random = Math.floor(Math.random() * 3)
    let random2 = Math.floor(Math.random() * 3)
    let random3 = Math.floor(Math.random() * 3)
    if (HowItIs === "☀️ Sunny") {
        setTop(tops.sunny[random])
        setBottom(bottoms.sunny[random2])
        setShoe(shoes.sunny[random3])
    } else if (HowItIs === "☁️ Cloudy") {
        setTop(tops.cloudy[random])
        setBottom(bottoms.cloudy[random2])
        setShoe(shoes.cloudy[random3])
    } else if (HowItIs === "🌧️ Rainy") {
        setTop(tops.rainy[random])
        setBottom(bottoms.rainy[random2])
        setShoe(shoes.rainy[random3])
    }
  }

  return(
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "15px", width: "100vw", height: "100vh", justifyContent: "center"}}>
        <p>👕 Outfit Generator</p>
        <div style={{display: "flex", gap: "20px"}}>
         <button onClick={() => handleWeather("☀️ Sunny")} >☀️ Sunny</button>
         <button onClick={() => handleWeather("☁️ Cloudy")}>☁️ Cloudy</button>
         <button onClick={() => handleWeather("🌧️ Rainy")}>🌧️ Rainy</button>
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <p style={{fontWeight: "bolder", fontSize: "25px"}}>{Weather}</p>
            <div style={{width: "300px", height: "150px", borderRadius: "20px", border: "3px solid gray", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div>
                <p>{top}</p>
                <p>{bottom}</p>
                <p>{shoe}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
