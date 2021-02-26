import React from "react"
import classesAll from "./../styleAll.module.scss"
import classes from "./style.module.scss.sass"
import clsx from "clsx";
import {GetData} from "../../resData";
import {Link} from "react-router-dom";
import {useToasts} from "react-toast-notifications";

export function MainPage(props,state) {
    const data = GetData("Top")
    const { addToast } = useToasts();

    return (
        <div className={classesAll.MainContainer}>
            <div className={clsx(classesAll.HeaderCenter,"animate__animated","animate__backInRight" )}>
                <div className={classesAll.HeaderFirst}>Стройматериалы с бесплатной доставкой по Ярославлю</div>
                <div className={classesAll.SecondHeader}>Бесплатная доставка до квартиры</div>
                <div className={classesAll.containerHeaderLine}>
                    <div className={clsx(classesAll.btn,classesAll.mt5)}>Смотреть каталог</div>
                </div>
            </div>
            <div className={clsx(classesAll.box,"animate__animated","animate__fadeInUpBig")}>
                <div className={classesAll.headerBox}>Топ продаж</div>
                <div className={classesAll.content}>
                    {data.map((key,i)=>
                        <div key={i} className={classesAll.card}>
                        <div style={{background: `url(${key.img})`,backgroundSize: "cover"}} className={classesAll.image}/>
                        <div className={classesAll.textcard}>{key.name}</div>
                        <div className={classesAll.info}>
                            <div className={classesAll.price}>{key.price+"руб."}</div>
                            <div onClick={()=> {
                                props.setState(key)
                                addToast("Товар успешно добавлен в корзину", {
                                    appearance: 'success',
                                })}
                            } className={classesAll.btnBuy}>В корзину</div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}