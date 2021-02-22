import React from "react"
import classesAll from "./../styleAll.module.scss"
import classes from "./style.module.scss.sass"
import clsx from "clsx";

export function MainPage() {

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

            </div>
        </div>
    )
}