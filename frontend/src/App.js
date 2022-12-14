import './App.css';

import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/suscribers" element={<p>SUSCRIBERS</p>} />
      </Routes>
    </div>
  );
}

export default App;
