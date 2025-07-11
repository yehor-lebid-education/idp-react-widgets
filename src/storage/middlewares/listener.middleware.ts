import { createListenerMiddleware } from "@reduxjs/toolkit";
import addBroadcastMiddleware from "./broadcast.middleware";
import addLocalStorageMiddleware from "./localStorage.middleware";

const listenerMiddleware = createListenerMiddleware();

// Add listeners
addBroadcastMiddleware(listenerMiddleware);
addLocalStorageMiddleware(listenerMiddleware);

export default listenerMiddleware;