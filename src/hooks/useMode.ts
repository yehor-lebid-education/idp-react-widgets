import { useModeContext } from "../context/mode-context/ModeContext";
import { Mode } from "../context/mode-context/types";

export default function useMode() {
    const { state, dispatch } = useModeContext();

    function setMode(mode: Mode, value: boolean) {
        dispatch({ type: 'MODE_SET', payload: { mode, value } });
    }

    function toggleMode(mode: Mode) {
        dispatch({ type: 'MODE_TOGGLE', payload: { mode } });
    }

    return {
        editMode: state.edit,
        addMode: state.add,
        setMode,
        toggleMode,
    };
}