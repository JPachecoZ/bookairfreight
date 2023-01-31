import './App.css';
import { Quote } from '../quote/Quote';
import { useState } from 'react';

export function App() {
  let shippingChannels = ["Ocean", "Air"]

  const [preQuote, setPreQuote] = useState({
    startingCountry: "",
    destinationCountry: "",
    quotePrice: 0,
    shippingChannel: "Air"
  })

  const [quote, setQuote] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    setQuote({...quote, ...preQuote})
  } 
  
  const handleChange = (event) => {
    setPreQuote({...preQuote, [event.target.name]: event.target.value})
  }

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit} className="form-container">
        <label className="app-label">
          Starting country
          <input type="text" name="startingCountry" onChange={handleChange} value={preQuote.startingCountry} required/>
        </label>
        <label className="app-label">
          Destination country
          <input type="text" name="destinationCountry" onChange={handleChange} value={preQuote.destinationCountry} required/>
        </label>
        <label className="app-label">
          Quote price
          <input type="text" name="quotePrice" onChange={handleChange} value={preQuote.quotePrice} required/>
        </label>
        <label className="app-label">
          Shipping Channel
          <select name="shippingChannel" onChange={handleChange} value={preQuote.shippingChannel} required>
            {shippingChannels.map((channel) =>
            <option key={channel} >{channel}</option>
            )}
          </select>
        </label>
        <button className="app-button" type="submit">Create quote</button>
      </form>
      {quote && <Quote quote={quote}/>}
    </div>
  );
}
