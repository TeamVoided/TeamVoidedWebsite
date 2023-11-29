import {render} from 'preact';
import {LocationProvider, Router, Route} from 'preact-iso';

import Header from './components/Header.jsx';
import Home from './pages/Home';
import PackMaker from "./pages/v0/VoidedTweaks/MainPage";
import {NotFound} from './pages/_404.jsx';
import './style.css';
import Test from "./pages/Test";


export function App() {
    return (
        <LocationProvider>
            <Header/>
            <Router>
                <Route path="/" component={Home}/>
                <Route path="/voided-tweaks" component={PackMaker}/>
                <Route path="/voided-tweaks/:id" component={PackMaker}/>
                <Route path="/test" component={Test}/>
                <Route default component={NotFound}/>
            </Router>
        </LocationProvider>
    );
}

render(<App/>, document.getElementById('app'));
