import './App.css'

import Sidebar from  './components/Sidebar';
import Splash from './components/Splash';

function App() {
  return (
    <div className="row">
      <div className="col-1">
        <Sidebar/>
      </div>
      <div className="col">
        <div className="container">
          <Splash/>
          <div className="section">This is another section.</div>
        </div>
      </div>
    </div>
  );
}

export default App;
