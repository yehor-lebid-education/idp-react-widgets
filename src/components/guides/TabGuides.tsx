import { Edit3, Minus, Plus } from "lucide-react";
import { GuideButton, Next, Press, WidgetGuideCard } from "./CommonComponents";

export function TabAddGuide() {
    return (
        <WidgetGuideCard title="Add Tab">
            <Press />
            <GuideButton><Edit3 size={20} /></GuideButton>
            <Next />
            <span> at the center bottom</span>
            <GuideButton><Plus size={20} /></GuideButton>
        </WidgetGuideCard>
    );
}

export function TabRemoveGuide() {
    return (
        <WidgetGuideCard title="Delete Tab">
            <Press />
            <GuideButton><Edit3 size={20} /></GuideButton>
            <Next />
            <span> at the top left tab corner click</span>
            <GuideButton><Minus size={20} /></GuideButton>
        </WidgetGuideCard>
    );
}

export function TabEditGuide() {
    return (
        <WidgetGuideCard title="Update Tab">
            <Press />
            <GuideButton><Edit3 size={20} /></GuideButton>
            <Next />
            <span> at the center bottom second row</span>
            <Press />
            <span>on tab and type name</span>
        </WidgetGuideCard>
    );
}