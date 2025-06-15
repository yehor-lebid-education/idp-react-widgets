import { Navigate, useParams } from "react-router-dom";
import useTabs from "../hooks/useTabs";
import PageContainer from "../layout/PageContainer";
import { ITab } from "../components/widgets/tab.type";
import TabBar from "../components/common/tabs/TabBar";
import WidgetGrid from "../components/widgets/WidgetGrid";

export default function TabPage() {
    const { tabId } = useParams<{ tabId: string }>();
    const { tabs, addTab, deleteTab, updateTab } = useTabs();

    // Redirect if tabId is empty
    if (!tabId || !tabs.some(tab => tab.id === tabId)) {
        return <Navigate to={`/tabs/${tabs[0].id}`} replace />;
    }

    console.log(tabId);

    return (
        <PageContainer>
            <WidgetGrid activeTabId={tabId as ITab['id']} />
            <TabBar
                tabs={tabs}
                onAddTab={addTab}
                onUpdateTab={updateTab}
                onDeleteTab={deleteTab}
                activeTabId={tabId as ITab['id']}
            />
        </PageContainer>
    );
}
