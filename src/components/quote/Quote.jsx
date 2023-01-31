import { useState, useEffect } from 'react';
import './Quote.css';
import boat from '../../assets/boat.png'
import plane from '../../assets/plane.png'
import { getDeliveryDaysRange, getFormattedDate } from './hooks';

export function Quote({quote}){
    const from = quote.startingCountry
    const to = quote.destinationCountry
    const price = quote.quotePrice
    const label = quote.shippingChannel === "Ocean" ? "Traditional ocean freight" : "Traditional air freight"
    const logo = quote.shippingChannel === "Ocean" ? boat : plane

    const [dayRanges, setDayRanges] = useState({minDays: "", maxDays: ""})
    const [dateRanges, setDateRanges] = useState({minDate: "", maxDate: ""})

    useEffect(() => {
        const today = new Date().getTime()
        const newDayRanges = getDeliveryDaysRange(quote.shippingChannel)
        const newDateRanges = {minDate: getFormattedDate(today+86400000*newDayRanges.minDays), maxDate: getFormattedDate(today+86400000*newDayRanges.maxDays)}
        setDayRanges({...dayRanges, ...newDayRanges})
        setDateRanges({...dateRanges, ...newDateRanges})
    }, [quote])

    return(
        <div className="quote-container">
            <div className="quote-channel-title">
                <img src={logo} alt="shipping channel logo" width="50px" height="50px"/>
                <p className='quote-channel'>{label}</p>
            </div>

            <div className="quote-channel-body">
                <p className="quote-days-delivery">{`${dayRanges.minDays}-${dayRanges.maxDays} days`}</p>
                <p className="quote-estimated-delivery">Estimated delivery</p>
                <p className="quote-delivery-dates">{`${dateRanges.minDate} - ${dateRanges.maxDate}`}</p>
            </div>
            <div className='quote-price'>
                <p className="quote-header">{`${from} -> ${to}`}</p>
                <p className="quote-body">US$ {(+price).toLocaleString('en-US')}</p>  
            </div>
        </div>
    )
}