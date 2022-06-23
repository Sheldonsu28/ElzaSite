import './App.css';
import WelcomePage from './frontend/views/WelcomePage';

import {config} from 'dotenv';

config();


function App() {
  console.log(process.env.HOST_URL)
  return (
      <div className="App">
          <WelcomePage/>
      </div>
  );
}

export default App;
