import './App.css';
import Header from './components/Header/Header';
import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import { LoginScreen } from './screens/LoginScreen/LoginScreen';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={LoginScreen} />
        <Route path="/home" element={HomeScreen} />
        <Route path="/home/suscribers" element={<p>SUSCRIBERS</p>} />
      </Routes>
      <Header />
      <HomeScreen />
    </div>
  );
}

export default App;
