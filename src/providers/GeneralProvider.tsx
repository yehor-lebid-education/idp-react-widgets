'use client';

import BroadCastSubscriptionProvider from "./BroadcastSubscriptionProvider";
import StoreProvider from "./StoreProvider";

interface StoreProviderProps {
    children?: React.ReactNode,
}

export default function GeneralProvider({ children }: StoreProviderProps) {
    return (
        <StoreProvider>
            <BroadCastSubscriptionProvider>
                {children}
            </BroadCastSubscriptionProvider>
        </StoreProvider>
    )
}