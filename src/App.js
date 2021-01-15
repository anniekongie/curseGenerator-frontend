import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";


import Header from './components/Partials/Header';
import Footer from './components/Partials/Footer';
import LandingPage from './pages/LandingPage/LandingPage';
import GeneratorPage from './pages/GeneratorPage/GeneratorPage'
import AboutPage from './pages/AboutPage';
import './App.css';
const history = createBrowserHistory();

function App() {
    return (
        <div className="App">
            <Router history={history} >
                <Header />
                <main>
                    <Switch>
                        <Route exact path="/about" component={AboutPage}/>
                        <Route exact path="/generate" component={GeneratorPage} />
                        <Route exact path="/" component={LandingPage}/> 
                    </Switch>
                </main>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
