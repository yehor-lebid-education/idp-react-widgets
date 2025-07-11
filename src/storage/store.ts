import { configureStore } from "@reduxjs/toolkit";
import modeReducer from './reducers/modeReducer';
import widgetReducer from './reducers/widgetsReducer';
import listenerMiddleware from "./middlewares/listener.middleware";

export const makeStore = () => configureStore({
    reducer: {
        mode: modeReducer,
        widgets: widgetReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

// Root state and dispatch types (for useSelector/useDispatch)
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
