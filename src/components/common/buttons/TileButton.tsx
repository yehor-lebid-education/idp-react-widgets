import { DynamicIcon } from 'lucide-react/dynamic';
import dynamicIconImports from "lucide-react/dynamicIconImports";
import classname, { ClassName } from "../../../utils/classname";

const positionClass = {
    'top-left': 'top-[-8px] left-[-8px]',
    'top-right': 'top-[-8px] right-[-8px]',
    'bottom-left': 'bottom-[-8px] left-[-8px]',
    'bottom-right': 'bottom-[-8px] right-[-8px]',
} as const;


type IconName = keyof typeof dynamicIconImports;
type Position = keyof typeof positionClass;


type TileButtonProps = {
    icon: IconName;
    size?: number;
    position?: Position;
    className?: ClassName;
    onClick?: () => void;
}
export function TileButton({ icon, onClick, className, size = 24, position = 'top-left' }: TileButtonProps) {
    function handleClick() {
        if (typeof onClick === 'function') {
            onClick();
        }
    }

    return (
        <button
            className={classname(
                "transition rounded-2xl cursor-pointer absolute bg-white",
                positionClass[position],
                className,
            )}
            onClick={handleClick}
        >
            <DynamicIcon name={icon} size={size} className="text-black p-0.5" />
        </button>
    );
}