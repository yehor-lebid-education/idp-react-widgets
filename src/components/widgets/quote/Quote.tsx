import { useEffect, useRef, useState } from "react";
import { IQuote } from "./quote.data";
import { getRandomQuote } from "./quote.helper";
import { IQuoteConfig, IQuoteWidget } from "./quote.types";
import { QUOTE_DEFAULT_OPTIONS } from "./quote.config";
import useWidgetOptions from "../../../hooks/useWidgetOptions";

interface QuoteProps {
    id: IQuoteWidget['id'];
    previewMode?: boolean;
}

export default function Quote({ id, previewMode }: QuoteProps) {
    if (previewMode) {
        return <QuotePreviewWidget />;
    }

    return <QuoteWidget id={id} />;
}

function QuoteWidget({ id }: { id: IQuoteWidget['id'] }) {
    const { widgetOptions } = useWidgetOptions<IQuoteConfig>(id);
    const { refreshDuration } = widgetOptions || QUOTE_DEFAULT_OPTIONS;

    const [quote, setQuote] = useState<IQuote>(getRandomQuote());
    const { current } = useRef<{ intervalId?: number | NodeJS.Timeout }>({ intervalId: undefined });

    useEffect(() => {
        if (current.intervalId) {
            clearInterval(current.intervalId);
        }

        current.intervalId = setInterval(
            () => setQuote(getRandomQuote()),
            refreshDuration || QUOTE_DEFAULT_OPTIONS.refreshDuration,
        );

        return () => clearInterval(current.intervalId);
    }, [current, refreshDuration]);

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
