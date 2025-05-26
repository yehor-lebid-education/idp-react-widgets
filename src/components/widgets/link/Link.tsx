import { useState } from "react";
import { Globe } from "lucide-react";
import { ILinkConfig, ILinkWidget } from "./link.types";
import { getFaviconUrl } from "./link.helper";
import { LINK_DEFAULT_OPTIONS, LINK_ICON_SIZE } from "./link.config";
import WidgetContainer from "../../common/WidgetContainer";
import useWidgetOptions from "../../../hooks/useWidgetOptions";

interface LinkProps {
    id: ILinkWidget['id'];
    previewMode?: boolean;
}

export default function Link({ id, previewMode }: LinkProps) {
    if (previewMode) {
        return <LinkPreviewWidget />
    }

    return <LinkWidget id={id} />
}

function LinkWidget({ id }: { id: ILinkWidget['id'] }) {
    const { widgetOptions } = useWidgetOptions<ILinkConfig>(id);
    const { url, label } = widgetOptions || LINK_DEFAULT_OPTIONS;

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

function LinkPreviewWidget() {
    const { url, label } = LINK_DEFAULT_OPTIONS;

    return (
        <WidgetContainer>
            <span
                className="flex items-center gap-2 font-medium hover:underline"
            >
                <Favicon url={url} />
                <span>{label}</span>
            </span>
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

    return (
        <img
            src={favicon}
            alt="favicon"
            className="w-5 h-5 rounded-sm object-contain"
            onError={() => setFaviconError(true)}
        />
    );
}