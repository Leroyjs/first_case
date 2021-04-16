import './App.css';
import './reset.scss';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage.jsx';
import { ProfilePage } from './pages/ProfilePage/ProfilePage.jsx';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => <MainPage></MainPage>}
                    />
                    <Route
                        exact
                        path="/profile"
                        render={() => <ProfilePage></ProfilePage>}
                    />
                    <Route render={() => <span>404</span>} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
