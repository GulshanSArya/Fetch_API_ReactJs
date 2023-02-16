import React, { useEffect, useState } from "react";
import axios from "axios";
import "./main.css"

const Main2= ()=> {
const [data, setData]=useState([]);

useEffect(() => {
  GetRandomData();
}, []);

const GetRandomData= ()=>{
 axios.get("https://dummyjson.com/products")
 .then((result)=>{setData(result.data.results);})
}

const numAscending =()=> [...data].sort((a, b) => a.price- b.price);
const numDescending =()=> [...data].sort((a, b) => b.price-a.price );

if (!data.length) return <h3>Loading...</h3>;

return (
 <div className="row">
  <div>
    <h3>Sort</h3>
  <button onClick={()=>numAscending()}>Low to Hight</button>
  <button onClick={()=>numDescending()}>High to Low</button>
  </div>
  
     {data.map((item,i) => (
      <div className="column" key={i}>
      <img src={item.thumbnail} alt={item.thumbnail}></img>
       <h2> Title: {item.title} </h2>
       <p> Price: {item.price}</p>
       <p> Brand: {item.brand}</p>
       <p> Category: {item.category}</p>
       <p> Description: {item.description}</p>
      </div>
       
     ))}
  </div>

);
}
export default Main2;