
export type Mode = 'edit' | 'add';
export type ModeState = Record<Mode, boolean>;


export type ActionModeSet    = { type: 'MODE_SET'; payload: { mode: Mode, value: boolean } };
export type ActionModeToggle = { type: 'MODE_TOGGLE'; payload: { mode: Mode } };

export type ModeAction = ActionModeSet | ActionModeToggle;