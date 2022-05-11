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
          <section className="child">UNDER CONSTRUCTION</section>
        </div>
      </div>
    </div>
  );
}

export default App;
