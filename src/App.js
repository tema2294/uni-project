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
    const [sum,setSum]=useState(0)
    console.log(state)
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

            if (findItem ) {
                const NewItem = {...findItem, count: findItem.count - 1}
                if (findItem.count > 1) return [...prev.slice(0,findIndex),NewItem,...prev.slice(findIndex+1,prev.lenght)]
                if (findItem.count === 1) return  [prev[0],NewItem,...prev.slice(findIndex+1,prev.lenght)]
                if (findItem.count === 0)return [NewItem,...prev.slice(findIndex+1,prev.lenght)]
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
                    <Route path={"/Basket"}  children={<Basket sum={sum} state={state} deleteItem={deleteItem} setState={addBasket}/>} />
                    <Route path={"/Payment"}  children={<Payment sum={sum} />} />
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
