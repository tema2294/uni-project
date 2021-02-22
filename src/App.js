import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import {Main} from "./Main/Main";
import {Header} from "./Header/header";
import {MainPage} from "./page/MainPage/MainPage";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Switch>
                <Route path={"/"} component={MainPage}/>
                </Switch>
            </div>
        </BrowserRouter>

    );
}

export default App;
