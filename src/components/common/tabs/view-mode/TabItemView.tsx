'use client';

import Link from "next/link";
import classname from "../../../../utils/classname";
import { ITab } from "../../../widgets/tab.type";

type TabItemViewProps = {
    tab: ITab;
    isActive: boolean;
}

export default function TabItemView({ tab, isActive }: TabItemViewProps) {
    return (
        <li className={classname(
            'px-3 py-1 rounded-xl cursor-pointer transition',
            isActive ? 'bg-white/15' : '',
        )}>
            <Link href={`/tabs/${tab.id}`} className="cursor-pointer">{tab.title}</Link>
        </li>
    );
}