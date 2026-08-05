"use client"
import { useState } from "react";
export default function Home() {
  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
  const [value3, setValue3] = useState("")
  const [value4, setValue4] = useState("")

  const [products, setProducts] = useState ([])

  function AddtoCart() {
    
  }

  function handleAdd() {
    const newObject = {
      name: value1,
      price: value2,
      quantity: value3,
      imgUrl: value4
    };
    const newProducts = [...products, newObject,];
    setProducts(newProducts);
    // console.log(products)
  }
  return (
    <div>
      <input placeholder="Product name" style={{backgroundColor: "gray"}} type="text" onChange={(event) => setValue1(event.target.value)}/>
      <input placeholder="Product price" style={{backgroundColor: "green"}} type="text" onChange={(event) => setValue2(event.target.value)}/>
      <input placeholder="Product quantity" style={{backgroundColor: "crimson"}} type="text" onChange={(event) => setValue3(event.target.value)}/>
      <input placeholder="Product image URL" style={{backgroundColor: "lightyellow"}} type="text" onChange={(event) => setValue4(event.target.value)}/>
      <button onClick={handleAdd}>nahui</button>
      
      {products.map((product,index) => {
        return (
        <div key={index} style={{border: "2px solid gray", width: "300px", borderRadius: "20px", padding: "10px"}}>
          <p><img src={product.imgUrl}/></p>
          <p style={{fontSize : "20px", fontWeight: "space-between"}}>{product.name}</p>
          <div style={{display: "flex", justifyContent: "space-between"}}>
           <p>{product.price}</p>
           <button style={{borderRadius: "5px", backgroundColor: "lightskyblue", padding: "0 5px"}}>Add To Cart</button>
           <p>{product.quantity}</p>
          </div>
        </div> 
        )
      })}
    
    </div>
  );
}
