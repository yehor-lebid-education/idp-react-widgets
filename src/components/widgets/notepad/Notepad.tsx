import { useEffect, useState } from "react";
import WidgetTile from "../../common/WidgetTile";
import * as storage from "../../../utils/storage.helper";
import { INotepadOptions, INotepadWidget } from "./notepad.model";

interface NotepadProps {
    id: INotepadWidget['id'];
    options: INotepadOptions;
}

export default function Notepad({ id, options }: NotepadProps) {
    const { title } = options;

    const [text, setText] = useState(storage.get(id, 'notepad') || '');

    useEffect(() => {
        storage.save(id, 'notepad', text);
    }, [text]);

    return (
        <WidgetTile>
            <h2 className="text-white font-mono text-xl mb-3">{title || 'Notes:'}</h2>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type your notes here..."
                className="w-full h-48 resize-none bg-transparent text-white font-mono placeholder-white/50 outline-none border border-white/20 rounded-lg p-3 focus:border-white/40 transition"
            />
        </WidgetTile>
    );
}
