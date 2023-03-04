import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './components/MainPage';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/">
                        <Route></Route>
                        <Route></Route>
                        <Route></Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
