import TabPage from './pages/TabPage';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function App() {
    return (
        <Routes>
            <Route path="/:idx" element={<TabPage />} />
            <Route path="*" element={<Navigate to="/0" replace />} />
        </Routes>
    )
}
