const currencyFormat = new Intl.NumberFormat('en-us', { currency: 'USD', style: 'currency' })

export const currencyFormatter = (value) => {
    return currencyFormat.format(value)
}