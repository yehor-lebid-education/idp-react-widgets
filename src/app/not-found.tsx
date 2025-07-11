import { Link } from "lucide-react";
import Text from "@/components/common/ui/Text";
import PageContainer from "@/layout/PageContainer";

export default function NotFound() {
    return (
        <PageContainer>
            <div>
                <Text size="2xl">Page Not Found</Text>
            </div>
            <div>
                <Link href="/tabs/first">Widget Dashboard</Link>
            </div>
        </PageContainer>
    )
}