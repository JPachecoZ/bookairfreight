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

  const [showQuote, setShowQuote] = useState(false)

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
    setShowQuote(true)
  }

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit} className="form-container">
        {fields.map((field) => 
          <label key={field} className="app-label">
            {field}
            <input type="text" name={field} required/>
          </label>
        )}
        <label className="app-label">
          Shipping Channel
          <select name="Shipping channel" id="Shipping channel" required>
            {shippingChannels.map((channel) =>
            <option key={channel} >{channel}</option>
            )}
          </select>
        </label>
        <button className="app-button" type="submit">Create quote</button>
      </form>
      {showQuote && <Quote quote={quote}/>}
    </div>
  );
}
