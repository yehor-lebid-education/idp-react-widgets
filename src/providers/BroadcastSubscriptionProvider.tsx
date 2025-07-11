'use client';

import useWidgetBroadcastHandler from "@/hooks/useWidgetBroadcastHandler";

export default function BroadCastSubscriptionProvider({ children }: { children: React.ReactNode }) {
    useWidgetBroadcastHandler();

    return (<>{children}</>);
}