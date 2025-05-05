import { useEffect, useRef, useState } from "react";
import { IQuote } from "./quote.data";
import { getRandomQuote } from "./quote.helper";
import { IQuoteOptions } from "./quote.types";
import { QUOTE_REFRESH_DURATION } from "./quote.config";

interface QuoteProps {
    options: IQuoteOptions;
}

export default function Quote({ options }: QuoteProps) {
    if (options.mode === 'preview') {
        return <QuotePreviewWidget />;
    }

    return <QuoteWidget options={options} />;
}

function QuoteWidget({ options }: QuoteProps) {
    const { current } = useRef<{ intervalId: number|undefined }>({ intervalId: undefined });
    const [quote, setQuote] = useState<IQuote>(getRandomQuote());

    useEffect(() => {
        if (current.intervalId) {
            clearInterval(current.intervalId);
        }

        current.intervalId = setInterval(
            () => setQuote(getRandomQuote()),
            options.refreshDuration || QUOTE_REFRESH_DURATION
        );

        return () => clearInterval(current.intervalId);
    }, [current, options.refreshDuration]);

    return (
        <div className="flex justify-around items-center h-full w-full">
            <QuoteText text={quote.text} />
            <QuoteAuthor author={quote.author} />
        </div>
    );
}

function QuotePreviewWidget() {
    const text = "Make it work, make it right, make it fast.";
    const author = "Kent Beck";

    return (
        <div className="flex flex-col justify-center items-center h-full w-full">
            <blockquote className="text-white font-mono italic text-sm pb-1">
                “{text}”
            </blockquote>
            <div className="text-white/60 font-mono text-right text-sm pt-1">
                — {author}
            </div>
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
