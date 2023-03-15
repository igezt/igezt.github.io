import type { Component } from 'solid-js';

import { AppBar } from './components/AppBar';
import { Introduction } from './components/Introduction';
import { WorkExperience } from './components/WorkExperience';
import Scrollbars from 'solid-custom-scrollbars';

const App: Component = () => {
  return (
        <div class="bg-gray-900 flex flex-col w-screen scroll-m-0 h-full">
          <AppBar/>
          <Introduction/>
          <WorkExperience/>
        </div>
  );
};

export default App;
