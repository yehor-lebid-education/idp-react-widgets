
// A CSS selector for tags that will not be draggable.
export const NON_DRAGGABLE_CLASS = 'non-dragable' as const;

export const GRID = {
    COLS: 8,
    ROWS: 9,
    ROW_HEIGHT: 80,
    WIDTH: window.innerWidth,
    DRAGGABLE_CANCEL: '.' + NON_DRAGGABLE_CLASS,
} as const;