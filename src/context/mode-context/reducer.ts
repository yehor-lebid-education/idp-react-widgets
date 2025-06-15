import { ModeAction, ModeState } from "./types";
import * as actions from './actions';

export default function reducer(state: ModeState, action: ModeAction): ModeState {
    switch (action.type) {
        case 'MODE_SET':
            return actions.handleActionModeSet(state, action.payload);
        case 'MODE_TOGGLE':
            return actions.handleActionModeToggle(state, action.payload);
        default:
            throw new Error(`Unknown action type: ${action['type']}`);
    }
}