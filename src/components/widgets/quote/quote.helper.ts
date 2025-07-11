import { quotes } from "./quote.data";

// Quotes API are not stable so pick random from here
export function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
