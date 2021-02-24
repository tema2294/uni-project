import React from "react"
import classes from "./style.module.scss"
import classesAll from "./../styleAll.module.scss"
import clsx from "clsx";

export function About(props,state) {
    return (
        <div className={classesAll.MainContainer}>

            <div className={classesAll.box}>
                <div className={classesAll.headerBox}>О нас</div>
                <div onClick={()=> props.setState((prev)=>[...prev,{0:0,3:"eqwe",4:"eqweq"}])}>Плюсик</div>
                <div className={classesAll.content2}>
                    Наша компания занимается продажей товаров высшего качество.
                    Я привожу,жека торгует .Все дела в общем все очень весело и круто
                </div>
            </div>
        </div>
    )
}