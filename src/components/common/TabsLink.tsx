import Link from "next/link";
import { Grid2X2 } from "lucide-react";

export default function TabsLink() {
    return (
        <div className="fixed bottom-5 right-[50%] translate-x-[50%] flex justify-center items-center">
            <Link href="/tabs/first">
                <div className="flex items-center justify-center p-3 border border-white/40 rounded-2xl bg-white/15">
                    <Grid2X2 size={20} className="mr-1" />
                    <span>Back to Widgets</span>
                </div>
            </Link>
        </div>
    )
}