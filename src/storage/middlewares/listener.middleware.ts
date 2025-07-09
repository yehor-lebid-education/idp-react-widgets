import { createListenerMiddleware } from "@reduxjs/toolkit";
import addBroadcastMiddleware from "./broadcast.middleware";

const listenerMiddleware = createListenerMiddleware();

// Add listeners
addBroadcastMiddleware(listenerMiddleware);

export default listenerMiddleware;