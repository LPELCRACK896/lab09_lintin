/* eslint-disable import/extensions */ import React from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, HashRouter } from 'react-router-dom';
import './index.css';
import Game from './components/comp_game/Game';
import Menu from './components/comp_menu/Menu';

const container = document.getElementById('root');
const root = createRoot(container);
function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Menu />} />
          <Route exact path="/game" element={<Game />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
root.render(<App />);
