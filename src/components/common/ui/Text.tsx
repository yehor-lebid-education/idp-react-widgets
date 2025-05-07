import classname, { ClassName } from "../../../utils/classname";

interface TextProps {
    children?: string;
    weight?: 'light' | 'normal' | 'medium' | 'bold';
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';
    transform?: 'uppercase' | 'lowercase' | 'capitalize';
    className?: ClassName;
}

export default function Text({ children, className, size = 'base', weight = 'normal', transform }: TextProps) {
    return (
        <div className={classname(
            `text-${size}`,
            `font-${weight}`,
            transform || '',
            className,
        )}>
            {children}
        </div>
    );
}
