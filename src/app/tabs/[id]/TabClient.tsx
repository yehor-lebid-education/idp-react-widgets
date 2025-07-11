'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useTabsData from "@/hooks/useTabsData";
import PageContainer from "@/layout/PageContainer";
import WidgetGrid from "@/components/widgets/WidgetGrid";

interface TabClientProps {
    id: string;
}

export default function TabClient({ id }: TabClientProps) {
    const [isClient, setIsClient] = useState(false);
    const { tabs } = useTabsData();
    const router = useRouter();

    useEffect(() => {
        setIsClient(true);
        // Redirect if tabId is empty
        if (!id || !tabs.some(tab => tab.id === id)) {
            router.replace(`/tabs/${tabs[0].id}`);
        }
    }, [id, tabs, router]);

    return (
        <PageContainer>
            {isClient && <WidgetGrid activeTabId={id} />}
        </PageContainer>
    )
}