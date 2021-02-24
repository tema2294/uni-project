import './App.css';
import React, {useState} from "react";
import {Main} from "./Main/Main";
import {Header} from "./Header/header";
import {MainPage} from "./page/MainPage/MainPage";
import classes from "./Header/style.module.scss";
import {About} from "./page/about/about";
import { Redirect, Route, Switch } from "react-router-dom"
import { Link } from "react-router-dom"


function App() {
    const [state,setState] = useState([{1:1,2:2,3:3}])
    console.log(state)
    return (

            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path={"/"} children={<MainPage setState={setState} state={state}/>}/>
                    <Route path={"/About"} children={<About setState={setState} state={state} />} />
                </Switch>
                <div className="footer">
                    <div>
                        <ul>
                            <li><Link to={"/"}>Как заказать</Link></li>
                            <li><Link to={"1"}>Как оплатить</Link></li>
                            <li>Доставка и самовывоз</li>
                            <li>Клиентская поддержка</li>
                            <li>Подарочная карта</li>
                        </ul>
                    </div>
                    <div className={classes.logoContainer}>
                        <div style={{color: "black"}} className={classes.logoText}>
                            Интернет-магазин
                            стройматериалов
                        </div>
                        <div className={classes.logo}/>
                    </div>
                </div>
            </div>

    );
}

export default App;
