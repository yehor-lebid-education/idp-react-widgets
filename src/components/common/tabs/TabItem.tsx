import { Link } from "react-router-dom";
import classname from "../../../utils/classname";
import { ITab } from "../../widgets/tab.type";
import Input from "../inputs/Input";

type TabItemProps = {
    tab: ITab;
    isActive: boolean;
    onUpdateTab: (tabId: ITab['id'], title: ITab['title']) => void;
    onClick?: () => void;
}

export default function TabItem({ tab, isActive, onUpdateTab }: TabItemProps) {
    if (isActive) {
        return <TabItemActive onUpdateTab={onUpdateTab} tab={tab} />;
    }

    return (
        <li className={classname(
            'px-2 py-2 rounded-2xl cursor-pointer transition',
            isActive ? 'bg-white/15' : '',
        )}>
            <Link to={`/tabs/${tab.id}`} className="cursor-pointer">{tab.title}</Link>
        </li>
    );
}

type TabItemActiveProps = {
    tab: ITab;
    onUpdateTab: TabItemProps['onUpdateTab'];
}
function TabItemActive({ tab, onUpdateTab }: TabItemActiveProps) {
    function handleUpdate(title: string) {
        if (typeof onUpdateTab === 'function') {
            onUpdateTab(tab.id, title);
        }
    }

    return (
        <li className="px-4 py-2 rounded-2xl cursor-pointer transition inline-block w-auto">
            <Input
                name=""
                type="text"
                value={tab.title}
                size={tab.title.length - 1  || 1}
                width={'auto'}
                minLength={1}
                maxLength={20}
                onChange={handleUpdate}
                className="bg-white/8 text-white"
            />
        </li>
    );
}