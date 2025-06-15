import { ITab } from "../components/widgets/tab.type";
import useWidgetContextWithBroadcast from "./useWidgetContextWithBroadcast";

export default function useTabsData() {
    const { state, dispatch } = useWidgetContextWithBroadcast();

    function addTab() {
        dispatch({ type: 'TAB_ADD' });
    }

    function deleteTab(tabId: ITab['id']) {
        if (state.tabs.length <= 1) return; // Prevent deleting the last tab
        dispatch({ type: 'TAB_DELETE', payload: { id: tabId }});
    }

    function updateTab(tabId: ITab['id'], title: string) {
        dispatch({ type: 'TAB_UPDATE', payload: { id: tabId, title }});
    }

    return {
        tabs: state.tabs,
        addTab,
        updateTab,
        deleteTab,
    };
}
