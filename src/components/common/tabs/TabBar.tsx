import { ITab } from "../../widgets/tab.type";
import TabAddButton from "./TabAddButton";
import TabList from "./TabList";

type TabBarProps = {
    tabs: ITab[];
    activeTabId: ITab['id'];
    onAddTab: () => void;
    onDeleteTab: (tabId: ITab['id']) => void;
    onUpdateTab: (tabId: ITab['id'], title: string) => void;
}
export default function TabBar({ tabs, activeTabId, onAddTab, onUpdateTab, onDeleteTab }: TabBarProps) {
    function handleDeleteTab(tabId: ITab['id']) {
        if (tabs.length <= 1) return; // Prevent deleting the last tab
        onDeleteTab(tabId);
    }

    return (
        <div className="fixed bottom-0 left-[50%] translate-x-[-50%] mb-3 text-white">
            <nav className="flex items-center gap-4 bg-white/5 backdrop-blur-md rounded-2xl px-4 py-2 shadow-md">
                <TabList
                    tabs={tabs}
                    activeTabId={activeTabId}
                    onUpdateTab={onUpdateTab}
                />
                <TabAddButton onClick={onAddTab} />
            </nav>
        </div>
    );
}