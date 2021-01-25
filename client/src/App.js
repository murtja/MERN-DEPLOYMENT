import Home from './views/Home';
import New from './views/New';
import WelcomePage from './views/WelcomePage';
import { Router } from '@reach/router';


function App() {

  return (
    <div>
      <Router>
        <WelcomePage path="/"/>
        <Home path="/project"/>
        <New path="/new"/>
      </Router>
    </div>
  );
}

export default App;
