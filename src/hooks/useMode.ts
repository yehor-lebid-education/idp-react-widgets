import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../storage/store';
import { ModeState, setMode, toggleMode } from '../storage/reducers/modeReducer';

export default function useMode() {
    const { edit, add } = useSelector((state: RootState) => state.mode);
    const dispatch = useDispatch<AppDispatch>();

    function _setMode(mode: keyof ModeState, value: boolean) {
        dispatch(setMode({ mode, value }));
    }

    function _toggleMode(mode: keyof ModeState) {
        dispatch(toggleMode(mode));
    }

    return {
        editMode: edit,
        addMode: add,
        setMode: _setMode,
        toggleMode: _toggleMode,
    };
}