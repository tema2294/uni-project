import './App.css';
import React, {useState} from "react";
import {Main} from "./Main/Main";
import {Header} from "./Header/header";
import {MainPage} from "./page/MainPage/MainPage";
import classes from "./Header/style.module.scss";
import {About} from "./page/about/about";
import { Redirect, Route, Switch } from "react-router-dom"
import { Link } from "react-router-dom"
import {Contacts} from "./page/contacts/contacts";
import {Basket} from "./page/basket/basket";
import {Payment} from "./page/Payment/Payment";


function App() {
    const [state,setState] = useState([{img: "https://p7.hiclipart.com/preview/433/66/478/ohorongo-cement-bag-gunny-sack-portable-network-graphics-bag.jpg",name: "Штукатурка гипсовая Волма Слой 30 кг",count : 1,id: 1,price: 600}])
    function addBasket (item) {
        const id = item.id
        setState((prev)=>{
            const findItem = prev.find((key)=> key.id === id)

            if (findItem) {
                const newArr = prev.filter(key=> key.id !== id)
                const NewItem = {...findItem, count: findItem.count + 1}
                return [...newArr,NewItem]
            }
            else {
                return [...prev,item]
            }
        })
    }
    function deleteItem (item) {
        const id = item.id

        setState((prev)=>{
            const newArr = prev.filter(key=> key.id !== id)
            const findItem = prev.find((key)=> key.id === id)
            if (findItem && findItem.count > 1) {


                const NewItem = {...findItem, count: findItem.count - 1}
                return [...newArr,NewItem]
            }
            else {
                return [...newArr]
            }
        })
    }
    return (

            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path={"/"} children={<MainPage setState={addBasket} state={state}/>}/>
                    <Route path={"/About"} children={<About setState={setState} state={state} />} />
                    <Route path={"/Contacts"} children={<Contacts/>} />
                    <Route path={"/Basket"}  children={<Basket state={state} deleteItem={deleteItem} setState={addBasket}/>} />
                    <Route path={"/Payment"}  children={<Payment />} />
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
