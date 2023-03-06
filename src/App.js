import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import MainPage from './components/MainPage';
import Operations from './components/Operations';
import './App.css';

const balance = 0;

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route
                            index={true}
                            element={<MainPage balance={balance} />}
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
