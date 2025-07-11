import { Plus } from "lucide-react";
import ActionButton from "../../buttons/ActionButton";

type TabAddButtonProps = {
    onClick?: () => void;
}
export default function TabAddButton({ onClick }: TabAddButtonProps) {
    return (
        <ActionButton
            title="Add Tab"
            onClick={onClick}
            className="py-1 px-1 hover:bg-white/70 hover:text-black"
        >
            <Plus size={18} />
        </ActionButton>
    );
}