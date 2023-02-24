import React, { useEffect, useState } from "react";
import axios from "axios";
import "./main.css"

const Main2 = ()=> {
const [data, setData]=useState([]);
const [searchApiData,setSearchApiData] = useState([]);
const [sortasc, setSortAsc]=useState([]);
const [sortdsc, setSortDsc]=useState([]);
const [filterVal, setFilterVal]=useState('');

useEffect(() => {
  const GetRandomData = async()=>{
    const result = await axios("https://dummyjson.com/products");
     if(result){
   setData(result.data.products)
   setSearchApiData(result.data.products)
     }
   }
   GetRandomData();
}, []);

const numAscending = ()=>{
const sortdataA = data.sort((a, b) =>{
  return  a.price-b.price
 });
 setSortAsc({sortasc:sortdataA})
}

const numDescending =()=> {
const sortdataD = data.sort((a, b) =>{
  return b.price-a.price;
});
setSortDsc({sortdsc:sortdataD})
}

const handleFilter = (e)=>{
  if(e.target.value==''){
    setData(searchApiData)
  }
  else{
  const filterdata = searchApiData.filter((item)=>item.title.toLowerCase().includes(e.target.value.toLowerCase()));
  setData(filterdata);
}
setFilterVal(e.target.value)
}

if (!data.length) return <h3>Loading...</h3>;

return (
 <div className="row">
  <div className="button">
    <div className="sort">
    <span><h2>Sort By :</h2></span>
    <span><button className="btn1" onClick={()=>numAscending()}>Low-High</button></span>
    <span><button className="btn2" onClick={()=>numDescending()}>High-Low</button></span> 
    </div>
    <div className="search">
    <input type="search" placeholder="search title"  value={filterVal}
      onChange={(e)=>handleFilter(e)} />
    </div>
  </div>
  <div>
     {data ? 
     data.map((item,index) => (
      <div className="column" key={index}>
      <img src={item.thumbnail} alt={item.thumbnail}></img>
       <h2> Title: {item.title} </h2>
       <p> Price: {item.price}</p>
       <p> Brand: {item.brand}</p>
       <p> Category: {item.category}</p>
       <p> Description: {item.description}</p>
      </div>
      )):"No Data Found"}
     </div>
  </div>
);
}
export default Main2;