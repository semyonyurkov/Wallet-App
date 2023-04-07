import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import MainPage from './pages/MainPage';
import OperationsPage from './pages/OperationsPage';

import './App.css';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index={true} element={<MainPage />} />
                    <Route path="operations" element={<OperationsPage />} />
                    <Route />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
