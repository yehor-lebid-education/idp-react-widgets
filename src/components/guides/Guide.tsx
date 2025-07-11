import { SectionTitle } from "./CommonComponents";
import { TabAddGuide, TabEditGuide, TabRemoveGuide } from "./TabGuides";
import { WidgetAddGuide, WidgetDeleteGuide, WidgetResizeGuide, WidgetUpdateGuide } from "./WidgetGuides";

export default function Guide() {
    return (
        <div className="text-white w-full h-[85%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 px-6 w-full">
                {/* Widget Actions */}
                <div>
                    <SectionTitle title="🧩 Widget Actions" />
                    <div className="space-y-4">
                        <WidgetAddGuide />
                        <WidgetUpdateGuide />
                        <WidgetResizeGuide />
                        <WidgetDeleteGuide />
                    </div>
                </div>

                {/* Tab Actions */}
                <div>
                    <SectionTitle title="🗂️ Tab Actions" />
                    <div className="space-y-4">
                        <TabAddGuide />
                        <TabEditGuide />
                        <TabRemoveGuide />
                        {/* Add more tab-related guides here */}
                    </div>
                </div>
            </div>
        </div>
    )
}
