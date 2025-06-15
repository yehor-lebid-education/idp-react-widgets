import { ITab } from "./tab.type";
import GridWidget from "../common/Grid";
import useWidgetsData from "../../hooks/useWidgets";
import useTabsData from "../../hooks/useTabsData";
import MenuPanel from "../common/MenuPanel";
import TabBar from "../common/tabs/TabBar";

interface WidgetGridProps {
    activeTabId: ITab['id'];
}

export default function WidgetGrid({ activeTabId }: WidgetGridProps) {
    const {
        widgets: allWidgets,
        widgetAdd,
        deleteAll,
        widgetDelete,
        widgetUpdateConfig,
        widgetUpdateLayout,
    } = useWidgetsData();

    const {
        tabs,
        addTab,
        updateTab,
        deleteTab,
    } = useTabsData();

    const widgets = allWidgets.filter(widget => widget.tabId === activeTabId);

    return (<>
        <GridWidget
            widgets={widgets}
            onWidgetDelete={widgetDelete}
            onWidgetConfigChange={widgetUpdateConfig}
            onWidgetLayoutChange={widgetUpdateLayout}
            onWidgetAdd={(widget) => widgetAdd(widget, activeTabId)}
        />
        <TabBar
            tabs={tabs}
            onAddTab={addTab}
            onUpdateTab={updateTab}
            onDeleteTab={deleteTab}
            activeTabId={activeTabId}
        />
        <MenuPanel
            onDeleteAll={deleteAll}
        />
    </>);
}
