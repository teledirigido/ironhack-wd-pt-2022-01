// src/pages/AddApartmentPage.js
import { useNavigate } from "react-router-dom"; // <== IMPORT
import { useState } from "react";
import axios from 'axios';

function AddApartmentPage() {

  const [title, setTitle] = useState('');
  const [pricePerDay, setPricePerDay] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      pricePerDay: pricePerDay
    }
    axios.post("https://ironbnb-m3.herokuapp.com/apartments", data).then( () => {
      console.log('Property created');
      setTitle('');
      setPricePerDay(0);
      navigate('/');
    })
  }

  return (
    <div className="AddApartmentPage">
      <h3>Add New Apartment</h3>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" 
            value={title} 
            onChange={ (e) => { setTitle(e.target.value) } }
          />
        </p>
        <p>
          <label htmlFor="pricePerDay">Price Per day</label>
          <input type="text" id="pricePerDay" name="pricePerDay" 
            value={pricePerDay} 
            onChange={ (e) => { setPricePerDay(e.target.value) } }
          />
        </p>
        <p>
          <button type="submit">Add</button>
        </p>
      </form>
    </div>
  );
}

export default AddApartmentPage;
