import useMode from "../../../hooks/useMode";
import { ITab } from "../../widgets/tab.type";
import TabBarEdit from "./edit-mode/TabBarEdit";
import TabBarView from "./view-mode/TabBarView";

type TabBarProps = {
    tabs: ITab[];
    activeTabId: ITab['id'];
    onAddTab: () => void;
    onDeleteTab: (tabId: ITab['id']) => void;
    onUpdateTab: (tabId: ITab['id'], title: string) => void;
}
export default function TabBar({
    tabs,
    activeTabId,
    // actions
    onAddTab,
    onUpdateTab,
    onDeleteTab,
}: TabBarProps) {
    const { editMode } = useMode();

    return (
        <TabBarContainer>
            <TabBarView
                tabs={tabs}
                activeTabId={activeTabId}
            />
            {editMode && (<>
                <hr className="w-full" />
                <TabBarEdit
                    tabs={tabs}
                    activeTabId={activeTabId}
                    onAddTab={onAddTab}
                    onUpdateTab={onUpdateTab}
                    onDeleteTab={onDeleteTab}
                />
            </>)}
        </TabBarContainer>
    );
}

function TabBarContainer({ children }: { children?: React.ReactNode }) {
    return (
        <div className="fixed bottom-0 left-[50%] translate-x-[-50%] mb-3 text-white">
            <nav className="flex flex-col items-center gap-4 bg-white/5 backdrop-blur-md rounded-2xl px-4 py-2 shadow-md">
                {children}
            </nav>
        </div>
    )
}