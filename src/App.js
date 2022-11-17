import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import './App.css';
import HomePage from './Pages/HomePage';
import DriftPage from './Pages/DriftPage';
import TimeAttackPage from './Pages/TimeAttackPage';
import ForzaPage from './Pages/ForzaPage';

function Menu() {
  return (
    <nav className="menu">
      <NavLink className={(navData) => (navData.isActive ? "menu__item-active menu__item" : 'menu__item')} to="/">Главная</NavLink>
      <NavLink className={(navData) => (navData.isActive ? "menu__item-active menu__item" : 'menu__item')} to="/drift">Дрифт-такси</NavLink>
      <NavLink className={(navData) => (navData.isActive ? "menu__item-active menu__item" : 'menu__item')} to="/timeattack">Forza Karting Sochi</NavLink>
      <NavLink className={(navData) => (navData.isActive ? "menu__item-active menu__item" : 'menu__item')} to="/forza">Гонка ​​​​​​Time Attack</NavLink>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
