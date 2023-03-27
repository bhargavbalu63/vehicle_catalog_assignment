import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

let data=[
  {
    name:"BMW",
    country:"GERMANY",
    type:"passenger car"
  },{
    name:"TESLA",
    country:"USA",
    type:"passenger car"
  },
  {
    name:"BUGGATI",
    country:"FRANCE",
    type:"passenger car"
  },
  {
    name:"BUELI",
    country:"USA",
    type:"motor cycle"
  },
  {
    name:"NINJA",
    country:"USA",
    type:"motor cycle"
  },
  {
    name:"HOMBILT",
    country:"USA",
    type:"trailer"
  },
  {
    name:"LAMBORGINI",
    country:"GERMANY",
    type:"trailer"
  },
  {
    name:"ACG",
    country:"USA",
    type:"low speed vehicle"
  },
  {
    name:"HONDA",
    country:"SOUTHAMERICA",
    type:"low speed vehicle"
  },
  {
    name:"TATA",
    country:"INDIA",
    type:"low speed vehicle"
  },
  {
    name:"FERRARI",
    country:"GERMANY",
    type:"high speed vehicle"
  },
  {
    name:"KAWASAKI",
    country:"GERMANY",
    type:"high speed vehicle"
  },
  {
    name:"HYUNDAI",
    country:"FRANCE",
    type:"medium speed vehicle"
  },
  {
    name:"MARUTHI",
    country:"CANADA",
    type:"passenger car"
  }
]
const [search, setSearch]= useState('')
const[filter, setFilter]= useState([])

const[option, setOption]= useState('')
const[optionFilter, setOptionFilter]= useState([])




const filterData= (search)=>
{
   
  const filtered = data.filter((data)=>
  {
    return data.name.toLowerCase().includes(search.toLowerCase())
  })
  setFilter(filtered)
}


useEffect(()=>
{
  filterData(search)

})




const optionfilterData= (option)=>
{
   if(option==="All")
   {
     return  setOptionFilter(data)
   }
  const filtered = data.filter((data)=>
  {
    return data.type.toLowerCase().includes(option.toLowerCase())
  })
  setOptionFilter(filtered)
}


useEffect(()=>
{
  optionfilterData(option)
})



  return (
    <div className="App">

 <h1>
  VEHICLE MANUFACTURERS
 </h1>
  <div id="header">
    <div id="search">
      Search : <input value={search} onChange={(e)=>setSearch(e.target.value) } placeholder={"Type here"}  type={"text"}   />
    </div>

    <div>
      Filter by vehicle type : 
       <select value={option}onChange={(e)=>setOption(e.target.value)} >
        <option>All</option>
        <option>passenger car</option>
        <option>motor cycle</option>
        <option>trailer</option>
        <option>low speed vehicle</option>
       <option> medium speed vehicle</option>
       <option> high speed vehicle</option>
       </select>
    </div>
  </div>


    <table id="table" >
      <th>
        <td>
     NAME
        </td>
        <td>
     COUNTRY
        </td>
        <td>
TYPE
        </td>
      </th>
      <tbody>


{search? <div>
  {filter.map((item,index)=>
{
  return <div key={index}>
   <tr >
        <td style={{backgroundColor:"lightgrey"}}>{item.name}</td>
        <td style={{backgroundColor:"lightgrey"}}>{item.country}</td>
        <td style={{backgroundColor:"lightgrey"}}>{item.type}</td>
      </tr>
  </div>


})
}
</div> :<div>


{optionFilter.map((item,index)=>
{
  return <div key={index}>
   <tr >
        <td style={{backgroundColor:"lightgrey"}}>{item.name}</td>
        <td style={{backgroundColor:"lightgrey"}}>{item.country}</td>
        <td style={{backgroundColor:"lightgrey"}}>{item.type}</td>
      </tr>
  </div>
})
}




           </div>}
 <div>

 </div>










{/* 
{data.map((item,index)=>
  {
    return <div key={index} >



      <tr >
        <td style={{backgroundColor:"lightgrey"}}>{item.name}</td>
        <td style={{backgroundColor:"lightgrey"}}>{item.country}</td>
        <td style={{backgroundColor:"lightgrey"}}>{item.type}</td>
      </tr>
       <br />
      </div>
   
  })} */}
 </tbody>
</table>

    </div>
  );
}

export default App;
