import { ITab } from "../../../widgets/tab.type";
import TabItemView from "./TabItemView";

type TabListViewProps = {
    tabs: ITab[];
    activeTabId: ITab['id'];
}
export default function TabListView({
    tabs,
    activeTabId,
}: TabListViewProps) {
    return (
        <ul className="flex items-center gap-1">
            {tabs.map(tab => (
                <TabItemView
                    key={tab.id}
                    tab={tab}
                    isActive={tab.id === activeTabId}
                />
            ))}
        </ul>
    )
}