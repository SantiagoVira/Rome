import "./App.css";
import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Menu from "./Menu/Menu";
import Home from "./Home/Home";
import Error from "./Error/Error";
import Experience from "./Experience/Experience";
import Sources from "./Sources/Sources";

function App() {
    const history = createBrowserHistory();

    return (
        <div className="App">
            <Menu history={history} />
            <div className="content">
                <Router history={history}>
                    <>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/experience" component={Experience} />
                            <Route path="/sources" component={Sources} />
                            <Route component={Error} />
                        </Switch>
                    </>
                </Router>
            </div>
        </div>
    );
}

export default App;
