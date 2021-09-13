import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import QuoteElement from "./components/QuoteElement";

const App = () => {
  //the api data is stored here
  const [data, setData] = useState([]);

  //get the api data
  useEffect(() => {
    const getQuotes = async () => {
      const response = await Axios.get(
        "https://thesimpsonsquoteapi.glitch.me/quotes?count=50"
      );
      console.log("first response", response.data);
      setData(response.data);
    };
    getQuotes();

  },[]);

  const onDelete = (index) => {
    let items = [...data];
    items.splice(index,1);
    setData(items);
  }

  return (
    <>
    <div style={{ width:"80%", margin:"auto"}}>
      <h1>Simpson Quotes!</h1>
      {data.length > 0 ?
      ( data.map((item, index) => (
        <QuoteElement quote={item.quote} character={item.character} image={item.image} characterDirection={item.characterDirection} index={index} onDelete={onDelete}/>
      ))

      ) : (
        <h2>
          No more quotes
        </h2>
      )

    }
     
      </div>
    </>
  );
};

export default App;
