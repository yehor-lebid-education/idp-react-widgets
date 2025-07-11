import TabsLink from "@/components/common/TabsLink";
import Guide from "@/components/guides/Guide";
import PageContainer from "@/layout/PageContainer";

export default function DocsPage() {
    return (
        <PageContainer>
            <Guide />
            <TabsLink />
        </PageContainer>
    );
}