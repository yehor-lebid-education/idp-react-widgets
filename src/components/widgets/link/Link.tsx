import { useState } from "react";
import { Globe } from "lucide-react";
import { ILinkOptions } from "./link.types";
import { getFaviconUrl } from "./link.helper";
import { LINK_ICON_SIZE } from "./link.config";
import WidgetContainer from "../../common/WidgetContainer";

interface LinkProps {
    options: ILinkOptions
}

export default function Link({ options }: LinkProps) {
    const { url, label } = options;

    return (
        <WidgetContainer>
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-medium hover:underline"
            >
                <Favicon url={url} />
                <span>{label}</span>
            </a>
        </WidgetContainer>
    )
}

interface FaviconProps {
    url: string;
}

function Favicon({ url }: FaviconProps) {
    const favicon = getFaviconUrl(url);
    const [faviconError, setFaviconError] = useState(false);

    if (!favicon || faviconError) {
        return <Globe size={LINK_ICON_SIZE} className="text-white/80" />;
    }

    // TODO: Does not work.
    // TODO: Replace with Image component
    return (
        <img
            src={favicon}
            alt="favicon"
            className="w-5 h-5 rounded-sm object-contain"
            onError={() => setFaviconError(true)}
        />
    );
}