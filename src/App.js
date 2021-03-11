import './App.css';
import React, {useState} from "react";
import {Header} from "./Header/header";
import {MainPage} from "./page/MainPage/MainPage";
import classes from "./Header/style.module.scss";
import {About} from "./page/about/about";
import { Redirect, Route, Switch } from "react-router-dom"
import { Link } from "react-router-dom"
import {Contacts} from "./page/contacts/contacts";
import {Basket} from "./page/basket/basket";
import {Payment} from "./page/Payment/Payment";
import {Catalog} from "./page/Catalog/catalog";
import {Success} from "./page/successBuy/Success";
import {WhatMyItem} from "./page/WhatWithMyItem/What";
import {Feedback} from "./page/Feedback/feedback";
import {Advice} from "./page/advice/advice";
import {useToasts} from "react-toast-notifications";


function App() {
    const [state,setState] = useState([])
    const [sum,setSum]=useState(0)

    const { addToast } = useToasts();

    function addBasket (item) {
        const id = item.id
        setSum((prev)=>prev+item.price)
        setState((prev)=>{
                // prev.find((key)=> key.id === id)
            const findIndex = prev.findIndex((key)=> key.id === id)
            const findItem =prev[findIndex]
            if (findItem ) {
                const newArr = prev.filter(key=> key.id !== id)
                const NewItem = {...findItem, count: findItem.count + 1}
                if (findIndex >1 ) {
                return [...prev.slice(0,findIndex),NewItem,...prev.slice(findIndex+1,prev.lenght)]
                }
                if (findIndex === 1 ) {
                    return [prev[0],NewItem,...prev.slice(findIndex+1,prev.lenght)]
                }
                if (findIndex === 0) {
                    return [NewItem,...prev.slice(findIndex+1,prev.lenght)]
                }

            }
            else {
                console.log("Сработала")
                return [...prev,item]
            }
        })
    }
    function deleteItem (item) {
        const id = item.id
        setSum((prev)=>prev-item.price)

        setState((prev)=>{
            const newArr = prev.filter(key=> key.id !== id)
            const findIndex = prev.findIndex(key=> key.id === id)
            const findItem =prev[findIndex]
            const NewItem = {...findItem, count: findItem.count - 1}

            if (findItem && findItem.count >1 ) {
                const NewItem = {...findItem, count: findItem.count - 1}
                if (findItem.count > 1) return [...prev.slice(0,findIndex),NewItem,...prev.slice(findIndex+1,prev.lenght)]
                if (findItem.count === 1) return  [prev[0],NewItem,...prev.slice(findIndex+1,prev.lenght)]
                if (findItem.count === 0)return [...newArr]
            }
            else {
                return [...newArr]
            }
        })
    }
    function Toast(text) {
        addToast(text, {
            appearance: 'info',
        })
    }
    return (

            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path={"/"} children={<MainPage setState={addBasket} state={state}/>}/>
                    <Route path={"/About"} children={<About setState={setState} state={state} />} />
                    <Route path={"/Contacts"} children={<Contacts/>} />
                    <Route path={"/Basket"}  children={<Basket sum={sum} state={state} deleteItem={deleteItem} setState={addBasket}/>} />
                    <Route path={"/Payment"}  children={<Payment sum={sum} setSum={setSum} setState={setState}/>} />
                    <Route path={"/Catalog"}  children={<Catalog setState={addBasket} />} />
                    <Route path={"/Success"}  children={<Success />} />
                    <Route path={"/What"}  children={<WhatMyItem />} />
                    <Route path={"/Feedback"}  children={<Feedback />} />
                    <Route path={"/Advice"}  children={<Advice />} />

                </Switch>
                <div className="footer">
                    <div>
                        <ul>
                            <li onClick={()=>Toast("Переходите в каталог,добавляете нужный товар в корзину и оплачивате.")}>Как заказать</li>
                            <li onClick={()=>Toast("Чтобы оплатить товар ,перейдите в корзину и нажмите оформить заказ.")}>Как оплатить</li>
                            <li onClick={()=>Toast("Доставка осуществляется в любую точку мира")}>Доставка и самовывоз</li>
                            <li onClick={()=>Toast("В контактах вы сможете найти номер телефона и получить требуюмую поддержку")}>Клиентская поддержка</li>
                            <li onClick={()=>Toast("Подарочная карта заказывается по горячей линии.Номер указан в контактах")}>Подарочная карта</li>
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
