
import './App.css';
import { Container} from 'react-bootstrap';
import Home from './containers/Home';
import AppConstants from './shared/AppConstants';
import 'bootstrap/dist/js/bootstrap.js';
import NavBar from './components/Navigation/NavBar';

function App() {
  return (
    <Container color="#fff" className={AppConstants.appTheme} >
      <NavBar title = {AppConstants.appName}/>
      <Home />
    </Container>
  );
}

export default App;
