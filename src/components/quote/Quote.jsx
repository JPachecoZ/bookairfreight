import './Quote.css';

export function Quote({quote}){
    const from = quote["Starting country"]
    const to = quote["Destination country"]
    const price = quote["Quote price"]
    const label = quote["Shipping channel"] === "Ocean" ? "Traditional ocean freight" : "Traditional air freight"

    return(
        <div className="quote-container">
            <div>
                <img src="" alt="shipping channel logo"/>
                <p>{label}</p>
            </div>
            <div>
                <p>{`${from} -> ${to}`}</p>
            </div>
            <div>
                <p>10-12 days</p>
                <p>Estimated delivery</p>
                <p>Oct 10 - Oct 12</p>
            </div>
            <div>
                <p>US$ {price}</p>
            </div>
        </div>
    )
}