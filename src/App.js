import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import MainPage from './components/MainPage';
import Operations from './components/Operations';
import './App.css';

function App() {
    const [operations, setOperations] = useState([]);

    function operationsSetting() {
        setOperations(...operations);
    }
    console.log(operations);
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route
                            index={true}
                            element={
                                <MainPage
                                    operationsSetting={operationsSetting}
                                />
                            }
                        />
                        <Route path="operations" element={<Operations />} />
                        <Route />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
