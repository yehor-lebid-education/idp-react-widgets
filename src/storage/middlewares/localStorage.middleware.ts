import { Action, ListenerMiddlewareInstance } from "@reduxjs/toolkit";
import * as storage from '@/utils/storage.helper';
import { STORAGE_KEY } from "../reducers/widgets/widgetsUtils";
import { RootState } from "../store";

export default function addLocalStorageMiddleware(
    listenerMiddleware: ListenerMiddlewareInstance
) {
    listenerMiddleware.startListening({
        matcher: (action: Action): action is Action => action.type.startsWith('widgets/'),
        effect: (_action: Action, listenerApi) => {
            const state = listenerApi.getState() as RootState;
            if (state?.widgets) {
                storage.save(STORAGE_KEY, state.widgets);
            }
        },
    });
}