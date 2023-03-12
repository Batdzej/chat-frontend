import React from 'react';
import {
  HashRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Login from './routes/login/react/Login';
import styles from './App.module.css';
import Registration from './routes/registration/react/Registration';

function App() {
  return (
    <Router>
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </main>
    </Router>
  );
}

export default App;