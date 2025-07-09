import { RootState } from "../storage/store";
import { ITab } from "../components/widgets/tab.type";
import { useDispatch, useSelector } from "react-redux";
import { addTab, deleteTab, updateTab } from "../storage/reducers/widgetsReducer";

export default function useTabsData() {
    const tabs = useSelector((state: RootState) => state.widgets.tabs);
    const dispatch = useDispatch();

    function _addTab() {
        dispatch(addTab());
    }

    function _deleteTab(tabId: ITab['id']) {
        dispatch(deleteTab({ id: tabId }));
    }

    function _updateTab(tabId: ITab['id'], title: string) {
        dispatch(updateTab({ id: tabId, title }));
    }

    return {
        tabs,
        addTab: _addTab,
        updateTab: _updateTab,
        deleteTab: _deleteTab,
    };
}
