import { Link } from "react-router-dom";
import ActionButton from "./buttons/ActionButton";
import { Grid2X2 } from "lucide-react";

export default function TabsLink() {
    return (
        <div className="fixed bottom-5 right-[50%] translate-x-[50%] flex justify-center items-center">
            <Link to="/tabs/first">
                <ActionButton title="Back to widgets">
                    <Grid2X2 size={20} /> Back to Widgets
                </ActionButton>
            </Link>
        </div>
    )
}