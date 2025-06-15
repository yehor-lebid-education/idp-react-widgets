import { ITab } from "../../../widgets/tab.type";
import Text from "../../ui/Text";
import TabListView from "./TabListView";

type TabBarViewProps = {
    tabs: ITab[];
    activeTabId: ITab['id'];
}
export default function TabBarView({ tabs, activeTabId }: TabBarViewProps) {
    return (
        <div className="w-full flex justify-around items-center">
            <TabListView
                tabs={tabs}
                activeTabId={activeTabId}
            />
        </div>
    );
}
