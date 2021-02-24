import React from "react"
import classesAll from "./../styleAll.module.scss"
import classes from "./style.module.scss.sass"
import clsx from "clsx";
import {GetData} from "../../resData";
import {Link} from "react-router-dom";

export function MainPage(props,state) {
    const data = GetData("Top")
    return (
        <div className={classesAll.MainContainer}>
            <div className={classesAll.HeaderCenter}>
                <div className={classesAll.HeaderFirst}>Стройматериалы с бесплатной доставкой по Ярославлю</div>
                <div className={classesAll.SecondHeader}>Бесплатная доставка до квартиры</div>
                <div className={classesAll.containerHeaderLine}>
                    <div className={clsx(classesAll.btn,classesAll.mt5)}>Смотреть каталог</div>
                </div>
            </div>
            <div className={classesAll.box}>
                <div className={classesAll.headerBox}>Топ продаж</div>
                <div onClick={()=> props.setState((prev)=>[...prev,{2:2,3:53,4:44}])}>Плюсик</div>
                <div className={classesAll.content}>
                    {data.map((key,i)=>
                        <div key={i} className={classesAll.card}>
                        <div style={{background: `url(${key.img})`,backgroundSize: "cover"}} className={classesAll.image}/>
                        <div className={classesAll.textcard}>{key.name}</div>
                        <div className={classesAll.info}>
                            <div className={classesAll.price}>{key.price+"руб."}</div>
                            <div className={classesAll.btnBuy}>В корзину</div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}