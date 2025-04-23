import { Globe } from "lucide-react";
import WidgetTile from "../../common/WidgetTile";
import { getFaviconUrl } from "./link.helper";
import { ILinkOptions } from "./link.options";
import { useState } from "react";

interface LinkProps {
    options: ILinkOptions
}

export default function Link({ options }: LinkProps) {
    const { url, label } = options;

    return (
        <WidgetTile>
            <div>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-medium hover:underline"
                >
                    <Favicon url={url} />
                    <span>{label}</span>
                </a>
            </div>
        </WidgetTile>
    )
}

interface FaviconProps {
    url: string;
}

function Favicon({ url }: FaviconProps) {
    const favicon = getFaviconUrl(url);
    const [faviconError, setFaviconError] = useState(false);

    if (!favicon || faviconError) {
        return <Globe className="w-5 h-5 text-white/80" />;
    }

    return (
        <img
            src={favicon}
            alt="favicon"
            className="w-5 h-5 rounded-sm object-contain"
            onError={() => setFaviconError(true)}
        />
    );
}