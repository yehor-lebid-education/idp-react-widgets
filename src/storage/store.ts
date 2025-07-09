import { configureStore } from "@reduxjs/toolkit";
import modeReducer from './reducers/modeReducer';
import widgetReducer from './reducers/widgetsReducer';
import listenerMiddleware from "./middlewares/listener.middleware";

export const store = configureStore({
    reducer: {
        mode: modeReducer,
        widgets: widgetReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

// Root state and dispatch types (for useSelector/useDispatch)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;