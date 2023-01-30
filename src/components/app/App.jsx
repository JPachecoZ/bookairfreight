import './App.css';
import { useState } from 'react';

export function App() {
  let fields = ["Starting Country", "Destination Country", "Quote Price"]
  let shippingChannels = ["Ocean", "Air"]

  const [quote, setQuote] = useState({
    "Starting Country": "",
    "Destination Country": "",
    "Quote Price": 0,
    "Shipping Channel": ""
  })

  const handleChange =(event)=>{
    const { name, value } = event.target
    setQuote({...quote, [name]: value})
  }

  return (
    <div class="container">
      {fields.map((field, index) => 
        <label class="label">
          {field}
          <input key={index} type="text" name={field} onChange={handleChange} value={quote[field]}/>
        </label>
      )}
      <label class="label">
        Shipping Channel
        <select name="Shipping Channel" id="Shipping Channel" onChange={handleChange}>
          {shippingChannels.map((channel, index) =>
          <option key={index} value={channel}>{channel}</option>
          )}
        </select>
      </label>
      <p>{JSON.stringify(quote)}</p>
    </div>
  );
}
