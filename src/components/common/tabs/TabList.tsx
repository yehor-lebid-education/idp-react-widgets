import { ITab } from "../../widgets/tab.type";
import TabItem from "./TabItem";

type TabListProps = {
    activeTabId: ITab['id'];
    tabs: ITab[];
    onUpdateTab: (tabId: ITab['id'], title: string) => void;
}
export default function TabList({ tabs, activeTabId, onUpdateTab }: TabListProps) {
    return (
        <ul className="flex items-center gap-1">
            {tabs.map(tab => (
                <TabItem
                    key={tab.id}
                    tab={tab}
                    onUpdateTab={onUpdateTab}
                    isActive={tab.id === activeTabId}
                />
            ))}
        </ul>
    )
}