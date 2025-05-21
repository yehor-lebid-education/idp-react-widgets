import GridWidgetWrapper from "../common/GridWidgetWrapper";
import { ITab } from "./tab.type";

interface TabProps {
    tab: ITab;
}

export default function Tab({ tab }: TabProps) {
    return (<>
        <GridWidgetWrapper />
    </>)
}