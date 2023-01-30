import './App.css';
import { Quote } from '../quote/Quote';
import { useState } from 'react';

export function App() {
  let fields = ["Starting country", "Destination country", "Quote price"]
  let shippingChannels = ["Ocean", "Air"]

  const [quote, setQuote] = useState({
    "Starting country": "",
    "Destination country": "",
    "Quote price": 0,
    "Shipping channel": ""
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    const startingCountry = event.target.elements["Starting country"].value
    const destinationCountry = event.target.elements["Destination country"].value
    const quotePrice = event.target.elements["Quote price"].value
    const shippingChannel = event.target.elements["Shipping channel"].value

    setQuote({
      ...quote, 
      "Starting country": startingCountry, 
      "Destination country": destinationCountry, 
      "Quote price": quotePrice, 
      "Shipping channel": shippingChannel
    })
  }

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit} className="form-container">
        {fields.map((field) => 
          <label key={field} className="label">
            {field}
            <input type="text" name={field} />
          </label>
        )}
        <label className="label">
          Shipping Channel
          <select name="Shipping channel" id="Shipping channel">
            {shippingChannels.map((channel) =>
            <option key={channel} >{channel}</option>
            )}
          </select>
        </label>
        <button type="submit">Create quote</button>
      </form>
      <p>{JSON.stringify(quote)}</p>
      <Quote quote={quote}/>
    </div>
  );
}
