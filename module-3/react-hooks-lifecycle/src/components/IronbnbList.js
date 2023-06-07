import { useState, useEffect } from "react";
import axios from 'axios';

const apiURL = "https://ironbnb-m3.herokuapp.com/apartments";


function IronbnbList() {

  const [fetching, setFetching] = useState(true);
  const [apartments, setApartments] = useState([]);

  useEffect( () => {
    axios.get(apiURL).then( response => {
      setTimeout( () => {
        setApartments(response.data);
        setFetching(false);
      }, 300);
    })
  }, []);

  return (
    <div>
      {fetching && <p>Loading ...</p>}

      {apartments.map( item => {
        return (
          <div key={item.title}>
            <h3>{item.title}</h3>
            <p>Price: {item.pricePerDay}</p>
          </div>
        )
      })}
    </div>
  )
}

export default IronbnbList;