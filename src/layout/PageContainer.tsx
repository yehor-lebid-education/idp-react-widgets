interface PageContainerProps {
    children?: React.ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
    return (
        <div className="w-screen h-screen bg-black">
            {children}
        </div>
    );
}
