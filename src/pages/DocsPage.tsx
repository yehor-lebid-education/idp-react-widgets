import Guide from "../components/guides/Guide";
import PageContainer from "../layout/PageContainer";
import TabsLink from "../components/common/TabsLink";

export default function DocsPage() {
    return (
        <PageContainer>
            <Guide />
            <TabsLink />
        </PageContainer>
    );
}