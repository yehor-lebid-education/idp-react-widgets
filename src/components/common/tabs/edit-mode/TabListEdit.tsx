import { ITab } from "../../../widgets/tab.type";
import TabItemEdit from "./TabItemEdit";

type TabListEditProps = {
    tabs: ITab[];
    activeTabId: ITab['id'];
    onUpdateTab: (tabId: ITab['id'], title: string) => void;
    onDeleteTab: (tabId: ITab['id']) => void;
}
export default function TabListEdit({
    tabs,
    activeTabId,
    onUpdateTab,
    onDeleteTab,
}: TabListEditProps) {
    return (
        <ul className="flex items-center gap-1">
            {tabs.map(tab => (
                <TabItemEdit
                    key={tab.id}
                    tab={tab}
                    forbidDelete={tabs.length === 1}
                    isActive={tab.id === activeTabId}
                    onUpdateTab={onUpdateTab}
                    onDeleteTab={onDeleteTab}
                />
            ))}
        </ul>
    )
}