import { Edit3, Eye, Plus, Trash2 } from "lucide-react";
import useMode from "../../hooks/useMode"
import classname from "../../utils/classname";
import ActionButton from "./buttons/ActionButton";
import { useState } from "react";

interface MenuPanelProps {
    onDeleteAll: () => void;
}
export default function MenuPanel({ onDeleteAll }: MenuPanelProps) {
    const {
        editMode,
        setMode,
        toggleMode
    } = useMode();

    return (<>
        {/* Menu Control Items  */}
        <div className="flex flex-col fixed bottom-2 right-2">
            {editMode && <AddWidgetButton onClick={() => setMode('add', true)} />}
            {editMode && <DeleteAllButton onClick={onDeleteAll} />}
            <EditViewGridButton editMode={editMode} onClick={() => toggleMode('edit')} />
        </div>
    </>)
}

interface AddWidgetButtonProps {
    onClick: () => void;
}
function AddWidgetButton({ onClick }: AddWidgetButtonProps) {
    return (
        <ActionButton
            title="Add Widget"
            onClick={onClick}
        >
            <Plus size={20} /> Add
        </ActionButton>
    );
}


interface EditViewGridButtonProps {
    editMode: boolean;
    onClick: () => void;
}
function EditViewGridButton({ editMode, onClick }: EditViewGridButtonProps) {
    return (
        <ActionButton
            onClick={() => onClick()}
            title={editMode ? 'View' : 'Edit'}
        >
            {editMode ? <Eye size={20} /> : <Edit3 size={20} />}
            {editMode ? 'View' : ''}
        </ActionButton>
    );
}


interface AddWidgetButtonProps {
    onClick: () => void;
}
function DeleteAllButton({ onClick }: AddWidgetButtonProps) {
    const [confirm, setConfirm] = useState(false);

    function handleClick() {
        if (!confirm) {
            return setConfirm(true);
        }

        setConfirm(false);
        onClick();
    }

    return (
        <ActionButton
            onClick={handleClick}
            title="Delete All Widgets and Tabs"
            overwriteDefaultClass={true}
            className={classname(
                "flex items-center gap-2 px-3 py-2 rounded-2xl text-white transition shadow-md cursor-pointer",
                confirm ? "bg-red-400 hover:bg-red-400" : "bg-transparent hover:bg-white/20"
            )}
        >
            <Trash2 size={20} /> Delete All
        </ActionButton>
    );
}
