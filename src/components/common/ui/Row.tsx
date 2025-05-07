import classname, { ClassName } from "../../../utils/classname";

interface RowProps {
    children?: React.ReactNode;
    alignY?: 'start' | 'center' | 'end' | 'stretch';
    alignX?: 'start' | 'center' | 'end' | 'stretch' | 'between';
    paddingY?: 5 | 10 | 15 | 20;
    className?: ClassName;
}
export default function Row({ children, className, alignY = 'center', alignX = 'start', paddingY = 5 }: RowProps) {
    return (
        <div
            className={classname(
                'flex',
                'w-[100%]',
                `items-${alignY}`,
                `justify-${alignX}`,
                className,
            )}
            style={{
                paddingTop: paddingY,
                paddingBottom: paddingY,
            }}
        >
            {children}
        </div>
    );
}
