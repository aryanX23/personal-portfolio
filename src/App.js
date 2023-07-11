import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './MainPage';

function App() {
	return (
        <div className="App">
            <Routes>
                <Route exact path="/personal-portfolio/" element={<MainPage />} />
                <Route
                    exact
                    path="*"
                    element={<Navigate to="/personal-portfolio/" replace={true} />}
                />
            </Routes>
        </div>
    );
}

export default App;
