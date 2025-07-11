import TabClient from "./TabClient";

interface TabPageProps {
    params: Promise<{
        id: string;
    }>;
};

export default async function TabPage(props: TabPageProps) {
    const { id } = await props.params;

    return <TabClient id={id} />;
}