import { IPictureOptions } from "./picture.types";

interface PictureProps {
    options: IPictureOptions;
}

export default function Picture({ options }: PictureProps) {
    if (options.mode === 'preview') {
        return <PicturePreviewWidget />;
    }

    return <PictureWidget options={options} />;
}

function PictureWidget({ options }: PictureProps) {
    const { url, title } = options;

    return (
        <div className="overflow-hidden text-white w-50">
            {title && <PictureTitle title={title} />}
            <div className="p-4">
                <img
                    src={url}
                    alt={title || 'Image'}
                    className="rounded-xl w-full object-cover"
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
