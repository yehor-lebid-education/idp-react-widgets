import { Lightbulb } from "lucide-react";
import ActionButton from "./buttons/ActionButton";
import { Link } from "react-router-dom";

export function DocsLink() {
    return (
        <div className="flex flex-col fixed bottom-2 left-2">
            <Link to="/docs">
                <ActionButton title="Documentation">
                    <Lightbulb size={20} />
                </ActionButton>
            </Link>
        </div>
    );
}