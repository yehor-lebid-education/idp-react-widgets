
import { Action, State } from "./types";
import * as actionHandler from "./actions";


export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'TAB_ADD':
            return actionHandler.handleTabAddAction(state);
        case 'TAB_DELETE':
            return actionHandler.handleTabDeleteAction(state, action);
        case 'TAB_UPDATE':
            return actionHandler.handleTabUpdateAction(state, action);
        case 'WIDGET_ADD':
            return actionHandler.handleWidgetAddAction(state, action);
        case 'WIDGET_DELETE':
            return actionHandler.handleWidgetDeleteAction(state, action);
        case 'WIDGET_UPDATE_CONFIG':
            return actionHandler.handleWidgetUpdateConfigAction(state, action);
        case 'WIDGET_UPDATE_LAYOUT':
            return actionHandler.handleWidgetUpdateLayoutAction(state, action);
        case 'WIDGET_UPDATE_DATA':
            return actionHandler.handleWidgetUpdateData(state, action);
        case 'DELETE_ALL':
            return actionHandler.handleDeleteAllAction();
        default:
            throw new Error(`Unknown action type: ${action['type']}`);
    }
}
