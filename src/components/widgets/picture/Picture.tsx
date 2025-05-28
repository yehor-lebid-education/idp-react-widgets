import useWidgetOptions from "../../../hooks/useWidgetOptions";
import { PICTURE_DEFAULT_OPTIONS } from "./picture.config";
import { IPictureConfig, IPictureWidget } from "./picture.types";

interface PictureProps {
    id: IPictureWidget['id'];
    previewMode?: boolean;
}

export default function Picture({ id, previewMode }: PictureProps) {
    if (previewMode) {
        return <PicturePreviewWidget />;
    }

    return <PictureWidget id={id} />;
}

function PictureWidget({ id }: { id: IPictureWidget['id'] }) {
    const { widgetOptions } = useWidgetOptions<IPictureConfig>(id);
    const { url, title, width } = widgetOptions || PICTURE_DEFAULT_OPTIONS;

    return (
        <div className="w-full h-full overflow-hidden text-white">
            {title && <PictureTitle title={title} />}
            <div className="p-4 w-full h-full flex items-center justify-center">
                <img
                    src={url}
                    alt={title || 'Image'}
                    style={{ width }}
                    className="w-full max-w-[100%] max-h-[100%] rounded-xl object-cover"
                />
            </div>
        </div>
    );
};

function PicturePreviewWidget() {
    const url = "https://picsum.photos/240/90";

    return (
        <div className="w-full h-full p-2 text-white">
            <div className="w-full h-full rounded-sm overflow-hidden">
                <img
                    src={url}
                    alt="Preview"
                    className="w-full object-cover"
                />
            </div>
        </div>
    );
}

function PictureTitle({ title }: { title: string }) {
    return (
        <div className="px-4 pt-4 text-lg font-medium tracking-wide">
            {title}
        </div>
    )
}
