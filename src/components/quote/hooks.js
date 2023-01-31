function getRandomNumberBetween(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function getDeliveryDaysRange(type){
    const [startMin, startMax, endMin, endMax] = type === "Ocean" ? [25, 30, 5, 10] : [3, 7, 2, 4]
    const minDays = getRandomNumberBetween(startMin, startMax)
    const maxDays = minDays + getRandomNumberBetween(endMin, endMax)

    return {
        minDays,
        maxDays
    }
}

export function getFormattedDate(date){
    const newDate = new Date(date)
    const day = newDate.toLocaleString('default', { day: '2-digit' })
    const month = newDate.toLocaleString('default', { month: 'short' })
    return `${month} ${day}`
}