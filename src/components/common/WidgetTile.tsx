
interface WidgetTileProps {
    children?: React.ReactNode;
}

export default function WidgetTile({ children }: WidgetTileProps) {
    return (
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg">
            { children }
        </div>
    )
}
