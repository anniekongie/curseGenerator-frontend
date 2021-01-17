import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";


import Header from './components/Partials/Header';
import Footer from './components/Partials/Footer';
import LandingPage from './pages/LandingPage/LandingPage';
import GeneratorPage from './pages/GeneratorPage/GeneratorPage'
import AboutPage from './pages/AboutPage';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './utils/mui-theme';


import './App.css';
const history = createBrowserHistory();

function App(props) {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Header history={props.history}/>
                <main>
                    <Switch>
                        <Route exact path="/" component={LandingPage}/> 
                        <Route path="/about" component={AboutPage}/>
                        <Route path="/generate" component={GeneratorPage} />
                    </Switch>
                </main>
                <Footer />
            </ThemeProvider>
        </div>
    );
}

export default App;
