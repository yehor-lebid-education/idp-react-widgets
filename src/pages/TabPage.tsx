import { Navigate, useParams } from "react-router-dom";

import PageContainer from "../layout/PageContainer";
import { ITab } from "../components/widgets/tab.type";
import WidgetGrid from "../components/widgets/WidgetGrid";
import useTabsData from "../hooks/useTabsData";

export default function TabPage() {
    const { tabId } = useParams<{ tabId: string }>();
    const { tabs } = useTabsData();

    // Redirect if tabId is empty
    if (!tabId || !tabs.some(tab => tab.id === tabId)) {
        return <Navigate to={`/tabs/${tabs[0].id}`} replace />;
    }

    return (
        <PageContainer>
            <WidgetGrid activeTabId={tabId as ITab['id']} />
        </PageContainer>
    );
}
