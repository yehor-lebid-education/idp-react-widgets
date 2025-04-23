import { useEffect, useState } from "react";
import WidgetTile from "../../common/WidgetTile";
import { IQuoteOptions } from "./quote.options";
import { IQuote } from "./quote.data";
import { getRandomQuote } from "./quote.helper";

interface QuoteProps {
    options: IQuoteOptions;
}

const DEFAULT_REFRESH_DURATION = 1000 * 60 * 5; // 5 minutes

export default function Quote({ options }: QuoteProps) {
    const [quote, setQuote] = useState<IQuote>(getRandomQuote());

    useEffect(() => {
        const intervalId = setInterval(
            () => setQuote(getRandomQuote()),
            options.refreshDuration || DEFAULT_REFRESH_DURATION
        );
        return () => clearInterval(intervalId);
    }, []);

    return (
        <WidgetTile>
            <QuoteText text={quote.text} />
            <QuoteAuthor author={quote.author} />
        </WidgetTile>
    );
}

interface QuoteTextProps {
    text: string;
}

function QuoteText({ text }: QuoteTextProps) {
    return (
        <blockquote className="text-white font-mono text-lg italic relative pl-4 border-l-4 border-white/40">
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
        <div className="text-white/60 font-mono text-right mt-2 text-sm">
            — {author}
        </div>
    )
}
