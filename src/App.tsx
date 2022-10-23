import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HomeClass from './pages/HomeClass';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomeClass />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Provider>
  );
}

export default App;
