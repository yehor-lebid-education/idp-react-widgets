import { ITab } from "../../../widgets/tab.type";
import TabAddButton from "./TabAddButton";
import TabListEdit from "./TabListEdit";

type TabBarEditProps = {
    tabs: ITab[];
    activeTabId: ITab['id'];
    onAddTab: () => void;
    onDeleteTab: (tabId: ITab['id']) => void;
    onUpdateTab: (tabId: ITab['id'], title: string) => void;
}
export default function TabBarEdit({
    tabs,
    activeTabId,
    // actions
    onAddTab,
    onUpdateTab,
    onDeleteTab,
}: TabBarEditProps) {
    return (
        <div className="w-full flex justify-end">
            <TabListEdit
                tabs={tabs}
                activeTabId={activeTabId}
                onUpdateTab={onUpdateTab}
                onDeleteTab={onDeleteTab}
            />
            <TabAddButton onClick={onAddTab} />
        </div>
    );
}