import './Quote.css';
import boat from '../../assets/boat.png'
import plane from '../../assets/plane.png'
import { getDeliveryDaysRange, getFormattedDate } from './hooks';

export function Quote({quote}){
    const from = quote["Starting country"]
    const to = quote["Destination country"]
    const price = quote["Quote price"]
    const label = quote["Shipping channel"] === "Ocean" ? "Traditional ocean freight" : "Traditional air freight"
    const logo = quote["Shipping channel"] === "Ocean" ? boat : plane

    const today = new Date().getTime()
    const {minDays, maxDays} = getDeliveryDaysRange(quote["Shipping channel"])
    const [minDate, maxDate] = [getFormattedDate(today+86400000*minDays), getFormattedDate(today+86400000*maxDays)]


    return(
        <div className="quote-container">
            <div className="quote-channel-title">
                <img src={logo} alt="shipping channel logo" width="50px" height="50px"/>
                <p className='quote-channel'>{label}</p>
            </div>

            <div className="quote-channel-body">
                <p className="quote-days-delivery">{`${minDays}-${maxDays} days`}</p>
                <p className="quote-estimated-delivery">Estimated delivery</p>
                <p className="quote-delivery-dates">{`${minDate} - ${maxDate}`}</p>
            </div>
            <div className='quote-price'>
                <p className="quote-header">{`${from} -> ${to}`}</p>
                <p className="quote-body">US$ {(+price).toLocaleString('en-US')}</p>  
            </div>
        </div>
    )
}