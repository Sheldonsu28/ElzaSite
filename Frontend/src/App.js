import './App.css';
import WelcomePage from './frontend/views/WelcomePage';

import {config} from 'dotenv';

config();


function App() {
  console.log('哈哈！ 大白猫！')
  return (
      <div className="App">
          <WelcomePage/>
      </div>
  );
}

export default App;
