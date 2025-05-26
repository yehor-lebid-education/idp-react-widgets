import { useEffect, useState } from "react";
import { INotepadConfig, INotepadWidget } from "./notepad.types";
import useWidgetOptions from "../../../hooks/useWidgetOptions";
import useWidgetData from "../../../hooks/useWidgetData";
import { NOTEPAD_DEFAULT_OPTIONS } from "./notepad.config";

interface NotepadProps {
    id: INotepadWidget['id'];
    previewMode?: boolean;
}

export default function Notepad({ id, previewMode }: NotepadProps) {
    if (previewMode) {
        return <NotepadPreviewWidget />;
    }

    return <NotepadWidget id={id} />;
}

function NotepadWidget({ id }: { id: INotepadWidget['id'] }) {
    const { widgetOptions } = useWidgetOptions<INotepadConfig>(id);
    const { title } = widgetOptions || NOTEPAD_DEFAULT_OPTIONS;

    const { widgetData, updateWidgetData } = useWidgetData<INotepadWidget['data']>(id);

    const [text, setText] = useState(typeof widgetData === 'string' ? widgetData : '');

    useEffect(() => {
        updateWidgetData(text);
    }, [id, text]);

    return (
        <div>
            {title && <h2 className="text-white font-mono text-xl mb-3">{title}</h2>}
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type your notes here..."
                className="w-full h-48 resize-none bg-transparent text-white font-mono placeholder-white/50 outline-none border border-white/20 rounded-lg p-3 focus:border-white/40 transition"
            />
        </div>
    );
}

function NotepadPreviewWidget() {
    return (
        <div>
            <textarea
                readOnly
                value="Write your notes..."
                placeholder="Type your notes here..."
                className="h-15 bg-transparent text-white text-sm font-mono placeholder-white/50 outline-none border border-white/20 rounded-lg p-2 focus:border-white/40 transition"
            />
        </div>
    );
}