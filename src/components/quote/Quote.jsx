import './Quote.css';
import boat from '../../assets/boat.png'
import plane from '../../assets/plane.png'

export function Quote({quote}){
    const from = quote["Starting country"]
    const to = quote["Destination country"]
    const price = quote["Quote price"]
    const label = quote["Shipping channel"] === "Ocean" ? "Traditional ocean freight" : "Traditional air freight"
    const logo = quote["Shipping channel"] === "Ocean" ? boat : plane

    return(
        <div className="quote-container">
            <div className="quote-channel-title">
                <img src={logo} alt="shipping channel logo" width="50px" height="50px"/>
                <p className='quote-channel'>{label}</p>
            </div>

            <div>
                <p className="quote-days-delivery">10-12 days</p>
                <p className="quote-estimated-delivery">Estimated delivery</p>
                <p className="quote-delivery-dates">Oct 10 - Oct 12</p>
            </div>
            <div className='quote-price'>
                <p className="quote-header">{`${from} -> ${to}`}</p>
                <p className="quote-body">US$ {price}</p>
            </div>
        </div>
    )
}