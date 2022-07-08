import React, { useState } from "react";
import text from "./helper/data";
import "./App.css"

const App = () => {
  
  const [number, setNumber] = useState(1);
  const [data, setData] = useState([]);
  const [show,setShow]=useState(true);
  
  const handleChange = (e) => { 
    setNumber(e.target.value);
    // console.log(e.target.value);
  };
  console.log(number);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(number>=1){
      setData(text.slice(0,number));
      setShow(false)
    }else{
      setData([])
      alert("Please enter a number greater than 1")
    }
  };
  // console.log(text.length);
  // console.log(data[0]);
  // console.log(data.slice(0,number))
  
  return (
    <div className="main-container">
      <h1 className="header">TIRED OF BORING LOREM IPSUM?</h1>
      <form className="form">
        <label htmlFor="number">Paragraphs: </label>
        <input
          onChange={handleChange}
          type="number"
          id="number"
          name="number"
          min="1"
          value={number}
        />
        <button onClick={handleSubmit} type="submit">
          GENERATE
        </button>
      </form>
      {show ? (
        <article>
          <div className="list">
              <p >{text[1]}</p>
            </div>
      </article>
      ):
        (<article>
        {data.map((item,index) => {
          return (
            <div className="list" key={index}>
              <p >{item}</p>
            </div>
          );
        })}
      </article>)
      }
      
    </div>
  );
};

export default App;
