import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import MainPage from './pages/MainPage';
import OperationsPage from './pages/OperationsPage';
import './App.css';

function App() {
    const [operations, setOperations] = useState([]);
    const [balance, setBalance] = useState(0);

    const addOperations = (reason, balance, isNegativOperation) => {
        console.log(operations);
        setOperations([
            ...operations,
            {
                reason: reason,
                balance: balance,
                isNegativOperation: isNegativOperation,
            },
        ]);
    };

    function changeBalance(sum) {
        return setBalance(Number(balance) + Number(sum));
    }

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route
                            index={true}
                            element={
                                <MainPage
                                    changeBalance={changeBalance}
                                    addOperations={addOperations}
                                    balance={balance}
                                />
                            }
                        />
                        <Route
                            path="operations"
                            element={<OperationsPage operations={operations} />}
                        />
                        <Route />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
