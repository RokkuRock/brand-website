const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {currency: "TWD", style: "currency" }) 

export function formatCurrency (number: number) {
    return CURRENCY_FORMATTER.format (number)
}