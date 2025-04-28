import { useEffect, useState } from "react";
import * as storage from "../../../utils/storage.helper";
import { INotepadOptions, INotepadWidget } from "./notepad.types";

interface NotepadProps {
    id: INotepadWidget['id'];
    options: INotepadOptions;
}

export default function Notepad({ id, options }: NotepadProps) {
    if (options.mode === 'preview') {
        return <NotepadPreviewWidget />;
    }

    return <NotepadWidget id={id} options={options} />;
}

function NotepadWidget({ id, options }: NotepadProps) {
    const { title } = options;

    const [text, setText] = useState(storage.getWidget(id, 'notepad') || '');

    useEffect(() => {
        storage.saveWidget(id, 'notepad', text);
    }, [text]);

    return (
        <div>
            <h2 className="text-white font-mono text-xl mb-3">{title || 'Notes:'}</h2>
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