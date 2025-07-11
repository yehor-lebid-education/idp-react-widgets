import Text from "../common/ui/Text";

export function GuideButton({ children }: { children?: React.ReactNode }) {
    return (
        <div className="flex items-center justify-center px-2 mx-2 h-8 border border-white/40 rounded-2xl bg-white/15">
            {children}
        </div>
    )
}

export function SectionTitle({ title }: { title: string }) {
    return (
        <Text weight="bold" className="text-white mb-4 text-4xl">
            {title}
        </Text>
    );
}

export function WidgetGuideCard({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="rounded-2xl border border-white/20 p-4 bg-white/5 shadow-lg">
            <Text size="xl" weight="bold" className="mb-2 text-white">
                {title}
            </Text>
            <div className="flex flex-wrap items-center gap-3 text-white text-lg">
                {children}
            </div>
        </div>
    );
}

export function Press() {
    return <code>PRESS</code>;
}

export function Next() {
    return <code>NEXT</code>;
}

export function ResizableButton() {
    return (
        <div className="relative">
            <div
                className="absolute"
                style={{
                    position: "absolute",
                    top: -14,
                    right: 4,
                    width: 24,
                    height: 24,
                    cursor: "se-resize",
                    background: "none",
                    padding: 0,
                }}
            >
                <div
                    style={{
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        width: 16,
                        height: 16,
                        borderBottom: "4px solid var(--color-white)",
                        borderRight: "4px solid var(--color-white)",
                        borderRadius: "0 0 14px 0",
                    }}
                />
            </div>
        </div>
    );
}
