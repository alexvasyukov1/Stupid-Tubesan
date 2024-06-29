import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Articles from "./components/Articles";
import News from "./components/News";
import Subjects from "./components/Subjects";
import StudentInfo from "./components/StudentInfo";
import Auth from "./components/Auth";

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Overmindv | MY HSE</h1>
          <Auth/>
        </header>
        <main>
          <aside className="sidebar-left">
            <StudentInfo/>
            <Subjects/>
          </aside>
          <section className="content">
            <Articles/>
          </section>
          <aside className="sidebar-right">
            <News/>
          </aside>
        </main>
      </div>
    </Router>
  );
}

export default App;
