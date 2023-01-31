import { useState } from 'react';
import './App.css';
import { Quote } from '../quote/Quote';

export function App() {
  const shippingChannels = ["Ocean", "Air"]
  const initialPreQuoteValues = { startingCountry: "", destinationCountry: "", quotePrice: 0, shippingChannel: "Air" }

  const [quote, setQuote] = useState()
  const [preQuote, setPreQuote] = useState(initialPreQuoteValues)
  const [quoteErrors, setQuoteErrors] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()
    setQuoteErrors({...quoteErrors, ...validate(preQuote)})
    if(Object.values(validate(preQuote)).join("")){
      return
    }
    setQuote({...quote, ...preQuote})
  } 
  
  const handleChange = (event) => {
    setPreQuote({...preQuote, [event.target.name]: event.target.value})
  }

  const validate = (values) => {
    const errors = {}
    errors.startingCountry = !values.startingCountry ? "Starting country is required!" : ""
    errors.destinationCountry = !values.destinationCountry ? "Destination country is required!" : ""
    errors.quotePrice =!values.quotePrice ? "Quote price is required!" : ""
    errors.shippingChannel = !values.shippingChannel ? "Select a shipping channel" : ""
    return errors
  }

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit} className="form-container" noValidate>
        <div className="input-container">
          <label className="app-label">
            Starting country
            <input type="text" name="startingCountry" onChange={handleChange} value={preQuote.startingCountry}/>
          </label>
          <p className="error-message">{quoteErrors.startingCountry}</p>
        </div>
        <div className="input-container">
          <label className="app-label">
            Destination country
            <input type="text" name="destinationCountry" onChange={handleChange} value={preQuote.destinationCountry}/>
          </label>
          <p className="error-message">{quoteErrors.destinationCountry}</p>
        </div>
        <div className="input-container">
          <label className="app-label">
            Quote price
            <input type="number" name="quotePrice" onChange={handleChange} value={preQuote.quotePrice}/>
          </label>
          <p className="error-message">{quoteErrors.quotePrice}</p>
        </div>
        <div className="input-container">
          <label className="app-label">
            Shipping Channel
            <select name="shippingChannel" onChange={handleChange} value={preQuote.shippingChannel}>
              {shippingChannels.map((channel) =>
              <option key={channel} >{channel}</option>
              )}
            </select>
          </label>
        <p className="error-message">{quoteErrors.shippingChannel}</p>
        </div>
        <button className="app-button" type="submit">Create quote</button>
      </form>
      {quote && <Quote quote={quote}/>}
    </div>
  );
}
