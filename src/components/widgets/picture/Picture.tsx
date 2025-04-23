import WidgetTile from "../../common/WidgetTile";
import { IPictureOptions } from "./picture.model";

interface PictureProps {
    options: IPictureOptions;
}

export default function Picture({ options }: PictureProps) {
    const { url, title } = options;

    return (
        <WidgetTile>
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
        </WidgetTile>
    );
};

function PictureTitle({ title }: { title: string }) {
    return (
        <div className="px-4 pt-4 text-lg font-medium tracking-wide">
            {title}
        </div>
    )
}
