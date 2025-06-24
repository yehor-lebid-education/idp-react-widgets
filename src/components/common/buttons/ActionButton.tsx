import classname, { ClassName } from "../../../utils/classname";

interface ActionButtonProps {
    title: string
    className?: ClassName
    overwriteDefaultClass?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
}
export default function ActionButton({
    title,
    onClick,
    children,
    className,
    overwriteDefaultClass,
}: ActionButtonProps) {
    function handleClick() {
        if (typeof onClick === 'function') {
            onClick();
        }
    }

    return (
        <button
            onClick={handleClick}
            title={title}
            className={classname(
                !overwriteDefaultClass && `flex items-center gap-2 px-3 py-2 rounded-2xl bg-transparent text-white hover:bg-white/20 transition shadow-md cursor-pointer`,
                className,
            )}
        >
            {children}
        </button>
    );
}