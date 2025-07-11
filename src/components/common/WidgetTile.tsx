
interface WidgetTileProps {
    children?: React.ReactNode;
}

export default function WidgetTile({ children }: WidgetTileProps) {
    return (
        <div>
            {children}
        </div>
    )
}
