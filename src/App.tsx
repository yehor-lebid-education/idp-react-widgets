import { Navigate, Route, Routes } from "react-router-dom";
import DocsPage from "./pages/DocsPage";
import TabPage from "./pages/TabPage";
import useWidgetBroadcastHandler from "./hooks/useWidgetBroadcastHandler";

export default function App() {
    useWidgetBroadcastHandler();

    return (
        <Routes>
            {/* Page with documentation */}
            <Route path="/docs" element={<DocsPage />} />
            {/* Page with tab widgets */}
            <Route path="/tabs/:tabId" element={<TabPage />} />
            {/* Redirect to not existent tab: first will be selected */}
            <Route path="*" element={<Navigate to="/tabs/first" />} />
        </Routes>
    );
}
