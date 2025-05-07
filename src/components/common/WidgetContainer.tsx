import classname from "../../utils/classname";

interface WidgetContainerProps {
    children?: React.ReactNode;
    className?: string;
}

export default function WidgetContainer({ children, className }: WidgetContainerProps) {
    return (
        <div className={classname("w-full h-full flex items-center justify-center", typeof className === 'string' && className)}>
            {children}
        </div>
    );
}
