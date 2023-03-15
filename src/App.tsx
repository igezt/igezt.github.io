import type { Component } from 'solid-js';

import logo from './logo.svg';
//import styles from './App.module.css';
import styles from './index.css'
import { Introduction } from './components/Introduction';
import TopBar from './components/TopBar';
import { Projects } from './components/Projects';

const App: Component = () => {
  return (
    <div class='fixed m-0 flex flex-col bg-slate-600 h-screen w-screen overflow-scroll'>
      <TopBar/>
      <div class='flex-col bg-slate-600 w-screen'>
        <Introduction/>
        <Projects/>

      </div>
    </div>
  );
};

export default App;
