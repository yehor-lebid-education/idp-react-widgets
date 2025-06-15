import { Edit3, Minus, Plus } from "lucide-react";
import { GuideButton, Next, Press, ResizableButton, WidgetGuideCard } from "./CommonComponents";

export function WidgetAddGuide() {
    return (
        <WidgetGuideCard title="Add Widget">
            <Press />
            <GuideButton><Edit3 size={20} /></GuideButton>
            <Next />
            <GuideButton><Plus size={20} />Add</GuideButton>
            <Next />
            <span> press on widget</span>
        </WidgetGuideCard>
    );
}

export function WidgetDeleteGuide() {
    return (
        <WidgetGuideCard title="Delete Widget">
            <Press />
            <GuideButton><Edit3 size={20} /></GuideButton>
            <Next />
            <span> at the top left widget corner click</span>
            <GuideButton><Minus size={20} /></GuideButton>
        </WidgetGuideCard>
    );
}

export function WidgetUpdateGuide() {
    return (
        <WidgetGuideCard title="Update Widget">
            <Press />
            <GuideButton><Edit3 size={20} /></GuideButton>
            <Next />
            <span> right click on widget (to open a context menu)</span>
        </WidgetGuideCard>
    );
}

export function WidgetMoverGuide() {
    return (
        <WidgetGuideCard title="Move Widget">
            <Press />
            <GuideButton><Edit3 size={20} /></GuideButton>
            <Next />
            <span> drag and drop widget</span>
        </WidgetGuideCard>
    );
}

export function WidgetResizeGuide() {
    return (
        <WidgetGuideCard title="Resize Widget">
            <Press />
            <GuideButton><Edit3 size={20} /></GuideButton>
            <Next />
            <span> drag and drop using</span>
            <GuideButton><div className="w-[24px]"><ResizableButton /></div></GuideButton>
        </WidgetGuideCard>
    );
}
