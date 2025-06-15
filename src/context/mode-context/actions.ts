import { ActionModeSet, ActionModeToggle, ModeState } from "./types";

export function handleActionModeSet(state: ModeState, { mode, value }: ActionModeSet['payload']) {
    return { ...state, [mode]: value };
}

export function handleActionModeToggle(state: ModeState, { mode }: ActionModeToggle['payload']) {
    return { ...state, [mode]: !state[mode] };
}
