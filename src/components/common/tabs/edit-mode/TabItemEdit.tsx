import classname from "../../../../utils/classname";
import { ITab } from "../../../widgets/tab.type";
import { TileButton } from "../../buttons/TileButton";
import Input from "../../inputs/Input";


type TabItemEditProps = {
    tab: ITab;
    isActive: boolean;
    forbidDelete: boolean;
    onUpdateTab: (tabId: ITab['id'], title: ITab['title']) => void;
    onDeleteTab: (tabId: ITab['id']) => void;
}
export default function TabItemEdit({
    tab,
    forbidDelete,
    onUpdateTab,
    onDeleteTab
}: TabItemEditProps) {
    function handleUpdate(title: string) {
        if (typeof onUpdateTab === 'function' && !forbidDelete) {
            onUpdateTab(tab.id, title);
        }
    }

    return (
        <li className="px-4 py-2 rounded-2xl cursor-pointer transition inline-block w-auto relative">
            <Input
                name="tab-title"
                type="text"
                value={tab.title}
                size={tab.title.length - 1 || 1}
                width={'auto'}
                minLength={1}
                maxLength={20}
                onChange={handleUpdate}
                className={classname("bg-white/8 text-white text-center")}
            />

            {!forbidDelete && <TileButton
                top={2}
                right={5}
                size={20}
                icon="minus"
                position="top-right"
                className="hover:bg-red-400"
                onClick={() => onDeleteTab(tab.id)}
            />}
        </li>
    );
}