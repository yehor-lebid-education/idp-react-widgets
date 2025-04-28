import { useEffect, useState } from "react";
import { IQuote } from "./quote.data";
import { getRandomQuote } from "./quote.helper";
import { IQuoteOptions } from "./quote.types";
import { QUOTE_REFRESH_DURATION } from "./quote.config";

interface QuoteProps {
    options: IQuoteOptions;
}

export default function Quote({ options }: QuoteProps) {
    const [quote, setQuote] = useState<IQuote>(getRandomQuote());

    useEffect(() => {
        const intervalId = setInterval(
            () => setQuote(getRandomQuote()),
            options.refreshDuration || QUOTE_REFRESH_DURATION
        );
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex justify-around items-center h-full w-full">
            <QuoteText text={quote.text} />
            <QuoteAuthor author={quote.author} />
        </div>
    );
}

interface QuoteTextProps {
    text: string;
}

function QuoteText({ text }: QuoteTextProps) {
    return (
        <blockquote className="text-white font-mono italic relative pl-4">
            “{text}”
        </blockquote>
    )
}

interface QuoteAuthorProps {
    author: string;
}

function QuoteAuthor({ author }: QuoteAuthorProps) {
    if (!author) {
        return null;
    }

    return (
        <div className="text-white/60 font-mono text-right mt-2 pr-4 text-sm">
            — {author}
        </div>
    )
}
